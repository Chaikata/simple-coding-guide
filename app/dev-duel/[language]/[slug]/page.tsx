import { notFound } from "next/navigation";
import ChallengeShare from "@/components/dev-duel/ChallengeShare";
import SolvedButton from "@/components/dev-duel/SolvedButton";
import { devDuels } from "@/data/devDuels";

type Props = {
  params: Promise<{
    language: string;
    slug: string;
  }>;
  searchParams: Promise<{
    from?: string;
  }>;
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

export function generateStaticParams() {
  return devDuels.map((challenge) => ({
    language: challenge.language,
    slug: challenge.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { language, slug } = await params;

  const challenge = devDuels.find(
    (item) => item.language === language && item.slug === slug
  );

  if (!challenge) {
    return {
      title: "Dev Duel Challenge",
      description: "Coding challenge on DevNestGuide.",
    };
  }

  const languageLabel =
    challenge.language === "cpp"
      ? "C++"
      : challenge.language.charAt(0).toUpperCase() + challenge.language.slice(1);

  return {
    title: `${challenge.title} | ${languageLabel} Challenge | Dev Duel`,
    description: challenge.description,
  };
}

export default async function DevDuelChallengePage({
  params,
  searchParams,
}: Props) {
  const { language, slug } = await params;
  const { from } = await searchParams;

  const challenge = devDuels.find(
    (item) => item.language === language && item.slug === slug
  );

  if (!challenge) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-black">
      <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-14">
        <section className="rounded-2xl border border-zinc-800 bg-black p-8 md:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-300">
              {challenge.language}
            </span>

            <span
              className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wide ${getDifficultyStyle(
                challenge.difficulty
              )}`}
            >
              {challenge.difficulty}
            </span>

            <span className="text-sm text-zinc-500">
              {challenge.estimatedTime}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {challenge.title}
          </h1>

          <p className="mt-4 text-base leading-7 text-zinc-300">
            {challenge.description}
          </p>

          {from ? (
            <p className="mt-4 text-sm text-zinc-400">
              {from} challenged you to this Dev Duel.
            </p>
          ) : null}

          <SolvedButton id={`${challenge.language}-${challenge.slug}`} />
        </section>

        <section className="mt-10 rounded-2xl border border-zinc-800 bg-black p-8">
          <h2 className="text-2xl font-semibold text-white">Challenge prompt</h2>
          <p className="mt-4 whitespace-pre-line text-zinc-300">
            {challenge.prompt}
          </p>
        </section>

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-black p-6">
            <h3 className="text-xl font-semibold text-white">Guidance</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              {challenge.guidance.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-black p-6">
            <h3 className="text-xl font-semibold text-white">Hints</h3>
            <ul className="mt-4 space-y-3 text-zinc-300">
              {challenge.hints.map((hint) => (
                <li key={hint}>• {hint}</li>
              ))}
            </ul>
          </div>
        </section>

        {challenge.starterCode ? (
          <section className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">
            <h3 className="text-xl font-semibold text-white">Starter code</h3>
            <pre className="mt-4 overflow-x-auto rounded-xl border border-zinc-800 bg-black p-4 text-sm text-zinc-200">
              <code>{challenge.starterCode}</code>
            </pre>
          </section>
        ) : null}

        {challenge.expectedOutput ? (
          <section className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">
            <h3 className="text-xl font-semibold text-white">Expected output</h3>
            <p className="mt-4 text-zinc-300">{challenge.expectedOutput}</p>
          </section>
        ) : null}

        <section className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">
          <h3 className="text-xl font-semibold text-white">Core concepts</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {challenge.concepts.map((concept) => (
              <span
                key={concept}
                className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300"
              >
                {concept}
              </span>
            ))}
          </div>
        </section>

        <ChallengeShare title={challenge.title} />
      </div>
    </main>
  );
}