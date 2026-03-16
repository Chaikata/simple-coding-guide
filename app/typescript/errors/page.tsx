import Link from "next/link";
import { articles } from "@/data/articles";

export default function TypeScriptErrorsPage() {
  const errorArticles = articles.filter(
    (article) => article.language === "typescript" && article.type === "errors"
  );

  return (
    <main className="min-h-screen bg-black px-10 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <Link href="/typescript" className="hover:text-white">
            TypeScript
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <span className="text-gray-500">Errors</span>
        </nav>

        <h1 className="mb-4 text-4xl font-bold">TypeScript Errors</h1>
        <p className="mb-8 text-gray-400">
          Fix common TypeScript errors with simple explanations and examples.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {errorArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.language}/${article.type}/${article.slug}`}
              className="rounded-lg border border-gray-700 p-4 transition hover:border-gray-400"
            >
              <h2 className="font-semibold">{article.title}</h2>
              <p className="mt-2 text-sm text-gray-400">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}