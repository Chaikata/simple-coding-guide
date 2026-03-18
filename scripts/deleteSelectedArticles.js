const fs = require("fs");

const ARTICLES_PATH = "data/articles.ts";
const BACKUP_PATH = `data/articles.backup.${Date.now()}.ts`;

const SLUGS_TO_DELETE = [
  // paste slugs here one by one
  // example:
  // "sql-basics-for-absolute-beginners",
  // "python-for-absolute-beginners-getting-started-guide",
];

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

function saveArticles(articles) {
  const original = fs.readFileSync(ARTICLES_PATH, "utf-8");
  fs.writeFileSync(BACKUP_PATH, original, "utf-8");

  const content = `export const articles = ${JSON.stringify(articles, null, 2)};\n`;
  fs.writeFileSync(ARTICLES_PATH, content, "utf-8");
}

function main() {
  const articles = loadArticles();

  if (!SLUGS_TO_DELETE.length) {
    console.log("No slugs listed. Nothing deleted.");
    return;
  }

  const slugSet = new Set(SLUGS_TO_DELETE);
  const toDelete = articles.filter((a) => slugSet.has(a.slug));
  const cleaned = articles.filter((a) => !slugSet.has(a.slug));

  console.log(`Original count: ${articles.length}`);
  console.log(`Deleting: ${toDelete.length}`);
  console.log(`New count: ${cleaned.length}\n`);

  if (toDelete.length === 0) {
    console.log("No matching slugs found.");
    return;
  }

  console.log("Articles being deleted:");
  for (const article of toDelete) {
    console.log(`- ${article.title} (${article.slug})`);
  }

  saveArticles(cleaned);

  console.log(`\nDone.`);
  console.log(`Backup created: ${BACKUP_PATH}`);
}

main();