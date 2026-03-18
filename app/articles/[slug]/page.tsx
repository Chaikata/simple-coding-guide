import Link from "next/link";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import CodeBlock from "@/components/CodeBlock";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = articles
    .filter((a) => a.language === article.language && a.slug !== article.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-black px-10 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <span className="text-gray-500">{article.title}</span>
        </nav>

        <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>

        <p className="mb-8 text-gray-400">{article.description}</p>

        <div className="space-y-6">
          {article.content.map((block, index) => {
            const safeBlock = block as {
              type?: "paragraph" | "code";
              value?: string;
            };

            if (typeof block === "string") {
              return (
                <p key={index} className="leading-8 text-gray-200">
                  {block}
                </p>
              );
            }

            if (safeBlock.type === "code" && safeBlock.value) {
              return (
                <CodeBlock
                  key={index}
                  code={safeBlock.value}
                  language={
                    article.language === "typescript"
                      ? "typescript"
                      : article.language
                  }
                />
              );
            }

            return (
              <p key={index} className="leading-8 text-gray-200">
                {safeBlock.value || ""}
              </p>
            );
          })}
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-2xl font-bold">Related Articles</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.language}/${item.type}/${item.slug}`}
                className="rounded-lg border border-gray-700 p-4 transition hover:border-gray-400"
              >
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-400">
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