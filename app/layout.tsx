import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import { contact } from "@/lib/content";
import { profile, SITE_URL } from "@/lib/llms";
import "./globals.css";

const nunitoSans = Nunito_Sans({ subsets: ["latin"], variable: "--font-nunito-sans", display: "swap" });

const title = "Rizel Scarlett — Head of Developer Relations";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description:
    "Rizel Scarlett is Head of Developer Relations at Entire: a DevRel leader, developer advocate, and open source contributor focused on AI coding agents, the Model Context Protocol (MCP), and agentic engineering. Portfolio of writing, conference talks, podcasts, live streams, and open source work across GitHub, Block (goose), and Entire.",
  keywords: [
    "Rizel Scarlett",
    "blackgirlbytes",
    "Head of Developer Relations",
    "Developer Relations",
    "DevRel",
    "developer advocate",
    "developer advocacy",
    "AI coding agents",
    "agentic engineering",
    "Model Context Protocol",
    "MCP",
    "goose",
    "GitHub Copilot",
    "Entire",
    "technical writing",
    "conference speaker",
  ],
  authors: [{ name: profile.name, url: contact.githubHref }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: SITE_URL,
    types: {
      "text/markdown": [{ url: `${SITE_URL}llms.txt`, title: "LLM-readable profile and work index" }],
    },
  },
  openGraph: {
    title,
    description: profile.tagline,
    url: SITE_URL,
    siteName: "Rizel Scarlett",
    type: "profile",
    username: "blackgirlbytes",
  },
  twitter: {
    card: "summary",
    title,
    description: profile.tagline,
    site: "@blackgirlbytes",
    creator: "@blackgirlbytes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffe6f2",
};

const personId = `${SITE_URL}#person`;
const websiteId = `${SITE_URL}#website`;
const profilePageId = `${SITE_URL}#profile-page`;

const sameAs = profile.profiles.filter(([label]) => label !== "Portfolio").map(([, href]) => href);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      jobTitle: "Head of Developer Relations",
      description: profile.summary,
      disambiguatingDescription: profile.tagline,
      url: SITE_URL,
      email: `mailto:${contact.email}`,
      worksFor: { "@type": "Organization", name: "Entire", url: "https://entire.io" },
      hasOccupation: {
        "@type": "Occupation",
        name: "Head of Developer Relations",
        description:
          "Leading developer relations, developer advocacy, and community for Entire's AI developer tools.",
        skills: [
          "Developer Relations",
          "Developer advocacy",
          "Technical writing",
          "Conference speaking",
          "AI coding agents",
          "Model Context Protocol (MCP)",
        ],
      },
      alumniOf: [
        {
          "@type": "Organization",
          name: "Block",
          description: "Developer advocate for goose, Block's open source AI agent, and TBD.",
        },
        {
          "@type": "Organization",
          name: "GitHub",
          description: "Developer advocate for GitHub Copilot, GitHub Actions, and open source.",
        },
      ],
      knowsAbout: [
        ...profile.topics,
        "BlackRel, a community for Black Developer Relations professionals",
      ],
      sameAs,
      mainEntityOfPage: { "@id": profilePageId },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}#blackrel`,
      name: "BlackRel",
      description: "A community for Black Developer Relations professionals, founded by Rizel Scarlett.",
      founder: { "@id": personId },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: "Rizel Scarlett — Developer Relations portfolio",
      inLanguage: "en",
      publisher: { "@id": personId },
    },
    {
      "@type": "ProfilePage",
      "@id": profilePageId,
      url: SITE_URL,
      name: title,
      description: profile.tagline,
      inLanguage: "en",
      mainEntity: { "@id": personId },
      isPartOf: { "@id": websiteId },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={nunitoSans.variable}>
      <body className="font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
