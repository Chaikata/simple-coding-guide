import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

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

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getExistingArticles() {
  try {
    const file = fs.readFileSync("data/articles.ts", "utf-8");
    const match = file.match(
      /export const articles: Article\[\] = (\[[\s\S]*\]);/
    );

    if (!match) return [];

    const existing = eval(match[1]);

    if (!Array.isArray(existing)) return [];

    return existing;
  } catch {
    return [];
  }
}

function getExistingSlugsAndTitles() {
  const existingArticles = getExistingArticles();

  return {
    slugs: new Set(existingArticles.map((a) => slugify(a.slug || ""))),
    titles: new Set(existingArticles.map((a) => normalizeText(a.title || ""))),
  };
}

function normalizeContent(content) {
  if (!Array.isArray(content)) return [];

  return content.map((block) => {
    if (typeof block === "string") {
      return { type: "paragraph", value: block };
    }

    if (
      block &&
      typeof block === "object" &&
      (block.type === "paragraph" || block.type === "code") &&
      typeof block.value === "string"
    ) {
      return {
        type: block.type,
        value: block.value,
      };
    }

    return { type: "paragraph", value: String(block) };
  });
}

function isTooSimilar(newTitle, existingTitles) {
  const newWords = normalizeText(newTitle).split(" ").filter(Boolean);

  if (!newWords.length) return false;

  return existingTitles.some((title) => {
    const existingWords = normalizeText(title).split(" ").filter(Boolean);
    const overlap = newWords.filter((w) => existingWords.includes(w)).length;

    return overlap / newWords.length > 0.7;
  });
}

async function retry(label, fn) {
  let lastError;

  for (let i = 0; i <= GENERATION_LIMITS.maxRetries; i++) {
    try {
      return await fn();
    } catch (e) {
      lastError = e;
      console.log(`${label} retry ${i + 1}: ${e.message}`);
    }
  }

  throw lastError;
}

// =========================
// YOUTUBE
// =========================

async function searchYouTubeVideo(topic, language, type) {
  if (!YOUTUBE_API_KEY) {
    console.log("No YOUTUBE_API_KEY found. Skipping YouTube lookup.");
    return "";
  }

  const searchQueries = [
    `${topic} ${language} tutorial`,
    `${topic} ${language}`,
    `${language} ${type} ${topic}`,
  ];

  for (const query of searchQueries) {
    try {
      const url =
        "https://www.googleapis.com/youtube/v3/search?" +
        new URLSearchParams({
          part: "snippet",
          q: query,
          key: YOUTUBE_API_KEY,
          maxResults: "5",
          type: "video",
          videoEmbeddable: "true",
          safeSearch: "moderate",
          order: "relevance",
        }).toString();

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`YouTube API error ${res.status}`);
      }

      const data = await res.json();
      const items = Array.isArray(data.items) ? data.items : [];

      const best = items.find(
        (item) =>
          item?.id?.videoId &&
          item?.snippet?.title &&
          item?.snippet?.description !== undefined
      );

      if (best?.id?.videoId) {
        return `https://www.youtube.com/watch?v=${best.id.videoId}`;
      }
    } catch (error) {
      console.log(`YouTube lookup failed for "${query}": ${error.message}`);
    }
  }

  return "";
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
- Avoid overused topics like deadlocks, syntax errors, and vague generic topics
- Be interesting, practical, and useful
- Mix tutorials, tricks, comparisons, and real-world topics
- Avoid near duplicates
- Make the titles SEO-friendly
- Return plain topic titles only

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

  return (Array.isArray(data.topics) ? data.topics : [])
    .map((t) => String(t).trim())
    .filter(Boolean)
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

Requirements:
- Clear SEO-friendly title
- Short meta-style description
- Helpful, accurate, beginner-friendly content
- Use paragraphs and code blocks only
- Do NOT include a video URL in the JSON
- Content should be practical and readable

Return ONLY JSON:
{
  "slug": "slug",
  "title": "title",
  "language": "${language}",
  "type": "${type}",
  "description": "desc",
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
  const videoUrl = await searchYouTubeVideo(topic, language, type);

  return {
    slug: slugify(article.slug || topic),
    title: article.title || topic,
    language,
    type,
    description: article.description || "",
    videoUrl,
    content: normalizeContent(article.content),
  };
}

// =========================
// MAIN RUN
// =========================

async function run() {
  const allArticles = [];
  const { slugs: existingSlugs, titles: existingTitlesFromFile } =
    getExistingSlugsAndTitles();

  const runTitles = new Set();

  for (const plan of contentPlans) {
    if (allArticles.length >= GENERATION_LIMITS.maxArticlesPerRun) break;

    let topics = [];

    try {
      topics = await retry(`topics ${plan.language}/${plan.type}`, () =>
        generateTopics(plan.language, plan.type)
      );
    } catch (e) {
      console.log(
        `Failed topic generation for ${plan.language}/${plan.type}: ${e.message}`
      );
      continue;
    }

    for (const topic of topics) {
      if (allArticles.length >= GENERATION_LIMITS.maxArticlesPerRun) break;

      let article;

      try {
        article = await retry(`article ${topic}`, () =>
          generateArticle(topic, plan.language, plan.type)
        );
      } catch (e) {
        console.log(`Failed article "${topic}": ${e.message}`);
        continue;
      }

      if (!article?.slug || !article?.title) continue;

      const normalizedSlug = slugify(article.slug);
      const normalizedTitle = normalizeText(article.title);

      if (existingSlugs.has(normalizedSlug)) {
        console.log(`Skipping duplicate slug: ${article.slug}`);
        continue;
      }

      if (existingTitlesFromFile.has(normalizedTitle)) {
        console.log(`Skipping duplicate existing title: ${article.title}`);
        continue;
      }

      if (runTitles.has(normalizedTitle)) {
        console.log(`Skipping duplicate run title: ${article.title}`);
        continue;
      }

      if (
        isTooSimilar(article.title, [
          ...Array.from(existingTitlesFromFile),
          ...Array.from(runTitles),
        ])
      ) {
        console.log(`Skipping too-similar title: ${article.title}`);
        continue;
      }

      existingSlugs.add(normalizedSlug);
      runTitles.add(normalizedTitle);
      allArticles.push(article);

      console.log(
        `Added: ${article.title}${article.videoUrl ? " [video]" : " [no video]"}`
      );

      break;
    }
  }

  fs.writeFileSync(
    "generatedArticles.json",
    JSON.stringify(allArticles, null, 2)
  );

  console.log(`Created ${allArticles.length} articles`);
}

run();