"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { articles } from "@/data/articles";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();

    if (!q) return [];

    return articles
      .filter((article) => {
        const haystack = [
          article.title,
          article.description,
          article.language,
          article.type,
          ...(article.content || []),
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(q);
      })
      .slice(0, 8);
  }, [query]);

  return (
    <section className="mb-16">
      <div className="max-w-3xl mx-auto">
        <label htmlFor="site-search" className="block text-sm text-gray-400 mb-2">
          Search tutorials and error fixes
        </label>

        <input
          id="site-search"
          type="text"
          placeholder="Search callback, join, undefined, syntax error..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-xl border border-gray-700 bg-black px-4 py-3 text-white outline-none focus:border-gray-400"
        />

        {query.trim() && (
          <div className="mt-4 grid gap-4">
            {results.length > 0 ? (
              results.map((article) => (
                <Link
                  key={`${article.language}-${article.type}-${article.slug}`}
                  href={`/${article.language}/${article.type}/${article.slug}`}
                  className="border border-gray-700 p-4 rounded-xl hover:border-gray-400 transition"
                >
                  <h3 className="text-lg font-semibold">{article.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{article.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {article.language} / {article.type}
                  </p>
                </Link>
              ))
            ) : (
              <div className="border border-gray-700 p-4 rounded-xl text-gray-400">
                No results found.
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}