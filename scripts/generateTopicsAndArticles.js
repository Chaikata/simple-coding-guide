import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/*
LANGUAGES + CONTENT TYPES
*/

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

/*
GENERATION LIMITS
*/

const GENERATION_LIMITS = {
  maxTopicsPerPlan: 10,
  maxArticlesPerRun: 8,
  maxPerLanguage: 2,
  maxPerType: 4,
  maxRetries: 2,
};

/*
UTILS
*/

function cleanJson(text) {
  return text.replace(/```json/g, "").replace(/```/g, "").trim();
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

/*
TOPIC GENERATION
*/

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
- Return ONLY valid JSON.

Format:
{
 "topics": ["topic1","topic2","topic3"]
}
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const cleaned = cleanJson(response.output_text);
  const data = JSON.parse(cleaned);

  return data.topics.slice(0, GENERATION_LIMITS.maxTopicsPerPlan);
}

/*
ARTICLE GENERATION
*/

async function generateArticle(topic, language, type) {
  const prompt = `
Write a beginner-friendly coding article.

Topic: ${topic}
Language: ${language}
Type: ${type}

Rules:
- Tutorials teach concepts
- Errors explain problem and fix
- Include at least one code example
- Return ONLY JSON

Format:
{
 "slug":"topic-url-slug",
 "title":"Article Title",
 "language":"${language}",
 "type":"${type}",
 "description":"Short description",
 "content":[
  {"type":"paragraph","value":"text"},
  {"type":"code","value":"example code"}
 ]
}
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const cleaned = cleanJson(response.output_text);
  const article = JSON.parse(cleaned);

  return {
    slug: article.slug,
    title: article.title,
    language: article.language,
    type: article.type,
    description: article.description,
    content: normalizeContent(article.content),
  };
}

/*
MAIN RUNNER
*/

async function run() {
  const allArticles = [];
  const existingSlugs = getExistingSlugs();

  const languageCounts = createCounterMap();
  const typeCounts = createCounterMap();

  console.log("Starting article generation...");

  for (const plan of contentPlans) {
    console.log(`Topics for ${plan.language} / ${plan.type}`);

    const topics = await generateTopics(plan.language, plan.type);

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

      if (existingSlugs.has(article.slug)) {
        console.log(`Duplicate skipped: ${article.slug}`);
        continue;
      }

      existingSlugs.add(article.slug);

      incrementCount(languageCounts, article.language);
      incrementCount(typeCounts, article.type);

      allArticles.push(article);

      console.log(
        `Added: ${article.slug} | total=${allArticles.length}`
      );

      if (allArticles.length >= GENERATION_LIMITS.maxArticlesPerRun) {
        break;
      }
    }

    if (allArticles.length >= GENERATION_LIMITS.maxArticlesPerRun) {
      break;
    }
  }

  fs.writeFileSync(
    "generatedArticles.json",
    JSON.stringify(allArticles, null, 2)
  );

  console.log(`Created ${allArticles.length} new articles`);
}

run();