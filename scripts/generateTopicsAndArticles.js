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
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

function getExistingSlugs() {
  const articlesFile = fs.readFileSync("data/articles.ts", "utf-8");

  const match = articlesFile.match(
    /export const articles: Article\[\] = (\[[\s\S]*\]);/
  );

  if (!match) return new Set();

  const existingArticles = eval(match[1]);
  return new Set(existingArticles.map((a) => a.slug));
}

async function generateTopics(language, type) {
  const prompt = `
Generate 10 beginner-friendly article topics for a coding website.

Language: ${language}
Type: ${type}

Rules:
- Tutorials should explain programming concepts.
- Errors should explain common error messages and how to fix them.
- Topics should be beginner-friendly and highly searchable.

Return JSON only:

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
  return JSON.parse(cleaned).topics;
}

async function generateArticle(topic, language, type) {
  const prompt = `
Write a beginner-friendly coding article.

Topic: ${topic}
Language: ${language}
Type: ${type}

Rules:
- Use simple language.
- Include an explanation section.
- Include an example section with code if applicable.
- Include a short summary.

Return ONLY JSON:

{
 "slug": "topic-url-slug",
 "title": "Article Title",
 "language": "${language}",
 "type": "${type}",
 "description": "Short description",
 "content": [
   "intro paragraph",
   "explanation paragraph",
   "Example:",
   "code block example",
   "summary paragraph"
 ]
}
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const cleaned = cleanJson(response.output_text);
  return JSON.parse(cleaned);
}

async function run() {
  const existingSlugs = getExistingSlugs();
  const allArticles = [];

  for (const plan of contentPlans) {
    console.log(`Generating topics for ${plan.language}/${plan.type}`);

    const topics = await generateTopics(plan.language, plan.type);

    for (const topic of topics) {
      console.log(`Generating article: ${topic}`);

      const article = await generateArticle(
        topic,
        plan.language,
        plan.type
      );

      if (existingSlugs.has(article.slug)) {
        console.log("Skipping duplicate:", article.slug);
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