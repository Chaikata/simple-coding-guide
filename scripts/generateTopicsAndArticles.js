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

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSlug(text) {
  return normalizeText(text).replace(/\s+/g, "-");
}

function getExistingArticles() {
  const articlesFile = fs.readFileSync("data/articles.ts", "utf-8");

  const match = articlesFile.match(
    /export const articles: Article\[\] = (\[[\s\S]*\]);/
  );

  if (!match) return [];

  return eval(match[1]);
}

function getExistingIndexes() {
  const existingArticles = getExistingArticles();

  return {
    slugSet: new Set(existingArticles.map((article) => normalizeSlug(article.slug))),
    titleSet: new Set(existingArticles.map((article) => normalizeText(article.title))),
    topicSet: new Set(existingArticles.map((article) => normalizeText(article.title))),
  };
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

async function findYoutubeVideo(topic, language, type) {
  if (!process.env.YOUTUBE_API_KEY) {
    console.log("No YOUTUBE_API_KEY found, skipping video lookup.");
    return "";
  }

  const query =
    type === "errors"
      ? `${topic} ${language} fix tutorial`
      : `${topic} ${language} tutorial`;

  const url =
    "https://www.googleapis.com/youtube/v3/search" +
    `?part=snippet` +
    `&type=video` +
    `&maxResults=1` +
    `&safeSearch=moderate` +
    `&q=${encodeURIComponent(query)}` +
    `&key=${process.env.YOUTUBE_API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    console.log(`YouTube search failed for "${topic}" with status ${response.status}`);
    return "";
  }

  const data = await response.json();
  const videoId = data?.items?.[0]?.id?.videoId;

  if (!videoId) {
    console.log(`No YouTube video found for "${topic}"`);
    return "";
  }

  return `https://www.youtube.com/watch?v=${videoId}`;
}

async function generateTopics(language, type) {
  const prompt = `
Generate ${GENERATION_LIMITS.maxTopicsPerPlan} highly searchable coding article topics.

Language: ${language}
Type: ${type}

Goal:
Create topics that match real Google searches from developers.

Rules:
- Return ONLY valid JSON
- Do not use markdown
- Do not include any text before or after the JSON
- Avoid generic beginner topics
- Prefer practical searches developers actually type into Google
- Prefer "how to fix", "explained", "with examples", "vs", and "common mistakes"
- If type is "tutorials", focus on practical learning topics with examples
- If type is "errors", focus on realistic error messages, debugging problems, and fixes
- Make titles specific and useful
- Avoid duplicate or near-duplicate topics
- Do NOT use unescaped double quotes inside any topic
- Prefer clean titles without quotation marks

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
    "topic 10",
    "topic 11",
    "topic 12"
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
Write a beginner-friendly coding article designed to rank for real search queries.

Topic: ${topic}
Language: ${language}
Type: ${type}

Goal:
Create a practical, helpful article for someone who searched this exact topic on Google.

Writing rules:
- Keep it clear, simple, and useful
- Explain things like a strong beginner tutorial site would
- Use natural language, not robotic filler
- Make paragraphs substantial
- Include practical code examples when relevant
- Keep the article focused tightly on the topic
- Make the title attractive for search users
- Write a strong description that could work as an SEO meta description

VERY IMPORTANT INTERNAL LINKING RULES:
- Naturally mention 2 to 4 closely related coding concepts in the paragraph text
- Mention related concepts as plain text only, not markdown links
- Use phrases that are likely to match other article topics on the site
- Do not force links unnaturally

Article structure:
1. Introduction
2. What it means or what it does
3. Example code
4. How to fix it or how to use it properly
5. Common mistakes
6. Summary

Content rules:
- Return ONLY valid JSON
- Do not use markdown
- Do not include any text before or after the JSON
- Use content blocks only
- Include at least 5 paragraph blocks
- Include at least 1 code block when relevant
- For tutorial articles, teach the concept step by step
- For error articles, explain the error, why it happens, and how to fix it

Use this exact format:
{
  "slug": "topic-url-slug",
  "title": "Article Title",
  "language": "${language}",
  "type": "${type}",
  "description": "Short SEO description",
  "videoUrl": "",
  "content": [
    {
      "type": "paragraph",
      "value": "Introduction paragraph"
    },
    {
      "type": "paragraph",
      "value": "What it means paragraph"
    },
    {
      "type": "code",
      "value": "example code here"
    },
    {
      "type": "paragraph",
      "value": "How to fix it or how to use it properly paragraph"
    },
    {
      "type": "paragraph",
      "value": "Common mistakes paragraph"
    },
    {
      "type": "paragraph",
      "value": "Summary paragraph"
    }
  ]
}
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const article = extractJson(response.output_text);
  const videoUrl = await findYoutubeVideo(topic, language, type);

  return {
    slug: article.slug,
    title: article.title,
    language: article.language,
    type: article.type,
    description: article.description,
    videoUrl,
    content: normalizeContent(article.content),
  };
}

async function run() {
  const allArticles = [];
  const { slugSet, titleSet, topicSet } = getExistingIndexes();
  const generatedTopicSet = new Set();

  console.log("Starting article generation with stronger duplicate protection...");

  for (const plan of contentPlans) {
    if (allArticles.length >= GENERATION_LIMITS.maxArticlesPerRun) {
      break;
    }

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

    let articleAddedForThisPlan = false;

    for (const topic of topics) {
      if (articleAddedForThisPlan) {
        break;
      }

      const normalizedTopic = normalizeText(topic);

      if (topicSet.has(normalizedTopic) || generatedTopicSet.has(normalizedTopic)) {
        console.log(`Duplicate topic skipped: ${topic}`);
        continue;
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

      if (article.language !== plan.language || article.type !== plan.type) {
        console.log(
          `Skipping mismatched article: expected ${plan.language}/${plan.type}, got ${article.language}/${article.type}`
        );
        continue;
      }

      const normalizedSlug = normalizeSlug(article.slug);
      const normalizedTitle = normalizeText(article.title);

      if (slugSet.has(normalizedSlug)) {
        console.log(`Duplicate slug skipped: ${article.slug}`);
        continue;
      }

      if (titleSet.has(normalizedTitle)) {
        console.log(`Duplicate title skipped: ${article.title}`);
        continue;
      }

      slugSet.add(normalizedSlug);
      titleSet.add(normalizedTitle);
      topicSet.add(normalizedTopic);
      generatedTopicSet.add(normalizedTopic);

      allArticles.push(article);
      articleAddedForThisPlan = true;

      console.log(
        `Added: ${article.slug} | ${article.language}/${article.type} | total=${allArticles.length}`
      );
    }

    if (!articleAddedForThisPlan) {
      console.log(`No valid article added for ${plan.language}/${plan.type}`);
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