import { notFound } from "next/navigation";
import DevDuelChallengeCard from "@/components/dev-duel/DevDuelChallengeCard";
import { devDuels, supportedDevDuelLanguages } from "@/data/devDuels";

type Props = {
  params: Promise<{
    language: string;
  }>;
};

export function generateStaticParams() {
  return supportedDevDuelLanguages.map((language) => ({
    language: language.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { language: languageSlug } = await params;

  const language = supportedDevDuelLanguages.find(
    (item) => item.slug === languageSlug
  );

  if (!language) {
    return {
      title: "Dev Duel",
      description: "Coding challenges on DevNestGuide.",
    };
  }

  return {
    title: `${language.name} Coding Challenges | Dev Duel`,
    description: `Practice ${language.name} with guided coding challenges on DevNestGuide.`,
  };
}

export default async function DevDuelLanguagePage({ params }: Props) {
  const { language: languageSlug } = await params;

  const language = supportedDevDuelLanguages.find(
    (item) => item.slug === languageSlug
  );

  if (!language) {
    notFound();
  }

  const languageChallenges = devDuels.filter(
    (challenge) => challenge.language === languageSlug
  );

  return (
    <main className="min-h-screen w-full bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section className="rounded-2xl border border-zinc-800 bg-black p-8 md:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Dev Duel
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
            {language.name} Challenges
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
            {language.description}
          </p>
        </section>

        <section className="mt-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white">All challenges</h2>
            <p className="mt-2 text-zinc-400">
              Practice concepts, improve problem-solving, and build confidence.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {languageChallenges.map((challenge) => (
              <DevDuelChallengeCard key={challenge.slug} challenge={challenge} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}