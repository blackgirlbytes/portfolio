import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { WorkTabs } from "@/components/WorkTabs";
import { workTabs } from "@/lib/content";
import { withThumbnails } from "@/lib/thumbnails";

export default async function Home() {
  const tabs = await withThumbnails(workTabs);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-terra focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main">
        <Hero />

        <Section
          id="work"
          index="01"
          eyebrow="Portfolio"
          title="My work"
          intro="Pick a category. Every card links to the published piece."
          accent="plum"
        >
          <WorkTabs tabs={tabs} />
        </Section>

        <Section id="community" index="02" eyebrow="Community" title="Communities I build" accent="moss">
          <Community />
        </Section>
      </main>

      <Footer />
    </>
  );
}
