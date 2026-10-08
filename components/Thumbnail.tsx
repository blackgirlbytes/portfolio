"use client";

import { useState } from "react";
import type { Accent } from "@/lib/content";

const fallback: Record<Accent, string> = {
  terra: "from-terra-soft to-marigold-soft text-terra-deep",
  marigold: "from-marigold-soft to-terra-soft text-marigold-deep",
  moss: "from-moss-soft to-marigold-soft text-moss",
  plum: "from-plum-soft to-terra-soft text-plum",
};

type ThumbnailProps = {
  src?: string;
  label: string;
  accent: Accent;
  className?: string;
};

export function Thumbnail({ src, label, accent, className = "" }: ThumbnailProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`relative block overflow-hidden bg-sand/40 ${className}`}>
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element -- remote images from many hosts; next/image would need each domain allowlisted
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      ) : (
        <span
          aria-hidden
          className={`flex h-full w-full items-center justify-center bg-gradient-to-br px-6 text-center font-serif text-xl ${fallback[accent]}`}
        >
          {label}
        </span>
      )}
    </span>
  );
}
