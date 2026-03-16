import { articles } from "@/data/articles";
import { notFound } from "next/navigation";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) notFound();

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        <p className="text-gray-400 mb-8">{article.description}</p>

        <div className="space-y-6">
          {article.content.map((p: string, i: number) => (
            <p key={i} className="text-gray-200 leading-8">
              {p}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}