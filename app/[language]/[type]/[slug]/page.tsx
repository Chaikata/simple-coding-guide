import Link from "next/link";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type ContentBlock =
  | string
  | {
      type: "paragraph" | "code";
      value: string;
    };

type PageProps = {
  params: Promise<{
    language: string;
    type: string;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { language, type, slug } = await params;

  const article = articles.find(
    (a) =>
      a.language === language &&
      a.type === type &&
      a.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found | Simple Coding Guide",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} | Simple Coding Guide`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { language, type, slug } = await params;

  const article = articles.find(
    (a) =>
      a.language === language &&
      a.type === type &&
      a.slug === slug
  );

  if (!article) {
    notFound();
  }

  const related = articles
    .filter(
      (a) =>
        a.language === article.language &&
        a.slug !== article.slug
    )
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-gray-500 mb-3 uppercase">
          {article.language} / {article.type}
        </p>

        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

        <p className="text-gray-400 mb-8">{article.description}</p>

        <div className="space-y-6">
          {article.content.map((block: ContentBlock, index: number) => {
            if (typeof block === "string") {
              return (
                <p key={index} className="text-gray-200 leading-8">
                  {block}
                </p>
              );
            }

            if (block.type === "code") {
              return (
                <pre
                  key={index}
                  className="bg-zinc-900 border border-gray-700 rounded-xl p-4 overflow-x-auto text-sm"
                >
                  <code>{block.value}</code>
                </pre>
              );
            }

            return (
              <p key={index} className="text-gray-200 leading-8">
                {block.value}
              </p>
            );
          })}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.language}/${item.type}/${item.slug}`}
                className="border border-gray-700 p-4 rounded-lg hover:border-gray-400 transition"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-1">
                  {item.language} / {item.type}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}