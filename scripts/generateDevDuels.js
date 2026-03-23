import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, "..");

dotenv.config({ path: path.join(ROOT_DIR, ".env.local") });

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const LANGUAGES = ["javascript", "python", "sql", "cpp"];

const LIMITS = {
  maxPerRun: 6,
  maxRetries: 2,
};

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

  throw new Error("Invalid JSON returned by model");
}

function slugify(text) {
  return String(text || "")
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

function readExistingDevDuels() {
  const filePath = path.join(ROOT_DIR, "data", "devDuels.ts");

  if (!fs.existsSync(filePath)) return [];

  const file = fs.readFileSync(filePath, "utf-8");
  const match = file.match(/export const devDuels(?::[^{=\n]+)?\s*=\s*(\[[\s\S]*\]);/);

  if (!match) return [];

  try {
    return Function('"use strict"; return (' + match[1] + ");")();
  } catch {
    return [];
  }
}

function getExistingSlugsAndTitles() {
  const existing = readExistingDevDuels();

  return {
    slugs: new Set(existing.map((d) => slugify(d.slug || ""))),
    titles: new Set(existing.map((d) => normalizeText(d.title || ""))),
  };
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

  for (let i = 0; i <= LIMITS.maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.log(`${label} retry ${i + 1}: ${error.message}`);
    }
  }

  throw lastError;
}

async function generateChallenge(language) {
  const prompt = `
Create ONE coding challenge for Dev Duel.

Language: ${language}

Requirements:
- Must be a real coding challenge, not theory
- Difficulty must be exactly one of: beginner, intermediate, advanced
- Include a clear SEO-friendly title
- Include a short description
- Include a practical challenge prompt
- Include 2-4 guidance points
- Include 2-3 hints
- Include starter code when useful
- Include expected output when useful
- Include 2-5 concepts
- Include an estimated time like "10 minutes"
- Keep it beginner-friendly overall, even if intermediate or advanced
- Do not return markdown
- Return only valid JSON

Return ONLY JSON:
{
  "title": "string",
  "description": "string",
  "difficulty": "beginner",
  "category": "functions",
  "estimatedTime": "10 minutes",
  "prompt": "string",
  "guidance": ["string", "string"],
  "hints": ["string", "string"],
  "starterCode": "string",
  "expectedOutput": "string",
  "concepts": ["string", "string"]
}
`;

  const res = await client.responses.create({
    model: "gpt-4.1-mini",
    input: prompt,
  });

  const data = extractJson(extractResponseText(res));

  return {
    slug: slugify(data.title),
    title: String(data.title || "").trim(),
    language,
    difficulty: String(data.difficulty || "").trim().toLowerCase(),
    category: String(data.category || "general").trim(),
    description: String(data.description || "").trim(),
    prompt: String(data.prompt || "").trim(),
    guidance: Array.isArray(data.guidance)
      ? data.guidance.map((x) => String(x).trim()).filter(Boolean)
      : [],
    hints: Array.isArray(data.hints)
      ? data.hints.map((x) => String(x).trim()).filter(Boolean)
      : [],
    starterCode: data.starterCode ? String(data.starterCode) : undefined,
    expectedOutput: data.expectedOutput
      ? String(data.expectedOutput).trim()
      : undefined,
    concepts: Array.isArray(data.concepts)
      ? data.concepts.map((x) => String(x).trim()).filter(Boolean)
      : [],
    estimatedTime: String(data.estimatedTime || "10 minutes").trim(),
    isFeatured: Math.random() > 0.6,
  };
}

async function run() {
  console.log(
    "OPENAI_API_KEY:",
    process.env.OPENAI_API_KEY ? "Loaded" : "Missing"
  );

  if (!process.env.OPENAI_API_KEY) {
    throw new Error(
      `OPENAI_API_KEY not found. Expected .env.local at: ${path.join(
        ROOT_DIR,
        ".env.local"
      )}`
    );
  }

  const allDuels = [];
  const { slugs: existingSlugs, titles: existingTitles } =
    getExistingSlugsAndTitles();
  const runTitles = new Set();

  while (allDuels.length < LIMITS.maxPerRun) {
    const language =
      LANGUAGES[Math.floor(Math.random() * LANGUAGES.length)];

    let duel;
    try {
      duel = await retry(`duel ${language}`, () => generateChallenge(language));
    } catch (error) {
      console.log(`Failed ${language}: ${error.message}`);
      continue;
    }

    if (!duel.slug || !duel.title) {
      console.log("Skipping invalid duel with missing slug/title");
      continue;
    }

    const normalizedSlug = slugify(duel.slug);
    const normalizedTitle = normalizeText(duel.title);

    if (existingSlugs.has(normalizedSlug)) {
      console.log(`Skipping duplicate slug: ${duel.slug}`);
      continue;
    }

    if (existingTitles.has(normalizedTitle)) {
      console.log(`Skipping duplicate existing title: ${duel.title}`);
      continue;
    }

    if (runTitles.has(normalizedTitle)) {
      console.log(`Skipping duplicate run title: ${duel.title}`);
      continue;
    }

    if (
      isTooSimilar(duel.title, [
        ...Array.from(existingTitles),
        ...Array.from(runTitles),
      ])
    ) {
      console.log(`Skipping too-similar title: ${duel.title}`);
      continue;
    }

    if (!["beginner", "intermediate", "advanced"].includes(duel.difficulty)) {
      console.log(`Skipping invalid difficulty: ${duel.title}`);
      continue;
    }

    if (!duel.prompt || !duel.guidance.length || !duel.hints.length) {
      console.log(`Skipping incomplete duel: ${duel.title}`);
      continue;
    }

    existingSlugs.add(normalizedSlug);
    runTitles.add(normalizedTitle);
    allDuels.push(duel);

    console.log(`Added: ${duel.title}`);
  }

  fs.writeFileSync(
    path.join(ROOT_DIR, "generatedDevDuels.json"),
    JSON.stringify(allDuels, null, 2)
  );

  console.log(`Generated ${allDuels.length} Dev Duels`);
}

run().catch((error) => {
  console.error(error.message);
  process.exit(1);
});