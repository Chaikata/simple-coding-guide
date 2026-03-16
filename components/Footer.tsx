import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-10 py-8 text-sm text-gray-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-white">Dev Nest Guide</p>
          <p className="mt-1">
            Beginner-friendly coding tutorials and error explanations.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4">
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
          <Link href="/privacy-policy" className="transition hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition hover:text-white">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}