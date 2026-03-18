const fs = require("fs");

const ARTICLES_PATH = "data/articles.ts";
const BACKUP_PATH = `data/articles.backup.${Date.now()}.ts`;

const DRY_RUN = true; // change to false only after checking output
const MAX_DELETION_PERCENT = 0.15; // safety stop at 15%

function loadArticles() {
  const file = fs.readFileSync(ARTICLES_PATH, "utf-8");

  const match =
    file.match(/export const articles\s*=\s*(\[[\s\S]*\]);/) ||
    file.match(/articles\s*=\s*(\[[\s\S]*\]);/);

  if (!match) {
    throw new Error("Could not match articles array in data/articles.ts");
  }

  try {
    return Function(`"use strict"; return (${match[1]});`)();
  } catch (err) {
    throw new Error(`Failed to parse articles array: ${err.message}`);
  }
}

function saveArticles(articles) {
  const original = fs.readFileSync(ARTICLES_PATH, "utf-8");
  fs.writeFileSync(BACKUP_PATH, original, "utf-8");

  const content = `export const articles = ${JSON.stringify(articles, null, 2)};\n`;
  fs.writeFileSync(ARTICLES_PATH, content, "utf-8");
}

function normalize(str) {
  return String(str || "")
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanupExactDuplicates() {
  const articles = loadArticles();

  if (!Array.isArray(articles) || articles.length === 0) {
    throw new Error("Articles array is empty or invalid. Aborting.");
  }

  const seen = new Map();
  const cleaned = [];
  const removed = [];

  for (const article of articles) {
    const key = [
      article.language || "",
      article.type || "",
      normalize(article.title),
    ].join("::");

    if (seen.has(key)) {
      removed.push({
        removedTitle: article.title,
        removedSlug: article.slug,
        keptTitle: seen.get(key).title,
        keptSlug: seen.get(key).slug,
      });
      continue;
    }

    seen.set(key, article);
    cleaned.push(article);
  }

  const removedCount = articles.length - cleaned.length;
  const removedPercent = removedCount / articles.length;

  console.log(`Original count: ${articles.length}`);
  console.log(`Cleaned count: ${cleaned.length}`);
  console.log(`Removed count: ${removedCount}`);

  if (removed.length) {
    console.log("\nDuplicates found:");
    for (const item of removed) {
      console.log(`- REMOVED: "${item.removedTitle}" (${item.removedSlug})`);
      console.log(`  KEPT:    "${item.keptTitle}" (${item.keptSlug})`);
    }
  } else {
    console.log("\nNo exact duplicates found.");
  }

  if (removedPercent > MAX_DELETION_PERCENT) {
    throw new Error(
      `Safety stop: attempted to remove ${(removedPercent * 100).toFixed(1)}% of articles. Aborting.`
    );
  }

  if (DRY_RUN) {
    console.log("\nDRY RUN is enabled. No files were changed.");
    return;
  }

  saveArticles(cleaned);
  console.log(`\nSaved cleaned articles.`);
  console.log(`Backup created: ${BACKUP_PATH}`);
}

cleanupExactDuplicates();