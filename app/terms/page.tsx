import Link from "next/link";

export const metadata = {
  title: "Terms | Dev Nest Guide",
  description:
    "Read the terms of use for Dev Nest Guide and understand the conditions for using the website and its content.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black px-10 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <span className="text-gray-500">Terms</span>
        </nav>

        <h1 className="mb-6 text-4xl font-bold">Terms</h1>

        <div className="space-y-6 leading-8 text-gray-300">
          <p>
            The content on Dev Nest Guide is provided for general educational and
            informational purposes only.
          </p>

          <p>
            While we aim to provide accurate and useful information, we do not
            guarantee that all content is complete, current, or free of errors.
          </p>

          <p>
            Use of the website and its content is at your own risk. Dev Nest
            Guide is not responsible for any loss, damage, or issues that may
            result from relying on information found on the site.
          </p>

          <p>
            The website may include links to third-party websites or services.
            We are not responsible for the content, policies, or practices of
            those third parties.
          </p>

          <p>By using this website, you agree to these terms.</p>
        </div>
      </div>
    </main>
  );
}