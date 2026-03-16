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
  { language: "sql", type: "tutorials" },
  { language: "sql", type: "errors" },
];

const GENERATION_LIMITS = {
  maxTopicsPerPlan: 10,
  maxArticlesPerRun: 6,
  maxPerLanguage: 3,
  maxPerType: 3,
  maxRetries: 2,
  autoPublish: true,
};

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
    return {
      allowed: false,
      reason: `run limit reached (${GENERATION_LIMITS.maxArticlesPerRun})`,
    };
  }

  if (getCount(languageCounts, language) >= GENERATION_LIMITS.maxPerLanguage) {
    return {
      allowed: false,
      reason: `language limit reached for ${language}`,
    };
  }

  if (getCount(typeCounts, type) >= GENERATION_LIMITS.maxPerType) {
    return {
      allowed: false,
      reason: `type limit reached for ${type}`,
    };
  }

  return {
    allowed: true,
    reason: "",
  };
}

async function retry(label, fn) {
  let lastError;

  for (let attempt = 1; attempt <= GENERATION_LIMITS.maxRetries + 1; attempt++) {
    try {
      if (attempt > 1) {
        console.log(`${label} retry ${attempt - 1}/${GENERATION_LIMITS.maxRetries}...`);
      }
      return await fn();
    } catch (error) {
      lastError = error;
      console.error(`${label} failed on attempt ${attempt}:`, error);
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
- Avoid duplicate or very similar ideas.
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

  const cleaned = cleanJson(response.output_text);
  const data = JSON.parse(cleaned);

  if (!Array.isArray(data.topics)) {
    throw new Error("Invalid topics response");
  }

  return data.topics.slice(0, GENERATION_LIMITS.maxTopicsPerPlan);
}

async function generateArticle(topic, language, type) {
  const prompt = `
Write a beginner-friendly coding article.

Topic: ${topic}
Language: ${language}
Type: ${type}

Rules:
- If type is "tutorials", explain the concept clearly for beginners.
- If type is "errors", explain what the error means, why it happens, and how to fix it.
- Keep the writing simple and clear.
- Include at least one code block when it makes sense.
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

async function run() {
  const allArticles = [];
  const existingSlugs = getExistingSlugs();
  const languageCounts = createCounterMap();
  const typeCounts = createCounterMap();

  console.log("Generation limits:");
  console.log(`- max topics per plan: ${GENERATION_LIMITS.maxTopicsPerPlan}`);
  console.log(`- max articles per run: ${GENERATION_LIMITS.maxArticlesPerRun}`);
  console.log(`- max per language: ${GENERATION_LIMITS.maxPerLanguage}`);
  console.log(`- max per type: ${GENERATION_LIMITS.maxPerType}`);
  console.log(`- max retries: ${GENERATION_LIMITS.maxRetries}`);
  console.log(`- auto publish: ${GENERATION_LIMITS.autoPublish}`);

  for (const plan of contentPlans) {
    if (allArticles.length >= GENERATION_LIMITS.maxArticlesPerRun) {
      console.log("Reached max articles for this run. Stopping early.");
      break;
    }

    console.log(`Generating topics for ${plan.language} / ${plan.type}...`);

    let topics = [];

    try {
      topics = await retry(
        `Topic generation for ${plan.language}/${plan.type}`,
        () => generateTopics(plan.language, plan.type)
      );
    } catch (error) {
      console.error(`Skipping plan ${plan.language}/${plan.type} because topics failed:`, error);
      continue;
    }

    for (const topic of topics) {
      const limitCheck = canGenerateArticle(
        plan.language,
        plan.type,
        allArticles.length,
        languageCounts,
        typeCounts
      );

      if (!limitCheck.allowed) {
        console.log(
          `Skipping remaining generation for ${plan.language}/${plan.type}: ${limitCheck.reason}`
        );
        break;
      }

      console.log(`Generating article: ${topic}`);

      let article;

      try {
        article = await retry(
          `Article generation for "${topic}"`,
          () => generateArticle(topic, plan.language, plan.type)
        );
      } catch (error) {
        console.error(`Skipping article after retries: ${topic}`, error);
        continue;
      }

      if (!article || !article.slug || !article.title || !article.description) {
        console.log(`Skipping invalid article payload for topic: ${topic}`);
        continue;
      }

      if (existingSlugs.has(article.slug)) {
        console.log(`Skipping duplicate slug: ${article.slug}`);
        continue;
      }

      existingSlugs.add(article.slug);
      incrementCount(languageCounts, article.language);
      incrementCount(typeCounts, article.type);
      allArticles.push(article);

      console.log(
        `Added: ${article.slug} | total=${allArticles.length} | ${article.language}=${getCount(
          languageCounts,
          article.language
        )} | ${article.type}=${getCount(typeCounts, article.type)}`
      );

      if (allArticles.length >= GENERATION_LIMITS.maxArticlesPerRun) {
        console.log("Reached max articles for this run.");
        break;
      }
    }
  }

  fs.writeFileSync(
    "generatedArticles.json",
    JSON.stringify(allArticles, null, 2)
  );

  console.log("");
  console.log(`Created ${allArticles.length} new articles`);
  console.log("Language counts:");
  for (const [language, count] of languageCounts.entries()) {
    console.log(`- ${language}: ${count}`);
  }

  console.log("Type counts:");
  for (const [type, count] of typeCounts.entries()) {
    console.log(`- ${type}: ${count}`);
  }
}

run().catch((error) => {
  console.error("Generation run failed:", error);
  process.exit(1);
});