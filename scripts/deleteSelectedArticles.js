const fs = require("fs");

const ARTICLES_PATH = "data/articles.ts";
const BACKUP_PATH = `data/articles.backup.${Date.now()}.ts`;

const SLUGS_TO_DELETE = [
  "javascript-basics-for-absolute-beginners",
  "getting-started-with-typescript-basics",
  "understanding-variables-and-data-types-in-python",
  "sql-basics-for-absolute-beginners",
  "python-for-absolute-beginners-getting-started-guide",
  "getting-started-with-typescript-variables-and-data-types",
  "understanding-sql-data-types",
  "typescript-property-does-not-exist-on-type-fix",
  "how-to-fix-javascript-typeerror-cannot-read-property-undefined",
  "how-to-fix-syntaxerror-in-python-code",
  "resolving-nameerror-in-python-common-causes-and-solutions",
  "how-to-create-your-first-javascript-program",
  "understanding-javascript-loops-with-simple-examples",
  "how-to-fix-unexpected-token-error-in-javascript",
  "explained-common-sql-deadlock-errors-and-solutions",
  "explained-sql-deadlock-errors-with-examples-and-solutions",
  "how-to-fix-python-index-out-of-range-error-with-examples",
  "how-to-use-async-await-in-python-effectively",
  "troubleshooting-common-sql-connection-issues",
  "common-causes-of-sql-connection-errors-and-solutions",
  "understanding-sql-data-types-and-their-uses",
  "python-list-comprehension-explained-with-examples",
  "typescript-generics-explained-with-examples"
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