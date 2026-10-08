import { candyStyle } from "@/lib/flavors";

// Title bar with the three candy buttons; purely decorative apart from the title.
export function WindowChrome({ title, titleId }: { title: string; titleId?: string }) {
  return (
    <div className="chrome relative flex h-8 items-center rounded-t-[11px] border-b border-line px-3">
      <span aria-hidden className="flex gap-2">
        <span className="candy h-3.5 w-3.5 rounded-full" style={candyStyle("strawberry")} />
        <span className="candy h-3.5 w-3.5 rounded-full" style={candyStyle("butter")} />
        <span className="candy h-3.5 w-3.5 rounded-full" style={candyStyle("lime")} />
      </span>
      <span id={titleId} className="absolute inset-x-20 truncate text-center text-[13px] font-bold">
        {title}
      </span>
    </div>
  );
}
