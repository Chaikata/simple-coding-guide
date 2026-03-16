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
  maxTopicsPerPlan: 10,
  maxArticlesPerRun: 8,
  maxPerLanguage: 2,
  maxPerType: 4,
  maxRetries: 2,
};

function cleanJson(text) {
  return text.replace(/```json/g, "").replace(/```/g, "").trim();
}

function extractJson(text) {
  const cleaned = cleanJson(text);

  try {
    return JSON.parse(cleaned);
  } catch {}

  const firstBrace = cleaned.indexOf("{");
  const lastBrace = cleaned.lastIndexOf("}");

  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    const possibleJson = cleaned.slice(firstBrace, lastBrace + 1);
    return JSON.parse(possibleJson);
  }

  throw new Error("Could not extract valid JSON from model output.");
}

function getExistingSlugs() {
  const articlesFile = fs.readFileSync("data/articles.ts", "utf-8");

  const match = articlesFile.match(
    /export const articles: Article\[\] = (\[[\s\S]*\]);/
  );

  if (!match) return new Set();

  const existingArticles = eval(match[1]);
  return new Set(existingArticles.map((article) => article.slug));
}

function normalizeContent(content) {
  if (!Array.isArray(content)) return [];

  return content.map((block) => {
    if (typeof block === "string") {
      return {
        type: "paragraph",
        value: block,
      };
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

    return {
      type: "paragraph",
      value: String(block),
    };
  });
}

function createCounterMap() {
  return new Map();
}

function getCount(map, key) {
  return map.get(key) || 0;
}

function incrementCount(map, key) {
  map.set(key, getCount(map, key) + 1);
}

function canGenerateArticle(language, type, totalCreated, languageCounts, typeCounts) {
  if (totalCreated >= GENERATION_LIMITS.maxArticlesPerRun) {
    return false;
  }

  if (getCount(languageCounts, language) >= GENERATION_LIMITS.maxPerLanguage) {
    return false;
  }

  if (getCount(typeCounts, type) >= GENERATION_LIMITS.maxPerType) {
    return false;
  }

  return true;
}

async function retry(label, fn) {
  let lastError;

  for (let attempt = 1; attempt <= GENERATION_LIMITS.maxRetries + 1; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.log(`${label} retry ${attempt}`);
    }
  }

  throw lastError;
}

async function generateTopics(language, type) {
  const prompt = `
Generate ${GENERATION_LIMITS.maxTopicsPerPlan} beginner-friendly article topic ideas for a coding website.

Language: ${language}
Type: ${type}

Rules:
- If type is "tutorials", create beginner-friendly learning topics.
- If type is "errors", create realistic error-fix topics people search for.
- Keep topics highly searchable.
- Avoid duplicate ideas.
- Do NOT use unescaped double quotes inside any topic.
- Prefer simple clean titles without quotation marks.
- Return ONLY valid JSON.
- Do not use markdown.
- Do not include any text before or after the JSON.

Use this exact format:
{
  "topics": [
    "topic 1",
    "topic 2",
    "topic 3",
    "topic 4",
    "topic 5",
    "topic 6",
    "topic 7",
    "topic 8",
    "topic 9",
    "topic 10"
  ]
}
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const data = extractJson(response.output_text);

  if (!Array.isArray(data.topics)) {
    throw new Error("Invalid topics response");
  }

  return data.topics
    .map((topic) => String(topic).replace(/"/g, "").trim())
    .filter(Boolean)
    .slice(0, GENERATION_LIMITS.maxTopicsPerPlan);
}

async function generateArticle(topic, language, type) {
  const prompt = `
Write a beginner-friendly coding article.

Topic: ${topic}
Language: ${language}
Type: ${type}

Rules:
- Tutorials teach concepts clearly for beginners.
- Errors explain what the problem means, why it happens, and how to fix it.
- Include at least one code example when relevant.
- Return ONLY valid JSON.
- Do not use markdown.
- Do not include any text before or after the JSON.

Use this exact format:
{
  "slug": "topic-url-slug",
  "title": "Article Title",
  "language": "${language}",
  "type": "${type}",
  "description": "Short description",
  "content": [
    {
      "type": "paragraph",
      "value": "intro paragraph"
    },
    {
      "type": "paragraph",
      "value": "explanation paragraph"
    },
    {
      "type": "code",
      "value": "example code here"
    },
    {
      "type": "paragraph",
      "value": "summary paragraph"
    }
  ]
}
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const article = extractJson(response.output_text);

  return {
    slug: article.slug,
    title: article.title,
    language: article.language,
    type: article.type,
    description: article.description,
    content: normalizeContent(article.content),
  };
}

async function run() {
  const allArticles = [];
  const existingSlugs = getExistingSlugs();
  const languageCounts = createCounterMap();
  const typeCounts = createCounterMap();

  console.log("Starting article generation...");

  for (const plan of contentPlans) {
    console.log(`Topics for ${plan.language} / ${plan.type}`);

    let topics = [];

    try {
      topics = await retry(`${plan.language}/${plan.type} topics`, () =>
        generateTopics(plan.language, plan.type)
      );
    } catch (error) {
      console.log(`Skipping ${plan.language}/${plan.type} topics`);
      continue;
    }

    for (const topic of topics) {
      if (
        !canGenerateArticle(
          plan.language,
          plan.type,
          allArticles.length,
          languageCounts,
          typeCounts
        )
      ) {
        break;
      }

      console.log(`Generating: ${topic}`);

      let article;

      try {
        article = await retry(topic, () =>
          generateArticle(topic, plan.language, plan.type)
        );
      } catch (error) {
        console.log("Skipping after retries");
        continue;
      }

      if (!article || !article.slug || !article.title || !article.description) {
        console.log("Skipping invalid article payload");
        continue;
      }

      if (existingSlugs.has(article.slug)) {
        console.log(`Duplicate skipped: ${article.slug}`);
        continue;
      }

      existingSlugs.add(article.slug);
      incrementCount(languageCounts, article.language);
      incrementCount(typeCounts, article.type);
      allArticles.push(article);

      console.log(`Added: ${article.slug} | total=${allArticles.length}`);
    }
  }

  fs.writeFileSync(
    "generatedArticles.json",
    JSON.stringify(allArticles, null, 2)
  );

  console.log(`Created ${allArticles.length} new articles`);
}

run().catch((error) => {
  console.error(error);
  process.exit(1);
});