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
    slug: article.slug,
    title: article.title,
    language: article.language,
    type: article.type,
    description: article.description,
    ...(article.videoUrl ? { videoUrl: article.videoUrl } : {}),
    content: normalizeContent(article.content),
  };
}

function getExistingArticles() {
  const articlesFile = fs.readFileSync("data/articles.ts", "utf-8");

  const match = articlesFile.match(
    /export const articles: Article\[\] = (\[[\s\S]*\]);/
  );

  if (!match) return [];

  return eval(match[1]);
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
  const generatedArticles = JSON.parse(
    fs.readFileSync("generatedArticles.json", "utf-8")
  );

  const existingArticles = getExistingArticles();

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

  writeArticlesFile(allArticles);

  console.log(`Imported ${dedupedGenerated.length} new articles`);
  console.log(`Total articles: ${allArticles.length}`);
}

run();