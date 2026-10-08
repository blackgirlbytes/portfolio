import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });

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
  themeColor: "#faf6ee",
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
