import { MetadataRoute } from "next";
import { articles } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://devnestguide.com";

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/${article.language}/${article.type}/${article.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/javascript`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/typescript`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/python`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sql`,
      lastModified: new Date(),
    },
    ...articleUrls,
  ];
}