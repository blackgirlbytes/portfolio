"use client";

import { useState } from "react";

type ThumbnailProps = {
  src?: string;
  label: string;
  className?: string;
};

export function Thumbnail({ src, label, className = "" }: ThumbnailProps) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`relative block overflow-hidden tint ${className}`}>
      {src && !failed ? (
        // eslint-disable-next-line @next/next/no-img-element -- remote images from many hosts; next/image would need each domain allowlisted
        <img
          src={src}
          alt=""
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span
          aria-hidden
          className="flex h-full w-full items-center justify-center px-6 text-center text-base font-bold text-[var(--flavor-deep)]"
        >
          {label}
        </span>
      )}
    </span>
  );
}
