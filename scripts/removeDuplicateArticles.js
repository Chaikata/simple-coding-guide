import fs from "fs";

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

function getArticles() {
  const articlesFile = fs.readFileSync("data/articles.ts", "utf-8");

  const match = articlesFile.match(
    /export const articles: Article\[\] = (\[[\s\S]*\]);/
  );

  if (!match) {
    throw new Error("Could not find articles array in data/articles.ts");
  }

  return eval(match[1]);
}

function scoreArticle(article) {
  let score = 0;

  if (article.videoUrl) score += 5;
  if (article.description) score += 2;
  if (Array.isArray(article.content)) score += article.content.length;

  const codeBlocks = Array.isArray(article.content)
    ? article.content.filter(
        (block) =>
          typeof block === "object" &&
          block &&
          block.type === "code" &&
          typeof block.value === "string"
      ).length
    : 0;

  score += codeBlocks * 2;

  return score;
}

function chooseBetterArticle(existing, candidate) {
  const existingScore = scoreArticle(existing);
  const candidateScore = scoreArticle(candidate);

  if (candidateScore > existingScore) {
    return candidate;
  }

  return existing;
}

function writeArticlesFile(allArticles) {
  const fileContents = `export type ContentBlock =
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

export const articles: Article[] = ${JSON.stringify(allArticles, null, 2)};
`;

  fs.writeFileSync("data/articles.ts", fileContents);
}

function run() {
  const articles = getArticles();

  const slugMap = new Map();
  const titleMap = new Map();

  for (const article of articles) {
    const normalizedSlug = normalizeSlug(article.slug);
    const normalizedTitle = normalizeText(article.title);

    if (!slugMap.has(normalizedSlug)) {
      slugMap.set(normalizedSlug, article);
    } else {
      const kept = chooseBetterArticle(slugMap.get(normalizedSlug), article);
      slugMap.set(normalizedSlug, kept);
    }

    if (!titleMap.has(normalizedTitle)) {
      titleMap.set(normalizedTitle, article);
    } else {
      const kept = chooseBetterArticle(titleMap.get(normalizedTitle), article);
      titleMap.set(normalizedTitle, kept);
    }
  }

  const finalArticles = [];
  const seenSlugSet = new Set();
  const seenTitleSet = new Set();

  for (const article of articles) {
    const normalizedSlug = normalizeSlug(article.slug);
    const normalizedTitle = normalizeText(article.title);

    const bestBySlug = slugMap.get(normalizedSlug);
    const bestByTitle = titleMap.get(normalizedTitle);

    if (bestBySlug !== article) continue;
    if (bestByTitle !== article) continue;
    if (seenSlugSet.has(normalizedSlug)) continue;
    if (seenTitleSet.has(normalizedTitle)) continue;

    seenSlugSet.add(normalizedSlug);
    seenTitleSet.add(normalizedTitle);
    finalArticles.push(article);
  }

  const removedCount = articles.length - finalArticles.length;

  writeArticlesFile(finalArticles);

  console.log(`Original articles: ${articles.length}`);
  console.log(`Removed duplicates: ${removedCount}`);
  console.log(`Remaining articles: ${finalArticles.length}`);
}

run();