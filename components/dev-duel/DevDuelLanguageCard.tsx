import Link from "next/link";

type Props = {
  slug: string;
  name: string;
  description: string;
};

export default function DevDuelLanguageCard({
  slug,
  name,
  description,
}: Props) {
  return (
    <Link
      href={`/dev-duel/${slug}`}
      className="group rounded-xl border border-zinc-800 bg-black p-5 transition hover:border-zinc-700"
    >
      <h3 className="text-lg font-semibold text-white">{name}</h3>

      <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>

      <span className="mt-4 inline-block text-sm font-medium text-zinc-300">
        Explore challenges →
      </span>
    </Link>
  );
}