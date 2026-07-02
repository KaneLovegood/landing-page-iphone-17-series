import type { ColorFinish } from "../types";

export const COLOR_FINISHES: ColorFinish[] = [
  {
    id: "natural",
    name: "Natural Titanium",
    hex: "#b2aba1",
    filterClass: "filter-natural",
    glowClass: "from-amber-500/10 via-yellow-600/5 to-transparent",
  },
  {
    id: "black",
    name: "Space Black",
    hex: "#3c3c3d",
    filterClass: "filter-space-black",
    glowClass: "from-zinc-800/20 via-zinc-900/10 to-transparent",
  },
  {
    id: "silver",
    name: "White Titanium",
    hex: "#e5e6e1",
    filterClass: "filter-silver",
    glowClass: "from-slate-200/10 via-zinc-400/5 to-transparent",
  },
  {
    id: "blue",
    name: "Cobalt Titanium",
    hex: "#2f394d",
    filterClass: "filter-deep-blue",
    glowClass: "from-blue-600/15 via-indigo-900/5 to-transparent",
  },
];
