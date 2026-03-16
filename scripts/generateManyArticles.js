import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const topics = [
  { topic: "What is a JavaScript callback?", language: "javascript", type: "tutorials" },
  { topic: "What is a JavaScript promise?", language: "javascript", type: "tutorials" },
  { topic: "What is async/await in JavaScript?", language: "javascript", type: "tutorials" },
  { topic: "How to Fix Cannot Read Properties of Undefined", language: "javascript", type: "errors" },
  { topic: "How to Fix Undefined Is Not a Function", language: "javascript", type: "errors" },

  { topic: "INNER JOIN vs LEFT JOIN", language: "sql", type: "tutorials" },
  { topic: "What is a primary key in SQL?", language: "sql", type: "tutorials" },
  { topic: "What does GROUP BY do in SQL?", language: "sql", type: "tutorials" },
  { topic: "How to Fix Unknown Column in Field List", language: "sql", type: "errors" },
  { topic: "How to Fix SQL Syntax Error Near", language: "sql", type: "errors" },
];

function cleanJson(text) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

async function generateArticle(item) {
  const prompt = `
Write a beginner-friendly coding article.

Topic: ${item.topic}
Language: ${item.language}
Type: ${item.type}

Return ONLY valid JSON.
Do not use markdown.
Do not wrap the response in backticks.
Do not include any text before or after the JSON.

Use this exact format:
{
  "slug": "topic-url-slug",
  "title": "Article Title",
  "language": "${item.language}",
  "type": "${item.type}",
  "description": "Short description",
  "content": [
    "paragraph 1",
    "paragraph 2",
    "paragraph 3",
    "paragraph 4"
  ]
}
`;

  const response = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  return JSON.parse(cleanJson(response.output_text));
}

async function run() {
  const articles = [];

  for (const item of topics) {
    console.log(`Generating: ${item.topic}`);
    const article = await generateArticle(item);
    articles.push(article);
  }

  fs.writeFileSync(
    "generatedArticles.json",
    JSON.stringify(articles, null, 2)
  );

  console.log("All articles created");
}

run();