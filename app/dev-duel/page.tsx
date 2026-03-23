import DevDuelHero from "@/components/dev-duel/DevDuelHero";
import DevDuelLanguageCard from "@/components/dev-duel/DevDuelLanguageCard";
import DevDuelChallengeCard from "@/components/dev-duel/DevDuelChallengeCard";
import { devDuels, supportedDevDuelLanguages } from "@/data/devDuels";
import Link from "next/link";

export const metadata = {
  title: "Dev Duel | Coding Challenges for JavaScript, Python, SQL, and C++",
  description:
    "Practice coding with guided challenges across JavaScript, Python, SQL, and C++ on DevNestGuide.",
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

export default function DevDuelPage() {
  const featuredChallenges = devDuels.filter((c) => c.isFeatured);

  const todayIndex = new Date().getDate() % devDuels.length;
  const dailyChallenge = devDuels[todayIndex];

  return (
    <main className="min-h-screen w-full bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <DevDuelHero />

        <section className="mt-10 rounded-2xl border border-zinc-800 bg-black p-8">
          <p className="text-sm uppercase tracking-wide text-zinc-400">
            Daily Duel
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {dailyChallenge.title}
          </h2>

          <p className="mt-3 text-zinc-300">{dailyChallenge.description}</p>

          <div className="mt-5 flex items-center gap-4">
            <Link
              href={`/dev-duel/${dailyChallenge.language}/${dailyChallenge.slug}`}
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black hover:opacity-90"
            >
              Start Today’s Duel
            </Link>

            <div className="flex items-center gap-3">
              <span
                className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${getDifficultyStyle(
                  dailyChallenge.difficulty
                )}`}
              >
                {dailyChallenge.difficulty}
              </span>

              <span className="text-sm text-zinc-500">
                {dailyChallenge.estimatedTime}
              </span>
            </div>
          </div>
        </section>

        <section id="languages" className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">
              Browse by language
            </h2>
            <p className="mt-2 text-zinc-400">
              Choose a language and jump into practical challenges.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportedDevDuelLanguages.map((language) => (
              <DevDuelLanguageCard
                key={language.slug}
                slug={language.slug}
                name={language.name}
                description={language.description}
              />
            ))}
          </div>
        </section>

        <section className="mt-14">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">Featured duels</h2>
            <p className="mt-2 text-zinc-400">
              Start with strong practice problems across languages.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredChallenges.map((challenge) => (
              <DevDuelChallengeCard
                key={challenge.slug}
                challenge={challenge}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}