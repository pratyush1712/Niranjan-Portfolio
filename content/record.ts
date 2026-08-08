export type RecordEntry = {
  id: string;
  title: string;
  org?: string;
  dates: string;
  bullets?: string[];
};

export const teaching: RecordEntry[] = [
  {
    id: "adie-mentorship",
    title: "Mentors five undergraduate researchers",
    org: "Adie Lab, Cornell University",
    dates: "Current",
    bullets: [
      "Experimental design, imaging workflows, and data interpretation.",
    ],
  },
  {
    id: "smart-lab-mentor",
    title: "Project Mentor",
    org: "SMART Lab, IIT Indore",
    dates: "March 2024 – May 2024",
  },
  {
    id: "vit-bhopal-ta",
    title: "Laboratory Teaching Assistant",
    org: "Tissue Engineering Lab, VIT Bhopal",
    dates: "September 2022 – December 2022",
  },
];

export const leadership: RecordEntry[] = [
  {
    id: "bioengineering-club",
    title: "Co-Founder and Secretary, The Bioengineering Club",
    dates: "2021 – 2022",
    bullets: [
      "Helped establish a student body of 100+ students connecting students with professionals in biomedical fields.",
      "Organized scientific coffee-table forums and the RABVIT '23 bioengineering symposium on contemporary healthcare issues in India.",
    ],
  },
  {
    id: "mit-grandhack",
    title: "MIT GrandHack '25",
    dates: "2025",
    bullets: ["Participant and finalist, Heart Health track."],
  },
  {
    id: "unnat-bharat-abhiyaan",
    title: "Student Member, Unnat Bharat Abhiyaan",
    dates: "2022",
    bullets: ["Volunteered in rural areas of central India on a survey project."],
  },
  {
    id: "mauli-foundation",
    title: "Volunteer, Mauli Foundation",
    dates: "2021 – 2023",
    bullets: [
      "Led outreach for farmers on scientifically validated agricultural practices and soil-treatment methods.",
      "Conducted workshops on nano-formulations for improved seed germination.",
    ],
  },
];

export const featuredProject: RecordEntry = {
  id: "jpads",
  title: "Bio-inspired Global Positioning Systems based Joint Precision Air Drop System",
  org: "VIT Bhopal",
  dates: "October 2022 – April 2023",
  bullets: [
    "Conducted a statistical survey across 20+ healthcare institutions and collaborated with stakeholders to understand healthcare-access problems in rural India.",
    "Designed and modeled 8+ medical-kit payloads based on survey findings.",
    "Collaborated with an interdisciplinary team spanning four majors.",
  ],
};
