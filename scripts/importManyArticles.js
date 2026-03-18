import fs from "fs";
import path from "path";

const ARTICLES_FILE = "data/articles.ts";
const GENERATED_FILE = "generatedArticles.json";
const BACKUP_DIR = "data/backups";

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeSlug(text) {
  return normalizeText(text).replace(/\s+/g, "-");
}

function normalizeContent(content) {
  if (!Array.isArray(content)) return [];

  return content.map((block) => {
    if (typeof block === "string") {
      return {
        type: "paragraph",
        value: block,
      };
    }

    if (
      block &&
      typeof block === "object" &&
      (block.type === "paragraph" || block.type === "code") &&
      typeof block.value === "string"
    ) {
      return {
        type: block.type,
        value: block.value,
      };
    }

    return {
      type: "paragraph",
      value: String(block),
    };
  });
}

function normalizeArticle(article) {
  return {
    slug: String(article.slug || "").trim(),
    title: String(article.title || "").trim(),
    language: String(article.language || "").trim(),
    type: String(article.type || "").trim(),
    description: String(article.description || "").trim(),
    ...(article.videoUrl ? { videoUrl: String(article.videoUrl).trim() } : {}),
    content: normalizeContent(article.content),
  };
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function getTimestamp() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const min = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  return `${yyyy}${mm}${dd}-${hh}${min}${ss}`;
}

function createBackupIfFileExists(filePath) {
  if (!fs.existsSync(filePath)) return null;

  ensureDir(BACKUP_DIR);

  const backupPath = path.join(
    BACKUP_DIR,
    `articles-${getTimestamp()}.ts.bak`
  );

  fs.copyFileSync(filePath, backupPath);
  return backupPath;
}

function extractArticlesArraySource(fileText) {
  const match = fileText.match(
    /export\s+const\s+articles\s*(?::\s*Article\[\])?\s*=\s*(\[[\s\S]*?\])\s*;?/
  );

  if (!match) {
    throw new Error(
      "Could not find `export const articles = [...]` in data/articles.ts"
    );
  }

  return match[1];
}

function evaluateArticlesArray(arraySource) {
  try {
    return Function('"use strict"; return (' + arraySource + ')')();
  } catch (error) {
    throw new Error(`Failed to parse existing articles array: ${error.message}`);
  }
}

function getExistingArticles() {
  if (!fs.existsSync(ARTICLES_FILE)) {
    return {
      articles: [],
      fileExists: false,
    };
  }

  const articlesFile = fs.readFileSync(ARTICLES_FILE, "utf-8");
  const trimmed = articlesFile.trim();

  if (!trimmed) {
    throw new Error("data/articles.ts exists but is empty");
  }

  const arraySource = extractArticlesArraySource(articlesFile);
  const parsed = evaluateArticlesArray(arraySource);

  if (!Array.isArray(parsed)) {
    throw new Error("Existing articles export is not an array");
  }

  return {
    articles: parsed.map(normalizeArticle),
    fileExists: true,
  };
}

function readGeneratedArticles() {
  if (!fs.existsSync(GENERATED_FILE)) {
    throw new Error("generatedArticles.json was not found");
  }

  const raw = fs.readFileSync(GENERATED_FILE, "utf-8");
  const parsed = JSON.parse(raw);

  if (!Array.isArray(parsed)) {
    throw new Error("generatedArticles.json must contain an array");
  }

  return parsed.map(normalizeArticle).filter((article) => {
    if (!article.slug || !article.title) {
      console.log("Skipping invalid generated article with missing slug/title");
      return false;
    }

    return true;
  });
}

function buildArticlesFileContents(allArticles) {
  return `export type ContentBlock =
  | string
  | {
      type: "paragraph" | "code";
      value: string;
    };

export type Article = {
  slug: string;
  title: string;
  language: string;
  type: string;
  description: string;
  videoUrl?: string;
  content: ContentBlock[];
};

export const articles = ${JSON.stringify(allArticles, null, 2)};
`;
}

function writeArticlesFileSafely(allArticles) {
  ensureDir(path.dirname(ARTICLES_FILE));

  const tempPath = `${ARTICLES_FILE}.tmp`;
  const fileContents = buildArticlesFileContents(allArticles);

  fs.writeFileSync(tempPath, fileContents, "utf-8");
  fs.renameSync(tempPath, ARTICLES_FILE);
}

function run() {
  const generatedArticles = readGeneratedArticles();
  const { articles: existingArticles, fileExists } = getExistingArticles();

  if (fileExists && existingArticles.length === 0) {
    throw new Error(
      "Refusing to overwrite data/articles.ts because existing articles loaded as empty. Restore your file first if this is unexpected."
    );
  }

  const existingSlugSet = new Set(
    existingArticles.map((article) => normalizeSlug(article.slug))
  );
  const existingTitleSet = new Set(
    existingArticles.map((article) => normalizeText(article.title))
  );

  const dedupedGenerated = [];
  const seenGeneratedSlugSet = new Set();
  const seenGeneratedTitleSet = new Set();

  for (const rawArticle of generatedArticles) {
    const article = normalizeArticle(rawArticle);
    const normalizedSlug = normalizeSlug(article.slug);
    const normalizedTitle = normalizeText(article.title);

    if (!normalizedSlug || !normalizedTitle) {
      console.log("Skipping invalid generated article with empty slug/title");
      continue;
    }

    if (existingSlugSet.has(normalizedSlug)) {
      console.log(`Skipping existing slug duplicate: ${article.slug}`);
      continue;
    }

    if (existingTitleSet.has(normalizedTitle)) {
      console.log(`Skipping existing title duplicate: ${article.title}`);
      continue;
    }

    if (seenGeneratedSlugSet.has(normalizedSlug)) {
      console.log(`Skipping generated slug duplicate: ${article.slug}`);
      continue;
    }

    if (seenGeneratedTitleSet.has(normalizedTitle)) {
      console.log(`Skipping generated title duplicate: ${article.title}`);
      continue;
    }

    seenGeneratedSlugSet.add(normalizedSlug);
    seenGeneratedTitleSet.add(normalizedTitle);
    dedupedGenerated.push(article);
  }

  const allArticles = [...existingArticles, ...dedupedGenerated];

  const backupPath = createBackupIfFileExists(ARTICLES_FILE);
  writeArticlesFileSafely(allArticles);

  console.log(`Imported ${dedupedGenerated.length} new articles`);
  console.log(`Total articles: ${allArticles.length}`);

  if (backupPath) {
    console.log(`Backup created: ${backupPath}`);
  }
}

run();