import Link from "next/link";

export const metadata = {
  title: "Contact | Dev Nest Guide",
  description:
    "Contact Dev Nest Guide for questions, feedback, corrections, or business inquiries.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-10 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <span className="text-gray-500">Contact</span>
        </nav>

        <h1 className="mb-6 text-4xl font-bold">Contact</h1>

        <div className="space-y-6 leading-8 text-gray-300">
          <p>
            For questions, feedback, corrections, or business inquiries, you can
            contact Dev Nest Guide at:
          </p>

          <div className="rounded-lg border border-gray-700 bg-zinc-900 p-4">
            <p className="font-medium text-white">contact.devnestguide@gmail.com</p>
          </div>

          <p>
            If you are reporting an issue with an article, it helps to include
            the article title and a short explanation of the problem.
          </p>
        </div>
      </div>
    </main>
  );
}