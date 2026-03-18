import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata = {
  icons: {
    icon: "/favicon_refined.ico",
  },
  title: "Dev Nest Guide",
  description: "Beginner-friendly coding tutorials and error explanations.",
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