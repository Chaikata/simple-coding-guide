import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dev-duel", label: "Dev Duel" },
  { href: "/javascript", label: "JavaScript" },
  { href: "/typescript", label: "TypeScript" },
  { href: "/python", label: "Python" },
  { href: "/sql", label: "SQL" },
];

export default function Navbar() {
  return (
    <header className="border-b border-gray-800 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-10 py-4">
        <Link href="/" className="text-xl font-bold text-white">
          Dev Nest Guide
        </Link>

        <nav className="flex flex-wrap items-center gap-5 text-sm text-gray-300">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}