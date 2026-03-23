"use client";

import { useEffect, useState } from "react";

type Props = {
  id: string;
};

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function SolvedButton({ id }: Props) {
  const [solved, setSolved] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("devduel_solved");
      if (!stored) return;

      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.includes(id)) {
        setSolved(true);
      }
    } catch (error) {
      console.error("Failed to read solved challenges", error);
    }
  }, [id]);

  const handleSolve = () => {
    try {
      const storedSolved = localStorage.getItem("devduel_solved");
      const parsedSolved: string[] = storedSolved
        ? JSON.parse(storedSolved)
        : [];

      if (Array.isArray(parsedSolved) && !parsedSolved.includes(id)) {
        const updatedSolved = [...parsedSolved, id];
        localStorage.setItem("devduel_solved", JSON.stringify(updatedSolved));
      }

      const storedDays = localStorage.getItem("devduel_streak_days");
      const parsedDays: string[] = storedDays ? JSON.parse(storedDays) : [];
      const today = getTodayKey();

      if (Array.isArray(parsedDays) && !parsedDays.includes(today)) {
        const updatedDays = [...parsedDays, today].sort();
        localStorage.setItem("devduel_streak_days", JSON.stringify(updatedDays));
      }

      setSolved(true);
    } catch (error) {
      console.error("Failed to save solved challenge", error);
    }
  };

  return (
    <button
      type="button"
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