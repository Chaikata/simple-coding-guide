"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { DevDuelChallenge } from "@/data/devDuels";

type Props = {
  language: string;
  languageName: string;
  languageDescription: string;
  duels: DevDuelChallenge[];
};

function getDifficultyStyle(level: string) {
  switch (level) {
    case "beginner":
      return "border-green-500/30 text-green-400";
    case "intermediate":
      return "border-yellow-500/30 text-yellow-400";
    case "advanced":
      return "border-red-500/30 text-red-400";
    default:
      return "border-zinc-700 text-zinc-300";
  }
}

export default function DevDuelLanguageClient({
  language,
  languageName,
  languageDescription,
  duels,
}: Props) {
  const categories = Array.from(
    new Set(duels.map((duel) => duel.category).filter(Boolean))
  ).sort((a, b) => a.localeCompare(b));

  const [difficultyFilter, setDifficultyFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const filteredDuels = useMemo(() => {
    return duels.filter((duel) => {
      const matchesDifficulty =
        difficultyFilter === "all" || duel.difficulty === difficultyFilter;

      const matchesCategory =
        categoryFilter === "all" || duel.category === categoryFilter;

      return matchesDifficulty && matchesCategory;
    });
  }, [duels, difficultyFilter, categoryFilter]);

  return (
    <main className="min-h-screen w-full bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section className="rounded-2xl border border-zinc-800 bg-black p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Dev Duel
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
            {languageName} Challenges
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            {languageDescription}
          </p>
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Filter challenges</h2>
              <p className="mt-2 text-sm text-zinc-400">
                Narrow down by difficulty or category.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="flex flex-col gap-2 text-sm text-zinc-300">
                <span>Difficulty</span>
                <select
                  value={difficultyFilter}
                  onChange={(e) => setDifficultyFilter(e.target.value)}
                  className="rounded-lg border border-zinc-800 bg-black px-3 py-2 text-sm text-white outline-none transition focus:border-zinc-600"
                >
                  <option value="all">All difficulties</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 text-sm text-zinc-300">
                <span>Category</span>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="rounded-lg border border-zinc-800 bg-black px-3 py-2 text-sm text-white outline-none transition focus:border-zinc-600"
                >
                  <option value="all">All categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          <div className="mt-5 text-sm text-zinc-400">
            Showing {filteredDuels.length} of {duels.length} challenges
          </div>
        </section>

        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">All challenges</h2>
            <p className="mt-2 text-zinc-400">
              Practice concepts, improve problem-solving, and build confidence.
            </p>
          </div>

          {filteredDuels.length === 0 ? (
            <div className="rounded-2xl border border-zinc-800 bg-black p-8 text-zinc-400">
              No challenges match those filters yet.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredDuels.map((duel) => (
                <Link
                  key={duel.slug}
                  href={`/dev-duel/${language}/${duel.slug}`}
                  className="block rounded-xl border border-zinc-800 bg-black p-5 transition hover:border-zinc-700"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${getDifficultyStyle(
                        duel.difficulty
                      )}`}
                    >
                      {duel.difficulty}
                    </span>

                    <span className="text-xs text-zinc-500">
                      {duel.estimatedTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {duel.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-400">
                    {duel.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300">
                      {duel.category}
                    </span>

                    {duel.concepts.slice(0, 2).map((concept) => (
                      <span
                        key={concept}
                        className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300"
                      >
                        {concept}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}