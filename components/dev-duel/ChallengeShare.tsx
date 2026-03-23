"use client";

import { useState } from "react";

type Props = {
  title: string;
};

export default function ChallengeShare({ title }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const challenger = "friend";
      const url = `${window.location.origin}${window.location.pathname}?from=${encodeURIComponent(
        challenger
      )}`;

      await navigator.clipboard.writeText(url);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  const handleNativeShare = async () => {
    try {
      const challenger = "friend";
      const url = `${window.location.origin}${window.location.pathname}?from=${encodeURIComponent(
        challenger
      )}`;

      if (navigator.share) {
        await navigator.share({
          title: `${title} | Dev Duel`,
          text: `Try this Dev Duel challenge: ${title}`,
          url,
        });
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Share failed", err);
    }
  };

  return (
    <section className="mt-8 rounded-2xl border border-zinc-800 bg-black p-6">
      <h3 className="text-xl font-semibold text-white">Challenge a Friend</h3>

      <p className="mt-3 text-zinc-300">
        Send this duel to someone else and see if they can solve it.
      </p>

      <div className="mt-5 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="rounded-lg border border-zinc-700 px-4 py-2 text-sm font-medium text-white transition hover:border-zinc-600"
        >
          {copied ? "Copied!" : "Copy Challenge Link"}
        </button>

        <button
          type="button"
          onClick={handleNativeShare}
          className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
        >
          Challenge a Friend
        </button>
      </div>
    </section>
  );
}