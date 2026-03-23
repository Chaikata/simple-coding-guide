"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const languageLinks = [
  { href: "/javascript", label: "JavaScript" },
  { href: "/typescript", label: "TypeScript" },
  { href: "/python", label: "Python" },
  { href: "/sql", label: "SQL" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-xl font-bold text-white">
          Dev Nest Guide
        </Link>

        <nav className="flex items-center gap-5 text-sm text-gray-300">
          <Link href="/" className="transition hover:text-white">
            Home
          </Link>

          <Link href="/dev-duel" className="transition hover:text-white">
            Dev Duel
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setOpen((prev) => !prev)}
              className="flex items-center gap-2 transition hover:text-white"
              aria-expanded={open}
              aria-haspopup="menu"
            >
              Languages
              <span
                className={`transition-transform duration-200 ${
                  open ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {open ? (
              <div className="absolute right-0 top-full z-50 mt-3 w-52 rounded-xl border border-gray-800 bg-black/95 p-2 shadow-lg backdrop-blur">
                <div className="flex flex-col">
                  {languageLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-gray-300 transition hover:bg-white/[0.04] hover:text-white"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}