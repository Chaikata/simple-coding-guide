import Link from "next/link";

export const metadata = {
  title: "About | Dev Nest Guide",
  description:
    "Learn more about Dev Nest Guide and its mission to provide beginner-friendly coding tutorials and error explanations.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black px-10 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <span className="text-gray-500">About</span>
        </nav>

        <h1 className="mb-6 text-4xl font-bold">About Dev Nest Guide</h1>

        <div className="space-y-6 leading-8 text-gray-300">
          <p>
            Dev Nest Guide is a beginner-friendly coding website built to make
            programming easier to learn. The goal is to provide clear tutorials,
            practical examples, and simple explanations for common coding
            errors.
          </p>

          <p>
            The site focuses on topics across JavaScript, TypeScript, Python,
            and SQL. Articles are designed to help beginners understand both the
            basics of coding and the meaning behind real error messages they
            encounter while learning.
          </p>

          <p>
            Dev Nest Guide is designed for students, self-taught developers, and
            anyone looking for simple, fast, and useful programming help without
            unnecessary complexity.
          </p>
        </div>
      </div>
    </main>
  );
}