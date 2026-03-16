import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
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
      <head>

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FBCSYKF0J8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FBCSYKF0J8');
            `,
          }}
        />

        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4565007159817590"
          crossOrigin="anonymous"
        ></script>

      </head>

      <body className="bg-black text-white">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}