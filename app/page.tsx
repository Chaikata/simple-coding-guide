import Link from "next/link";
import { articles } from "@/data/articles";
import SearchBar from "@/components/SearchBar";

const languages = [
  {
    slug: "javascript",
    name: "JavaScript",
    description: "Learn JavaScript basics, concepts, and common error fixes.",
  },
  {
    slug: "typescript",
    name: "TypeScript",
    description: "Explore TypeScript tutorials and fix common TypeScript errors.",
  },
  {
    slug: "python",
    name: "Python",
    description: "Study Python step by step with beginner guides and error help.",
  },
  {
    slug: "sql",
    name: "SQL",
    description: "Understand SQL queries, concepts, and common database errors.",
  },
];

function getArticleCount(language: string) {
  return articles.filter((article) => article.language === language).length;
}

function getLatestArticles(limit = 8) {
  return [...articles].slice(-limit).reverse();
}

export default function HomePage() {
  const latestArticles = getLatestArticles(8);

  return (
    <main className="min-h-screen bg-black px-10 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="mb-4 text-5xl font-bold">codeAtlas</h1>
          <p className="max-w-3xl text-lg text-gray-400">
            Beginner-friendly coding tutorials and error explanations for
            JavaScript, TypeScript, Python, and SQL.
          </p>
        </div>

        <div className="mb-12">
          <SearchBar />
        </div>

        <div className="mb-14">
          <h2 className="mb-6 text-3xl font-bold">Browse by Language</h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {languages.map((language) => (
              <Link
                key={language.slug}
                href={`/${language.slug}`}
                className="rounded-xl border border-gray-700 p-6 transition hover:border-gray-400"
              >
                <h3 className="mb-2 text-2xl font-semibold">{language.name}</h3>
                <p className="text-sm leading-6 text-gray-400">
                  {language.description}
                </p>
                <p className="mt-4 text-sm text-gray-500">
                  {getArticleCount(language.slug)} articles
                </p>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-3xl font-bold">Latest Articles</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.language}/${article.type}/${article.slug}`}
                className="rounded-xl border border-gray-700 p-5 transition hover:border-gray-400"
              >
                <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">
                  {article.language} / {article.type}
                </p>
                <h3 className="mb-2 text-xl font-semibold">{article.title}</h3>
                <p className="text-sm leading-6 text-gray-400">
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}