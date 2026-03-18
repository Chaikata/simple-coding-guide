const fs = require("fs");

const ARTICLES_PATH = "data/articles.ts";
const SIMILARITY_THRESHOLD = 0.6;

function loadArticles() {
  const file = fs.readFileSync(ARTICLES_PATH, "utf-8");

  const match =
    file.match(/export const articles\s*=\s*(\[[\s\S]*\]);/) ||
    file.match(/articles\s*=\s*(\[[\s\S]*\]);/);

  if (!match) {
    throw new Error("Could not match articles array in data/articles.ts");
  }

  return Function(`"use strict"; return (${match[1]});`)();
}

function normalize(str) {
  return String(str || "")
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function keywordSet(title) {
  const stopWords = new Set([
    "how", "to", "for", "the", "a", "an", "and", "of", "in", "with",
    "guide", "beginners", "beginner", "explained", "introduction",
    "understanding", "common", "basics", "getting", "started",
    "learn", "simple", "easy", "step", "by", "solutions"
  ]);

  return new Set(
    normalize(title)
      .split(" ")
      .filter(Boolean)
      .filter((word) => !stopWords.has(word))
  );
}

function jaccardSimilarity(setA, setB) {
  const intersection = [...setA].filter((x) => setB.has(x)).length;
  const union = new Set([...setA, ...setB]).size;
  return union === 0 ? 0 : intersection / union;
}

function findLikelyDuplicates() {
  const articles = loadArticles();
  const matches = [];

  for (let i = 0; i < articles.length; i++) {
    for (let j = i + 1; j < articles.length; j++) {
      const a = articles[i];
      const b = articles[j];

      if (a.language !== b.language) continue;
      if (a.type !== b.type) continue;

      const setA = keywordSet(a.title);
      const setB = keywordSet(b.title);
      const score = jaccardSimilarity(setA, setB);

      if (score >= SIMILARITY_THRESHOLD) {
        matches.push({
          score: score.toFixed(2),
          aTitle: a.title,
          aSlug: a.slug,
          bTitle: b.title,
          bSlug: b.slug,
          language: a.language,
          type: a.type,
        });
      }
    }
  }

  matches.sort((x, y) => Number(y.score) - Number(x.score));

  if (!matches.length) {
    console.log("No likely same-topic duplicates found.");
    return;
  }

  console.log(`Found ${matches.length} likely same-topic duplicate pairs:\n`);

  for (const match of matches) {
    console.log(`[${match.language} / ${match.type}] score=${match.score}`);
    console.log(`- A: ${match.aTitle} (${match.aSlug})`);
    console.log(`- B: ${match.bTitle} (${match.bSlug})`);
    console.log("");
  }
}

findLikelyDuplicates();