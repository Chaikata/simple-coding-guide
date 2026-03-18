import Link from "next/link";
import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import CodeBlock from "@/components/CodeBlock";
import { addInternalLinks } from "@/lib/internalLinks";
import Script from "next/script";

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

function formatLabel(value: string) {
  return value
    .split("-")
    .map((word) => {
      const lower = word.toLowerCase();
      if (lower === "javascript") return "JavaScript";
      if (lower === "typescript") return "TypeScript";
      if (lower === "python") return "Python";
      if (lower === "sql") return "SQL";
      if (lower === "api") return "API";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

function getYoutubeEmbedUrl(videoUrl?: string) {
  if (!videoUrl) return "";

  try {
    const url = new URL(videoUrl);
    const id = url.searchParams.get("v");
    if (!id) return "";
    return `https://www.youtube-nocookie.com/embed/${id}`;
  } catch {
    return "";
  }
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { language, type, slug } = await params;

  const article = articles.find(
    (a) => a.language === language && a.type === type && a.slug === slug
  );

  if (!article) {
    return {
      title: "Article Not Found | Dev Nest Guide",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: `${article.title} | Dev Nest Guide`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { language, type, slug } = await params;

  const article = articles.find(
    (a) => a.language === language && a.type === type && a.slug === slug
  );

  if (!article) {
    notFound();
  }

  const embedUrl = getYoutubeEmbedUrl(article.videoUrl);

  const related = articles
    .filter((a) => a.language === article.language && a.slug !== article.slug)
    .slice(0, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Organization",
      name: "Dev Nest Guide",
    },
    publisher: {
      "@type": "Organization",
      name: "Dev Nest Guide",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://devnestguide.com/${article.language}/${article.type}/${article.slug}`,
    },
    url: `https://devnestguide.com/${article.language}/${article.type}/${article.slug}`,
    articleSection: formatLabel(article.type),
    keywords: [
      formatLabel(article.language),
      formatLabel(article.type),
      article.title,
    ],
  };

  return (
    <main className="min-h-screen bg-black px-10 py-10 text-white">
      <Script
        id="article-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify(articleSchema)}
      </Script>

      <div className="mx-auto max-w-3xl">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <Link href={`/${article.language}`} className="hover:text-white">
            {formatLabel(article.language)}
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <Link
            href={`/${article.language}/${article.type}`}
            className="hover:text-white"
          >
            {formatLabel(article.type)}
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <span className="text-gray-500">{article.title}</span>
        </nav>

        <h1 className="mb-4 text-4xl font-bold">{article.title}</h1>

        <p className="mb-8 text-gray-400">{article.description}</p>

        {embedUrl && (
          <div className="mb-10 overflow-hidden rounded-xl border border-gray-700">
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                title={`${article.title} video`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}

        <div className="space-y-6">
          {article.content.map((block, index) => {
            const safeBlock = block as {
              type?: "paragraph" | "code";
              value?: string;
            };

            if (typeof block === "string") {
              return (
                <p
                  key={index}
                  className="leading-8 text-gray-200"
                  dangerouslySetInnerHTML={{
                    __html: addInternalLinks(
                      block,
                      article.slug,
                      article.language
                    ),
                  }}
                />
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
              <p
                key={index}
                className="leading-8 text-gray-200"
                dangerouslySetInnerHTML={{
                  __html: addInternalLinks(
                    safeBlock.value || "",
                    article.slug,
                    article.language
                  ),
                }}
              />
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
                  {formatLabel(item.language)} / {formatLabel(item.type)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}