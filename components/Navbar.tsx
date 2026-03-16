import Link from "next/link";
import { articles } from "@/data/articles";

export default function Navbar() {
  const languages = Array.from(
    new Set(articles.map((article) => article.language))
  );

  return (
    <nav className="border-b border-gray-800 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-6 items-center">
        <Link href="/" className="text-xl font-bold">
          Simple Coding Guide
        </Link>

        {languages.map((language) => (
          <Link
            key={language}
            href={`/${language}`}
            className="text-gray-300 hover:text-white transition capitalize"
          >
            {language}
          </Link>
        ))}
      </div>
    </nav>
  );
}