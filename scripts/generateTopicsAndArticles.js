import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const contentPlans = [
  { language: "javascript", type: "tutorials" },
  { language: "javascript", type: "errors" },

  { language: "typescript", type: "tutorials" },
  { language: "typescript", type: "errors" },

  { language: "python", type: "tutorials" },
  { language: "python", type: "errors" },

  { language: "sql", type: "tutorials" },
  { language: "sql", type: "errors" },
];

const GENERATION_LIMITS = {
  maxTopicsPerPlan: 12,
  maxArticlesPerRun: 8,
  maxRetries: 2,
};

// =========================
// HELPERS
// =========================

function cleanJson(text) {
  return String(text || "")
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

function extractResponseText(response) {
  if (response?.output_text) return response.output_text;

  if (!Array.isArray(response?.output)) return "";

  return response.output
    .map((item) =>
      item?.content?.map((part) => part?.text || "").join("") || ""
    )
    .join("")
    .trim();
}

function extractJson(text) {
  const cleaned = cleanJson(text);

  try {
    return JSON.parse(cleaned);
  } catch {}

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  if (firstBrace !== -1 && lastBrace !== -1) {
    return JSON.parse(cleaned.slice(firstBrace, lastBrace + 1));
  }

  throw new Error("Invalid JSON");
}

function slugify(input) {
  return String(input || "")
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getExistingSlugs() {
  try {
    const file = fs.readFileSync("data/articles.ts", "utf-8");
    const match = file.match(/export const articles: Article\[\] = (\[[\s\S]*\]);/);
    if (!match) return new Set();
    const existing = eval(match[1]);
    return new Set(existing.map((a) => a.slug));
  } catch {
    return new Set();
  }
}

function normalizeContent(content) {
  if (!Array.isArray(content)) return [];

  return content.map((block) => {
    if (typeof block === "string") {
      return { type: "paragraph", value: block };
    }

    if (block?.type && typeof block.value === "string") {
      return block;
    }

    return { type: "paragraph", value: String(block) };
  });
}

function isTooSimilar(newTitle, existingTitles) {
  const normalize = (str) =>
    str.toLowerCase().replace(/[^a-z0-9 ]/g, "");

  const newWords = normalize(newTitle).split(" ").filter(Boolean);

  return existingTitles.some((title) => {
    const existingWords = normalize(title).split(" ").filter(Boolean);
    const overlap = newWords.filter((w) => existingWords.includes(w)).length;

    return newWords.length > 0 && overlap / newWords.length > 0.7;
  });
}

async function retry(label, fn) {
  let lastError;

  for (let i = 0; i <= GENERATION_LIMITS.maxRetries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      console.log(`${label} retry ${i + 1}`);
    }
  }

  throw lastError;
}

// =========================
// TOPIC GENERATOR
// =========================

async function generateTopics(language, type) {
  const buckets = [
    "beginner guide",
    "advanced deep dive",
    "performance optimization",
    "real-world project",
    "comparison",
    "cool tricks",
    "best practices",
    "data modeling",
    "system design",
    "edge cases",
  ];

  const banned = [
    "deadlock",
    "timeout error",
    "syntax error",
    "fix error",
    "common errors",
  ];

  const bucket = buckets[Math.floor(Math.random() * buckets.length)];

  const prompt = `
Generate ${GENERATION_LIMITS.maxTopicsPerPlan} UNIQUE coding article topics.

Language: ${language}
Type: ${type}
Category: ${bucket}

Rules:
- Avoid repetitive "fix error" topics
- Avoid overused topics (deadlocks, syntax errors)
- Be interesting, practical, and useful
- Mix tutorials, tricks, comparisons
- Avoid near duplicates

Return ONLY JSON:
{
  "topics": ["topic 1", "topic 2"]
}
`;

  const res = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const text = extractResponseText(res);
  const data = extractJson(text);

  return data.topics
    .map((t) => String(t).trim())
    .filter((t) => !banned.some((b) => t.toLowerCase().includes(b)))
    .slice(0, GENERATION_LIMITS.maxTopicsPerPlan);
}

// =========================
// ARTICLE GENERATOR
// =========================

async function generateArticle(topic, language, type) {
  const prompt = `
Write a beginner-friendly coding article.

Topic: ${topic}
Language: ${language}
Type: ${type}

Return ONLY JSON:
{
  "slug": "slug",
  "title": "title",
  "language": "${language}",
  "type": "${type}",
  "description": "desc",
  "videoUrl": "",
  "content": [
    { "type": "paragraph", "value": "text" },
    { "type": "code", "value": "code" }
  ]
}
`;

  const res = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const article = extractJson(extractResponseText(res));

  return {
    slug: slugify(article.slug || topic),
    title: article.title || topic,
    language,
    type,
    description: article.description || "",
    videoUrl: article.videoUrl || "",
    content: normalizeContent(article.content),
  };
}

// =========================
// MAIN RUN
// =========================

async function run() {
  const allArticles = [];
  const existingSlugs = getExistingSlugs();
  const existingTitles = new Set();

  for (const plan of contentPlans) {
    if (allArticles.length >= GENERATION_LIMITS.maxArticlesPerRun) break;

    let topics = [];

    try {
      topics = await retry(`topics ${plan.language}/${plan.type}`, () =>
        generateTopics(plan.language, plan.type)
      );
    } catch (e) {
      console.log(`Failed topic generation for ${plan.language}/${plan.type}`);
      continue;
    }

    for (const topic of topics) {
      if (allArticles.length >= GENERATION_LIMITS.maxArticlesPerRun) break;

      try {
        const article = await retry(`article ${topic}`, () =>
          generateArticle(topic, plan.language, plan.type)
        );

        if (!article.slug || existingSlugs.has(article.slug)) {
          console.log(`Skipping duplicate slug: ${article.slug}`);
          continue;
        }

        if (existingTitles.has(article.title)) {
          console.log(`Skipping duplicate title: ${article.title}`);
          continue;
        }

        if (isTooSimilar(article.title, [...existingTitles])) {
          console.log(`Skipping too-similar title: ${article.title}`);
          continue;
        }

        existingSlugs.add(article.slug);
        existingTitles.add(article.title);
        allArticles.push(article);

        console.log(`Generated: ${article.title}`);
      } catch (e) {
        console.log(`Failed article: ${topic}`);
      }
    }
  }

  fs.writeFileSync("generatedArticles.json", JSON.stringify(allArticles, null, 2));
  console.log(`Saved ${allArticles.length} articles to generatedArticles.json`);
}

run();