import Link from "next/link";
import type { DevDuelChallenge } from "@/data/devDuels";

type Props = {
  challenge: DevDuelChallenge;
};

export default function DevDuelChallengeCard({ challenge }: Props) {
  return (
    <Link
      href={`/dev-duel/${challenge.language}/${challenge.slug}`}
      className="block rounded-xl border border-zinc-800 bg-black p-5 transition hover:border-zinc-700"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs font-medium uppercase tracking-wide text-zinc-300">
          {challenge.difficulty}
        </span>

        <span className="text-xs text-zinc-500">{challenge.estimatedTime}</span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-white">
        {challenge.title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-400">
        {challenge.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {challenge.concepts.slice(0, 3).map((concept) => (
          <span
            key={concept}
            className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-300"
          >
            {concept}
          </span>
        ))}
      </div>
    </Link>
  );
}