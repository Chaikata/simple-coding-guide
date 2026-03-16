import Link from "next/link";
import { articles } from "@/data/articles";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  const javascriptArticles = articles.filter(
    (article) => article.language === "javascript"
  );

  const sqlArticles = articles.filter(
    (article) => article.language === "sql"
  );

  const tutorialArticles = articles.filter(
    (article) => article.type === "tutorials"
  );

  const errorArticles = articles.filter(
    (article) => article.type === "errors"
  );

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">Simple Coding Guide</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Beginner-friendly coding tutorials and error fixes for JavaScript, SQL, and more.
          </p>
        </section>

        <SearchBar />

        <section className="grid md:grid-cols-2 gap-6 mb-16">
          <Link
            href="/javascript"
            className="border border-gray-700 p-6 rounded-xl hover:border-gray-400 transition"
          >
            <h2 className="text-3xl font-semibold mb-2">JavaScript</h2>
            <p className="text-gray-400">{javascriptArticles.length} articles</p>
          </Link>

          <Link
            href="/sql"
            className="border border-gray-700 p-6 rounded-xl hover:border-gray-400 transition"
          >
            <h2 className="text-3xl font-semibold mb-2">SQL</h2>
            <p className="text-gray-400">{sqlArticles.length} articles</p>
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Latest Tutorials</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tutorialArticles.slice(0, 6).map((article) => (
              <Link
                key={`${article.language}-${article.type}-${article.slug}`}
                href={`/${article.language}/${article.type}/${article.slug}`}
                className="border border-gray-700 p-6 rounded-xl hover:border-gray-400 transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-400">{article.description}</p>
                <p className="text-sm text-gray-500 mt-3">
                  {article.language} / {article.type}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Common Error Fixes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {errorArticles.slice(0, 6).map((article) => (
              <Link
                key={`${article.language}-${article.type}-${article.slug}`}
                href={`/${article.language}/${article.type}/${article.slug}`}
                className="border border-gray-700 p-6 rounded-xl hover:border-gray-400 transition"
              >
                <h3 className="text-2xl font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-400">{article.description}</p>
                <p className="text-sm text-gray-500 mt-3">
                  {article.language} / {article.type}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}