import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { WorkTabs } from "@/components/WorkTabs";
import { workTabs } from "@/lib/content";
import { withThumbnails } from "@/lib/thumbnails";

export default async function Home() {
  const tabs = await withThumbnails(workTabs);

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-hot focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white"
      >
        Skip to work
      </a>

      <main>
        <Hero />
        <WorkTabs tabs={tabs} />
      </main>

      <Footer />
    </>
  );
}
