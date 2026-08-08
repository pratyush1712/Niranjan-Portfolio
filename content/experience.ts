export type Experience = {
  id: string;
  role: string;
  org: string;
  dates: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    id: "adie-lab",
    role: "Research Technician",
    org: "Adie Lab, Cornell University",
    dates: "July 2025 – Present",
    bullets: [
      "Analyze depth-dependent OCT A-line profiles to investigate how scattering-driven contrast varies across brain regions and what structural features it represents.",
      "Established and lead small-animal neuroimaging workflows for 5xFAD Alzheimer's and GL261 glioblastoma models, including IACUC protocol development and execution.",
      "Performed and optimized 20+ cranial-window implantation surgeries for longitudinal in vivo brain imaging.",
      "Conduct ex vivo 1300 nm OCT experiments examining regional structural differences and signal variability in white and gray matter.",
      "Implemented dispersion compensation and Fourier-domain reconstruction to improve depth-resolved OCT signal consistency.",
      "Established cryosectioning, Nissl staining, and H&E workflows for OCT–histology comparison.",
      "Mentor five undergraduate researchers on experimental design, imaging workflows, and data interpretation.",
      "Contribute biological validation and experimental-pipeline design to ultra-deep OCT development.",
    ],
  },
  {
    id: "touchdown-medtech",
    role: "Design Engineer",
    org: "Touchdown MedTech, Cornell University",
    dates: "August 2024 – May 2025",
    bullets: [
      "Collaborated with Cornell Engineering and Weill Cornell Medicine on a novel device for columnar brain biopsy.",
      "Created 50+ design prototypes in Autodesk Fusion 360 and used iterative AGILE workflows for testing.",
      "Maintained documentation aligned with FDA CFR 820 and explored FDA 510(k) submission strategies.",
      "Project received the 2025 Cornell M.Eng. Design Award for Engineering Excellence.",
    ],
  },
  {
    id: "smart-lab-iit-indore",
    role: "Undergraduate Researcher",
    org: "SMART Lab, Department of Physics, IIT Indore",
    dates: "June 2023 – June 2024",
    bullets: [
      "Investigated green-synthesized ZnO nanoparticles as biocompatible agents for imaging and therapy.",
      "Characterized nanoparticle scattering and absorption to study structure–function relationships relevant to imaging contrast.",
      "Conducted soybean germination and oxidative-stress studies.",
      "Co-authored a senior thesis summarizing experimental outcomes and analytical methods.",
    ],
  },
  {
    id: "rapture-biotech",
    role: "Research Trainee",
    org: "Rapture Biotech, Mumbai",
    dates: "August 2022 – September 2022",
    bullets: [
      "Trained in MIC and ELISA-based drug concentration detection.",
      "Learned laboratory safety protocols and Good Lab Practices (GLPs).",
      "Gained exposure to upstream and downstream cell-culture processes.",
    ],
  },
];
