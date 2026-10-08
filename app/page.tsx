import { Community } from "@/components/Community";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Highlights } from "@/components/Highlights";
import { Section } from "@/components/Section";
import { Skills } from "@/components/Skills";
import { WorkTabs } from "@/components/WorkTabs";
import { highlights, workTabs } from "@/lib/content";
import { highlightsWithThumbnails, withThumbnails } from "@/lib/thumbnails";

export default async function Home() {
  const [tabs, featured] = await Promise.all([withThumbnails(workTabs), highlightsWithThumbnails(highlights)]);

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

        <Section id="skills" index="01" eyebrow="Skill sets" title="What I bring to a team" accent="terra">
          <Skills />
        </Section>

        <Section id="highlights" index="02" eyebrow="Featured work" title="Career highlights" accent="marigold">
          <Highlights items={featured} />
        </Section>

        <Section
          id="work"
          index="03"
          eyebrow="Portfolio"
          title="My work"
          intro="Pick a category. Every card links to the published piece."
          accent="plum"
        >
          <WorkTabs tabs={tabs} />
        </Section>

        <Section id="community" index="04" eyebrow="Community" title="Communities I build" accent="moss">
          <Community />
        </Section>
      </main>

      <Footer />
    </>
  );
}
