"use client";

import { useEffect, useState } from "react";

type Props = {
  id: string;
};

export default function SolvedButton({ id }: Props) {
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("devduel_solved");
    if (!stored) return;

    const parsed = JSON.parse(stored);
    if (parsed.includes(id)) {
      setSolved(true);
    }
  }, [id]);

  const handleSolve = () => {
    const stored = localStorage.getItem("devduel_solved");
    let parsed: string[] = stored ? JSON.parse(stored) : [];

    if (!parsed.includes(id)) {
      parsed.push(id);
      localStorage.setItem("devduel_solved", JSON.stringify(parsed));
    }

    setSolved(true);
  };

  return (
    <button
      onClick={handleSolve}
      className={`mt-6 rounded-lg px-5 py-3 text-sm font-semibold transition ${
        solved
          ? "bg-green-600 text-white"
          : "bg-white text-black hover:opacity-90"
      }`}
    >
      {solved ? "Solved ✓" : "Mark as Solved"}
    </button>
  );
}