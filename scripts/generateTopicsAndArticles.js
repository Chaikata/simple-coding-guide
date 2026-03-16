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

async function generateTopics(language, type) {
  const prompt = `
Generate 10 beginner-friendly article topic ideas for a coding website.

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

  return data.topics;
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

  for (const plan of contentPlans) {
    console.log(`Generating topics for ${plan.language} / ${plan.type}...`);
    const topics = await generateTopics(plan.language, plan.type);

    for (const topic of topics) {
      console.log(`Generating article: ${topic}`);
      const article = await generateArticle(topic, plan.language, plan.type);

      if (existingSlugs.has(article.slug)) {
        console.log(`Skipping duplicate: ${article.slug}`);
        continue;
      }

      existingSlugs.add(article.slug);
      allArticles.push(article);
    }
  }

  fs.writeFileSync(
    "generatedArticles.json",
    JSON.stringify(allArticles, null, 2)
  );

  console.log(`Created ${allArticles.length} new articles`);
}

run();