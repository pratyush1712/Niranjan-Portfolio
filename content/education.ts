export type Education = {
  id: string;
  degree: string;
  institution: string;
  dates: string;
  coursework: string[];
};

export const education: Education[] = [
  {
    id: "cornell-meng",
    degree: "M.Eng. Biomedical Engineering",
    institution: "Cornell University",
    dates: "August 2024 – May 2025",
    coursework: ["Biomedical Optics", "Neurotechnology", "Neurophysiology"],
  },
  {
    id: "vit-btech",
    degree: "B.Tech. Bioengineering",
    institution: "Vellore Institute of Technology",
    dates: "August 2020 – May 2024",
    coursework: [
      "Computational Biology and Analytics",
      "Biosignals and Image Processing",
      "Cancer Biology",
      "Python Programming",
      "Immune Engineering",
    ],
  },
];
