import fs from "fs";

const generatedPath = "generatedArticle.json";
const articlesPath = "data/articles.ts";

function run() {
  const generatedRaw = fs.readFileSync(generatedPath, "utf-8");
  const generatedArticle = JSON.parse(generatedRaw);

  const articlesFile = fs.readFileSync(articlesPath, "utf-8");

  const match = articlesFile.match(/export const articles: Article\[\] = (\[[\s\S]*\]);/);

  if (!match) {
    throw new Error("Could not find articles array in data/articles.ts");
  }

  const articlesArrayText = match[1];
  const existingArticles = eval(articlesArrayText);

  const alreadyExists = existingArticles.some(
    (article) => article.slug === generatedArticle.slug
  );

  if (alreadyExists) {
    console.log("Article already exists. No changes made.");
    return;
  }

  existingArticles.push(generatedArticle);

  const newFileContent = `export type Article = {
  slug: string;
  title: string;
  category: string;
  description: string;
  content: string[];
};

export const articles: Article[] = ${JSON.stringify(existingArticles, null, 2)};
`;

  fs.writeFileSync(articlesPath, newFileContent);
  console.log("Article imported into data/articles.ts");
}

run();