import Link from "next/link";

export default function DevDuelHero() {
  return (
    <section className="rounded-2xl border border-zinc-800 bg-black p-8 md:p-10">
      <div className="max-w-3xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
          Dev Duel
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Sharpen your skills with real coding challenges
        </h1>

        <p className="mt-4 text-base leading-7 text-zinc-300 md:text-lg">
          Practice JavaScript, Python, SQL, and C++ with guided challenges
          built for beginners through advanced learners.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/dev-duel/javascript"
            className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:opacity-90"
          >
            Start a Duel
          </Link>

          <Link
            href="/dev-duel#languages"
            className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-zinc-600"
          >
            Browse Languages
          </Link>
        </div>
      </div>
    </section>
  );
}