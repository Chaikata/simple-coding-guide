import { articles } from "@/data/articles";

export function addInternalLinks(text: string) {
  let updated = text;

  for (const article of articles) {
    const title = article.title;

    const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(`\\b(${escaped})\\b`, "i");

    if (regex.test(updated)) {
      const url = `/${article.language}/${article.type}/${article.slug}`;

      updated = updated.replace(
        regex,
        `<a href="${url}" class="text-blue-400 hover:underline">$1</a>`
      );

      break;
    }
  }

  return updated;
}