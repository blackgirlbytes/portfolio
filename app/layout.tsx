import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito-sans", display: "swap" });

export const metadata: Metadata = {
  title: "Rizel Scarlett — Developer Relations",
  description:
    "Developer Relations portfolio of Rizel Scarlett: published writing, conference talks, open source contributions to goose, podcast appearances, live streams, and community building around AI-powered developer tools.",
  openGraph: {
    title: "Rizel Scarlett — Developer Relations",
    description:
      "Writing, speaking, open source, and community around AI-powered developer tools — all on one page.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffe6f2",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rizel Scarlett",
  jobTitle: "Developer Relations",
  url: "https://www.blackgirlbytes.dev",
  email: "mailto:rizel.bobbsemple137@gmail.com",
  sameAs: ["https://github.com/blackgirlbytes", "https://www.blackgirlbytes.dev"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
