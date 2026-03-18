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

const LIMITS = {
  topicsPerPlan: 12,
  articlesPerPlan: 2, // 🔥 KEY CHANGE
  maxArticlesPerRun: 12,
};

function normalize(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSlug(text) {
  return normalize(text).replace(/\s+/g, "-");
}

function getExistingArticles() {
  const file = fs.readFileSync("data/articles.ts", "utf-8");
  const match = file.match(/export const articles: Article\[\] = (\[[\s\S]*\]);/);
  return match ? eval(match[1]) : [];
}

function getIndexes() {
  const existing = getExistingArticles();

  return {
    slugSet: new Set(existing.map(a => normalizeSlug(a.slug))),
    titleSet: new Set(existing.map(a => normalize(a.title))),
    topicSet: new Set(existing.map(a => normalize(a.title))),
  };
}

function isValidArticle(article) {
  if (!article?.content || article.content.length < 5) return false;

  const hasCode = article.content.some(b => b.type === "code");

  return hasCode;
}

async function generateTopics(language, type) {
  const prompt = `
Generate ${LIMITS.topicsPerPlan} HIGH-TRAFFIC coding topics.

Language: ${language}
Type: ${type}

Return ONLY JSON:
{
  "topics": ["topic1", "topic2"]
}
`;

  const res = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  return JSON.parse(res.output_text).topics;
}

async function generateArticle(topic, language, type) {
  const prompt = `
Write a beginner-friendly coding article.

Topic: ${topic}
Language: ${language}
Type: ${type}

Return JSON only:
{
  "slug": "",
  "title": "",
  "language": "${language}",
  "type": "${type}",
  "description": "",
  "videoUrl": "",
  "content": [
    { "type": "paragraph", "value": "" },
    { "type": "code", "value": "" }
  ]
}
`;

  const res = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  return JSON.parse(res.output_text);
}

async function run() {
  const results = [];
  const { slugSet, titleSet, topicSet } = getIndexes();

  console.log("🚀 Starting generation...");

  for (const plan of contentPlans) {
    let added = 0;

    const topics = await generateTopics(plan.language, plan.type);

    for (const topic of topics) {
      if (results.length >= LIMITS.maxArticlesPerRun) break;
      if (added >= LIMITS.articlesPerPlan) break;

      const normTopic = normalize(topic);

      if (topicSet.has(normTopic)) {
        console.log("⛔ duplicate topic:", topic);
        continue;
      }

      console.log("⚡ generating:", topic);

      let article;

      try {
        article = await generateArticle(topic, plan.language, plan.type);
      } catch {
        continue;
      }

      if (!isValidArticle(article)) {
        console.log("⛔ weak article skipped");
        continue;
      }

      const slug = normalizeSlug(article.slug);
      const title = normalize(article.title);

      if (slugSet.has(slug) || titleSet.has(title)) {
        console.log("⛔ duplicate article skipped");
        continue;
      }

      slugSet.add(slug);
      titleSet.add(title);
      topicSet.add(normTopic);

      results.push(article);
      added++;

      console.log("✅ added:", article.title);
    }
  }

  fs.writeFileSync("generatedArticles.json", JSON.stringify(results, null, 2));

  console.log(`🔥 DONE: ${results.length} articles`);
}

run();