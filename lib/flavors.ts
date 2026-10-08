import type { CSSProperties } from "react";

// Pastel takes on the candy-colored iMac G3 lineup.
export const flavors = {
  strawberry: { flavor: "#ffa8cf", deep: "#d4558f", soft: "#ffe6f1" },
  grape: { flavor: "#cdb0ff", deep: "#8059d6", soft: "#f1e9ff" },
  lime: { flavor: "#b3e8a6", deep: "#4c9a4f", soft: "#e9f8e5" },
  blueberry: { flavor: "#a6cfff", deep: "#3f7fd1", soft: "#e6f1ff" },
  tangerine: { flavor: "#ffc9a3", deep: "#d07a3f", soft: "#fff0e4" },
  bondi: { flavor: "#9fe3dc", deep: "#2b9b92", soft: "#e1f7f5" },
  butter: { flavor: "#ffe49a", deep: "#c79a22", soft: "#fff7dc" },
} as const;

export type Flavor = keyof typeof flavors;

export function flavorStyle(name: Flavor): CSSProperties {
  const { flavor, deep, soft } = flavors[name];
  return { "--flavor": flavor, "--flavor-deep": deep, "--flavor-soft": soft } as CSSProperties;
}

export function candyStyle(name: Flavor): CSSProperties {
  return { "--candy": flavors[name].flavor } as CSSProperties;
}
