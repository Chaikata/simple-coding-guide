import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://devnestguide.com"),
  title: {
    default: "Dev Nest Guide – Learn Coding with Tutorials, Exercises & Debug Help",
    template: "%s | Dev Nest Guide",
  },
  description:
    "Learn coding with beginner-friendly tutorials, coding exercises, and real-world debugging help across JavaScript, Python, SQL and more.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-white">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FBCSYKF0J8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FBCSYKF0J8');
          `}
        </Script>

        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4565007159817590"
          crossOrigin="anonymous"
        />

        <div className="flex min-h-screen flex-col bg-zinc-800">
          <Navbar />
          <main className="flex-1 bg-zinc-800">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}