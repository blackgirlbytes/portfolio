import { WindowChrome } from "@/components/WindowChrome";
import { contact } from "@/lib/content";
import { flavorStyle } from "@/lib/flavors";

// A small dialog box for getting in touch.
export function Footer() {
  return (
    <footer id="contact" className="px-4 pb-14 pt-14">
      <div
        role="group"
        aria-labelledby="contact-title"
        style={flavorStyle("strawberry")}
        className="mx-auto max-w-md rounded-xl border border-line bg-window shadow-[0_24px_60px_rgba(150,110,190,0.18)]"
      >
        <WindowChrome title="Hiring for DevRel?" titleId="contact-title" />
        <div className="pinstripes rounded-b-[11px] p-5">
          <p className="text-[15px] leading-relaxed">
            Reach me at <span className="font-bold [overflow-wrap:anywhere]">{contact.email}</span> or{" "}
            <span className="whitespace-nowrap font-bold">{contact.phoneDisplay}</span>.
          </p>
          <div className="mt-5 flex flex-wrap justify-end gap-3">
            <a href={contact.phoneHref} className="gel rounded-full px-5 py-1 text-[13px] font-bold">
              Call
            </a>
            <a href={`mailto:${contact.email}`} className="gel gel-flavor throb rounded-full px-5 py-1 text-[13px] font-bold">
              Email me
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
