import Link from "next/link";
import { articles } from "@/data/articles";

export default function TypeScriptPage() {
  const languageArticles = articles.filter((article) => article.language === "typescript");
  const tutorialCount = languageArticles.filter((article) => article.type === "tutorials").length;
  const errorCount = languageArticles.filter((article) => article.type === "errors").length;
  const latestArticles = languageArticles.slice(-6).reverse();

  return (
    <main className="min-h-screen bg-black px-10 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <span className="text-gray-500">TypeScript</span>
        </nav>

        <h1 className="mb-4 text-4xl font-bold">TypeScript</h1>
        <p className="mb-8 max-w-2xl text-gray-400">
          Explore TypeScript tutorials and common TypeScript error fixes for beginners.
        </p>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <Link
            href="/typescript/tutorials"
            className="rounded-xl border border-gray-700 p-6 transition hover:border-gray-400"
          >
            <h2 className="mb-2 text-2xl font-semibold">TypeScript Tutorials</h2>
            <p className="text-gray-400">
              Beginner-friendly TypeScript learning articles and coding guides.
            </p>
            <p className="mt-4 text-sm text-gray-500">{tutorialCount} articles</p>
          </Link>

          <Link
            href="/typescript/errors"
            className="rounded-xl border border-gray-700 p-6 transition hover:border-gray-400"
          >
            <h2 className="mb-2 text-2xl font-semibold">TypeScript Errors</h2>
            <p className="text-gray-400">
              Understand common TypeScript errors and how to fix them.
            </p>
            <p className="mt-4 text-sm text-gray-500">{errorCount} articles</p>
          </Link>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold">Latest TypeScript Articles</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {latestArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.language}/${article.type}/${article.slug}`}
                className="rounded-lg border border-gray-700 p-4 transition hover:border-gray-400"
              >
                <h3 className="font-semibold">{article.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{article.description}</p>
                <p className="mt-3 text-xs uppercase text-gray-500">{article.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}