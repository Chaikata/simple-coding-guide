import fs from "fs";

const generatedPath = "generatedArticles.json";
const articlesPath = "data/articles.ts";

function getExistingArticles() {
  const articlesFile = fs.readFileSync(articlesPath, "utf-8");

  const match = articlesFile.match(
    /export const articles: Article\[\] = (\[[\s\S]*\]);/
  );

  if (!match) {
    throw new Error("Could not find articles array in data/articles.ts");
  }

  return eval(match[1]);
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
    content: normalizeContent(article.content),
  };
}

function run() {
  const generatedRaw = fs.readFileSync(generatedPath, "utf-8");
  const generatedArticles = JSON.parse(generatedRaw).map(normalizeArticle);

  const existingArticles = getExistingArticles();
  const existingSlugs = new Set(existingArticles.map((article) => article.slug));

  const newArticles = generatedArticles.filter(
    (article) => !existingSlugs.has(article.slug)
  );

  if (newArticles.length === 0) {
    console.log("No new articles to import.");
    return;
  }

  const updatedArticles = [...existingArticles, ...newArticles];

  const newFileContent = `export type ContentBlock = {
  type: "paragraph" | "code";
  value: string;
};

export type Article = {
  slug: string;
  title: string;
  language: string;
  type: string;
  description: string;
  content: ContentBlock[];
};

export const articles: Article[] = ${JSON.stringify(updatedArticles, null, 2)};
`;

  fs.writeFileSync(articlesPath, newFileContent, "utf-8");

  console.log("Imported " + newArticles.length + " new articles into data/articles.ts");
}

run();