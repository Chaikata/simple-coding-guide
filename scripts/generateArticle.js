import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import fs from "fs";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function cleanJson(text) {
  return text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();
}

async function generateArticle(topic) {
  const prompt = `
Write a beginner programming tutorial.

Topic: ${topic}

Return ONLY valid JSON.
Do not use markdown.
Do not wrap the answer in \`\`\`.
Do not include any text before or after the JSON.

Use this exact format:
{
  "slug": "topic-url-slug",
  "title": "Article Title",
  "category": "JavaScript",
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

  const rawText = response.output_text;
  const cleanedText = cleanJson(rawText);

  return JSON.parse(cleanedText);
}

async function run() {
  const article = await generateArticle("What is a JavaScript callback?");

  fs.writeFileSync(
    "generatedArticle.json",
    JSON.stringify(article, null, 2)
  );

  console.log("Article created");
}

run();