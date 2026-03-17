import fs from "fs";

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
  const existingSlugs = new Set(existingArticles.map((article) => article.slug));

  const newArticles = generatedArticles
    .map(normalizeArticle)
    .filter((article) => !existingSlugs.has(article.slug));

  const allArticles = [...existingArticles, ...newArticles];

  writeArticlesFile(allArticles);

  console.log(`Imported ${newArticles.length} new articles`);
  console.log(`Total articles: ${allArticles.length}`);
}

run();