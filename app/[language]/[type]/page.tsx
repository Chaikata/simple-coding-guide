import Link from "next/link";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";

export default async function SectionPage({
  params,
}: {
  params: Promise<{ language: string; type: string }>;
}) {
  const { language, type } = await params;

  const filteredArticles = articles.filter(
    (article) => article.language === language && article.type === type
  );

  if (filteredArticles.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 capitalize">
          {language} {type}
        </h1>

        <p className="text-gray-400 mb-10">
          Browse all {type} for {language}.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.language}/${article.type}/${article.slug}`}
              className="border border-gray-700 p-6 rounded-xl hover:border-gray-400 transition"
            >
              <h2 className="text-2xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-400">{article.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}