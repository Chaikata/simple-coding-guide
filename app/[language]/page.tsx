import Link from "next/link";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";

export default async function LanguagePage({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const { language } = await params;

  const languageArticles = articles.filter(
    (article) => article.language === language
  );

  if (languageArticles.length === 0) {
    notFound();
  }

  const tutorialCount = languageArticles.filter(
    (article) => article.type === "tutorials"
  ).length;

  const errorCount = languageArticles.filter(
    (article) => article.type === "errors"
  ).length;

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 capitalize">{language}</h1>

        <p className="text-gray-400 mb-10">
          Browse {language} tutorials and error fixes.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Link
            href={`/${language}/tutorials`}
            className="border border-gray-700 p-6 rounded-xl hover:border-gray-400 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Tutorials</h2>
            <p className="text-gray-400">{tutorialCount} articles</p>
          </Link>

          <Link
            href={`/${language}/errors`}
            className="border border-gray-700 p-6 rounded-xl hover:border-gray-400 transition"
          >
            <h2 className="text-2xl font-semibold mb-2">Error Fixes</h2>
            <p className="text-gray-400">{errorCount} articles</p>
          </Link>
        </div>

        <h2 className="text-2xl font-semibold mb-6">Latest {language} Articles</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {languageArticles.map((article) => (
            <Link
              key={article.slug}
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
      </div>
    </main>
  );
}