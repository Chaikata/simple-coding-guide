import fs from "fs";

// =========================
// CONFIG
// =========================

const SIMILARITY_THRESHOLD = 0.92; // stricter
const MODE = "delete"; // "delete" or "merge"

// =========================
// LOAD / SAVE
// =========================

function loadArticles() {
  const file = fs.readFileSync("data/articles.ts", "utf-8");

  const match = file.match(
    /export const articles: Article\[\] = (\[[\s\S]*\]);/
  );

  if (!match) throw new Error("Could not load articles");

  return eval(match[1]);
}

function saveArticles(articles) {
  const content = `
export const articles = ${JSON.stringify(articles, null, 2)};
`;

  fs.writeFileSync("data/articles.ts", content);
}

// =========================
// HELPERS
// =========================

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9 ]/g, "");
}

function getIntentType(title) {
  const t = title.toLowerCase();

  if (t.includes("fix") || t.includes("error")) return "error";
  if (t.includes("vs")) return "comparison";
  if (t.includes("how to")) return "guide";
  if (t.includes("explained")) return "explanation";
  if (t.includes("examples")) return "examples";

  return "other";
}

function similarity(a, b) {
  const wordsA = normalize(a).split(" ");
  const wordsB = normalize(b).split(" ");

  const stopWords = new Set([
    "how",
    "to",
    "fix",
    "in",
    "with",
    "and",
    "for",
    "a",
    "the",
    "of",
    "error",
    "guide",
    "examples",
    "beginner",
    "beginners",
  ]);

  const filteredA = wordsA.filter((w) => !stopWords.has(w));
  const filteredB = wordsB.filter((w) => !stopWords.has(w));

  const keyA = new Set(filteredA);
  const keyB = new Set(filteredB);

  // LANGUAGE CHECK (prevents JS vs Python deletion)
  const languages = ["javascript", "python", "sql", "typescript"];
  for (const lang of languages) {
    if (keyA.has(lang) && !keyB.has(lang)) return 0;
    if (keyB.has(lang) && !keyA.has(lang)) return 0;
  }

  // ERROR TYPE CHECK
  const errors = [
    "typeerror",
    "syntaxerror",
    "referenceerror",
    "indentationerror",
    "attributeerror",
    "indexerror",
  ];

  for (const err of errors) {
    if (keyA.has(err) && !keyB.has(err)) return 0;
    if (keyB.has(err) && !keyA.has(err)) return 0;
  }

  const overlap = filteredA.filter((w) =>
    filteredB.includes(w)
  ).length;

  return overlap / Math.max(filteredA.length, 1);
}

// =========================
// MAIN CLEANUP
// =========================

function cleanup() {
  const articles = loadArticles();
  const removed = new Set();

  for (let i = 0; i < articles.length; i++) {
    if (removed.has(i)) continue;

    for (let j = i + 1; j < articles.length; j++) {
      if (removed.has(j)) continue;

      const a = articles[i];
      const b = articles[j];

      const score = similarity(a.title, b.title);

      // INTENT CHECK
      const intentA = getIntentType(a.title);
      const intentB = getIntentType(b.title);

      // WORD DIFFERENCE SAFETY
      const wordsA = new Set(normalize(a.title).split(" "));
      const wordsB = new Set(normalize(b.title).split(" "));

      const difference =
        [...wordsA].filter((w) => !wordsB.has(w)).length;

      if (difference >= 2) continue;

      if (score > SIMILARITY_THRESHOLD && intentA === intentB) {
        console.log(`Duplicate found:\n- ${a.title}\n- ${b.title}\n`);

        if (MODE === "delete") {
          const removeIndex =
            a.content.length >= b.content.length ? j : i;

          removed.add(removeIndex);
        }

        if (MODE === "merge") {
          a.content = [...a.content, ...b.content];
          removed.add(j);
        }
      }
    }
  }

  const cleaned = articles.filter((_, i) => !removed.has(i));

  saveArticles(cleaned);

  console.log(`Cleanup complete. Removed ${removed.size} articles.`);
}

cleanup();