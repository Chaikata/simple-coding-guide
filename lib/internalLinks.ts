import { articles } from "@/data/articles";

function escapeRegExp(text: string) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function normalizeText(text: string) {
  return text.toLowerCase().replace(/[^\w\s]/g, "").trim();
}

function getLinkPhrases(title: string) {
  const normalized = normalizeText(title);
  const words = normalized.split(/\s+/).filter(Boolean);

  const stopWords = new Set([
    "how",
    "what",
    "when",
    "where",
    "why",
    "with",
    "from",
    "into",
    "that",
    "this",
    "your",
    "guide",
    "explained",
    "fix",
    "error",
    "errors",
    "tutorial",
    "tutorials",
    "beginner",
    "beginners",
    "using",
    "use",
  ]);

  const filteredWords = words.filter(
    (word) => word.length > 2 && !stopWords.has(word)
  );

  const phrases: string[] = [];

  if (filteredWords.length >= 3) {
    for (let i = 0; i < filteredWords.length - 2; i++) {
      phrases.push(
        `${filteredWords[i]} ${filteredWords[i + 1]} ${filteredWords[i + 2]}`
      );
    }
  }

  if (filteredWords.length >= 2) {
    for (let i = 0; i < filteredWords.length - 1; i++) {
      phrases.push(`${filteredWords[i]} ${filteredWords[i + 1]}`);
    }
  }

  if (filteredWords.length === 1 && filteredWords[0].length >= 5) {
    phrases.push(filteredWords[0]);
  }

  return [...new Set(phrases)].sort((a, b) => b.length - a.length);
}

export function addInternalLinks(
  text: string,
  currentSlug?: string,
  currentLanguage?: string
) {
  let updated = text;
  let linksAdded = 0;
  const maxLinksPerParagraph = 1;

  const candidates = articles.filter(
    (article) =>
      article.slug !== currentSlug &&
      (!currentLanguage || article.language === currentLanguage)
  );

  for (const article of candidates) {
    if (linksAdded >= maxLinksPerParagraph) break;

    const phrases = getLinkPhrases(article.title);
    const url = `/${article.language}/${article.type}/${article.slug}`;

    for (const phrase of phrases) {
      if (linksAdded >= maxLinksPerParagraph) break;

      if (phrase.length < 5) continue;
      if (updated.includes(`href="${url}"`)) continue;

      const regex = new RegExp(`\\b(${escapeRegExp(phrase)})\\b`, "i");

      if (regex.test(updated)) {
        updated = updated.replace(
          regex,
          `<a href="${url}" class="text-blue-400 hover:underline">$1</a>`
        );
        linksAdded++;
        break;
      }
    }
  }

  return updated;
}