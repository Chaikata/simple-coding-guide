import Link from "next/link";
import { articles } from "@/data/articles";
import { devDuels } from "@/data/devDuels";
import SearchBar from "@/components/SearchBar";

const languages = [
  {
    slug: "javascript",
    name: "JavaScript",
    description: "Learn JavaScript concepts, patterns, and common error fixes.",
  },
  {
    slug: "typescript",
    name: "TypeScript",
    description: "Understand TypeScript types, syntax, and common debugging issues.",
  },
  {
    slug: "python",
    name: "Python",
    description: "Work through Python basics, examples, and common coding mistakes.",
  },
  {
    slug: "sql",
    name: "SQL",
    description: "Understand queries, database concepts, and common SQL errors.",
  },
];

function getArticleCount(language: string) {
  return articles.filter((article) => article.language === language).length;
}

function getLatestArticles(limit = 8) {
  return [...articles].slice(-limit).reverse();
}

function getTotalArticleCount() {
  return articles.length;
}

function getTotalDevDuelCount() {
  return devDuels.length;
}

export default function HomePage() {
  const latestArticles = getLatestArticles(8);
  const totalArticles = getTotalArticleCount();
  const totalDevDuels = getTotalDevDuelCount();

  return (
    <main className="min-h-screen bg-black px-6 py-10 text-white md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 rounded-2xl border border-gray-800 bg-white/[0.02] px-6 py-8 md:px-8 md:py-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
            Dev Nest Guide
          </p>

          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Clear coding help without the clutter.
          </h1>

          <p className="max-w-3xl text-base leading-7 text-gray-400 md:text-lg">
            Dev Nest Guide is a searchable place for coding tutorials, error
            explanations, and beginner-friendly help across different languages.
            Find what went wrong, understand why it happened, and keep moving.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400">
            <div className="rounded-full border border-gray-800 px-4 py-2">
              {totalArticles} articles
            </div>

            <div className="rounded-full border border-gray-800 px-4 py-2">
              4 languages supported (more coming soon)
            </div>

            <Link
              href="/dev-duel"
              className="rounded-full border border-gray-800 px-4 py-2 transition hover:border-gray-500 hover:text-white"
            >
              {totalDevDuels} Dev Duel challenges →
            </Link>
          </div>
        </div>

        <div className="mb-14">
          <SearchBar />
        </div>

        <div className="mb-14">
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Browse by Language
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-gray-400">
              Jump into the language you are working in. More languages and more
              topics will keep being added over time.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {languages.map((language) => (
              <Link
                key={language.slug}
                href={`/${language.slug}`}
                className="group flex min-h-[220px] flex-col rounded-xl border border-gray-800 bg-white/[0.02] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-gray-500 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold">{language.name}</h3>
                  <span className="mt-1 text-sm text-gray-500 transition group-hover:text-gray-300">
                    →
                  </span>
                </div>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {language.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-6 text-sm">
                  <p className="text-gray-500">
                    {getArticleCount(language.slug)} articles
                  </p>
                  <p className="text-gray-500 transition group-hover:text-gray-300">
                    Open
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h2 className="text-3xl font-bold tracking-tight">
              Latest Articles
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Recently added explanations, guides, and fixes.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.language}/${article.type}/${article.slug}`}
                className="group rounded-xl border border-gray-800 bg-white/[0.02] p-5 transition duration-200 hover:border-gray-500 hover:bg-white/[0.04]"
              >
                <p className="mb-2 text-xs uppercase tracking-wide text-gray-500">
                  {article.language} / {article.type}
                </p>
                <h3 className="mb-2 text-xl font-semibold transition group-hover:text-gray-100">
                  {article.title}
                </h3>
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