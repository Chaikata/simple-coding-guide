import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Dev Nest Guide",
  description:
    "Read the privacy policy for Dev Nest Guide, including information about analytics, cookies, and website usage.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black px-10 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-4 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="px-2 text-gray-600">/</span>
          <span className="text-gray-500">Privacy Policy</span>
        </nav>

        <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>

        <div className="space-y-6 leading-8 text-gray-300">
          <p>
            Dev Nest Guide may collect limited usage data in order to understand
            traffic, improve site performance, and enhance the user experience.
          </p>

          <p>
            This website may use cookies and similar technologies through
            analytics and third-party services. These technologies help measure
            activity on the site and understand how visitors use the content.
          </p>

          <p>
            We do not sell personal information. Any data collected is used for
            site improvement, analytics, security, and general business
            operations.
          </p>

          <p>
            By using this website, you agree to the use of cookies and similar
            technologies as described in this policy.
          </p>

          <p>
            This privacy policy may be updated from time to time to reflect
            operational, legal, or service changes.
          </p>
        </div>
      </div>
    </main>
  );
}