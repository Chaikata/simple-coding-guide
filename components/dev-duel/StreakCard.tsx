"use client";

import { useEffect, useState } from "react";

type StreakData = {
  currentStreak: number;
  activeDays: number;
};

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getYesterdayKey(dateKey: string) {
  const date = new Date(`${dateKey}T12:00:00`);
  date.setDate(date.getDate() - 1);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function calculateStreak(days: string[]) {
  if (!days.length) {
    return {
      currentStreak: 0,
      activeDays: 0,
    };
  }

  const uniqueSortedDays = Array.from(new Set(days)).sort().reverse();
  const today = getTodayKey();

  let streak = 0;
  let cursor = uniqueSortedDays[0];

  if (cursor !== today && cursor !== getYesterdayKey(today)) {
    return {
      currentStreak: 0,
      activeDays: uniqueSortedDays.length,
    };
  }

  for (let i = 0; i < uniqueSortedDays.length; i++) {
    if (i === 0) {
      streak = 1;
      continue;
    }

    const expectedPreviousDay = getYesterdayKey(uniqueSortedDays[i - 1]);

    if (uniqueSortedDays[i] === expectedPreviousDay) {
      streak += 1;
    } else {
      break;
    }
  }

  if (uniqueSortedDays[0] === getYesterdayKey(today)) {
    return {
      currentStreak: streak,
      activeDays: uniqueSortedDays.length,
    };
  }

  return {
    currentStreak: streak,
    activeDays: uniqueSortedDays.length,
  };
}

export default function StreakCard() {
  const [streakData, setStreakData] = useState<StreakData>({
    currentStreak: 0,
    activeDays: 0,
  });

  useEffect(() => {
    try {
      const raw = localStorage.getItem("devduel_streak_days");
      const parsed = raw ? JSON.parse(raw) : [];
      const days = Array.isArray(parsed) ? parsed : [];

      setStreakData(calculateStreak(days));
    } catch (error) {
      console.error("Failed to load streak data", error);
    }
  }, []);

  return (
    <section className="mt-10 rounded-2xl border border-zinc-800 bg-black p-8">
      <p className="text-sm uppercase tracking-wide text-zinc-400">
        Your Streak
      </p>

      <div className="mt-4 flex flex-wrap items-end gap-8">
        <div>
          <div className="text-4xl font-bold text-white">
            {streakData.currentStreak}
          </div>
          <p className="mt-1 text-sm text-zinc-400">Current streak</p>
        </div>

        <div>
          <div className="text-4xl font-bold text-white">
            {streakData.activeDays}
          </div>
          <p className="mt-1 text-sm text-zinc-400">Active days</p>
        </div>
      </div>

      <p className="mt-4 text-sm text-zinc-500">
        Solve at least one Dev Duel each day to keep your streak alive.
      </p>
    </section>
  );
}