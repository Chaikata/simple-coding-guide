import { articles } from "@/data/articles";

export default function sitemap() {
  const baseUrl = "https://yourdomain.com";

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/${article.language}/${article.type}/${article.slug}`,
    lastModified: new Date(),
  }));

  const languagePages = Array.from(
    new Set(articles.map((article) => article.language))
  ).map((language) => ({
    url: `${baseUrl}/${language}`,
    lastModified: new Date(),
  }));

  const sectionPages = Array.from(
    new Set(articles.map((article) => `${article.language}/${article.type}`))
  ).map((path) => ({
    url: `${baseUrl}/${path}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...languagePages,
    ...sectionPages,
    ...articlePages,
  ];
}