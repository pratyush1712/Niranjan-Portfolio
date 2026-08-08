export type SpecRow = { label: string; value: string };

export const device = {
  title: "A novel device for columnar brain biopsy",
  role: "Design Engineer — Touchdown MedTech, Cornell University",
  dates: "August 2024 – May 2025",
  summary:
    "Designed and iterated a novel device for columnar brain biopsy in collaboration with Cornell Engineering and Weill Cornell Medicine. The device is a dual-cannula concept designed to collect larger, intact columnar brain-tissue samples while protecting healthy tissue.",
  outcome:
    "Cornell's public showcase reports successful testing and validation indicating increased sample volume and integrity over conventional biopsy approaches.",
  figureCaption:
    "Concept schematic: dual-cannula columnar biopsy device (illustrative, not to scale).",
  specs: [
    { label: "Prototypes built", value: "50+ (Fusion 360, iterative/AGILE)" },
    { label: "Documentation standard", value: "FDA CFR 820" },
    { label: "Regulatory pathway explored", value: "FDA 510(k)" },
    { label: "Recognition", value: "Cornell M.Eng. Design Award for Engineering Excellence, 2025" },
    { label: "Review panel", value: "10+ industry professionals and experts" },
  ] as SpecRow[],
  award: {
    name: "Cornell M.Eng. Design Award for Engineering Excellence",
    date: "May 2025",
  },
  expo: {
    name: "Cornell Engineering Design Expo",
    year: "2025",
    exhibit: "A Novel Device for Conducting Columnar Brain Biopsies",
    team: [
      "Andrew Yang",
      "Lilly Goodwin",
      "Anna Gwozdz",
      "Anna Olivia Humiston",
      "Niranjan Vinay Kulkarni",
    ],
  },
  sourceHref:
    "https://www.engineering.cornell.edu/bme/2025/05/15/innovation-in-action-cornell-m-eng-biomedical-engineers-pitch-prototype-and-partner-for-healthcare-advancement/",
};
