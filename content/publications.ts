export type PublicationLink = { label: string; href: string };

export type Publication = {
  id: string;
  title: string;
  venue: string;
  year: number;
  status: "under-review" | "published" | "thesis";
  statusLabel: string;
  authors?: string[];
  selfIndex?: number;
  note?: string;
  links: PublicationLink[];
};

export const publications: Publication[] = [
  {
    id: "nebulizers-2025",
    title:
      "Smart Feedback-Controlled Nebulizers in Respiratory Care: A Systematic Review of Clinical Effectiveness and Technological Advances",
    venue: "Under peer review",
    year: 2025,
    status: "under-review",
    statusLabel: "Under peer review",
    authors: [
      "F. K. Alhuthaifi",
      "V. Joshi",
      "N. V. Kulkarni",
      "A. K. Almeida",
      "R. M. Faria",
      "G. Nunes",
      "L. Costa",
      "S. S. R. F. Rosa",
    ],
    selfIndex: 2,
    links: [],
  },
  {
    id: "algae-nanoparticles-2025",
    title: "Algae-Derived Ecologically Sustainable Nanoparticles",
    venue:
      "International Journal for Innovative Research in Multidisciplinary Field (IJIRMF)",
    year: 2025,
    status: "published",
    statusLabel: "Published",
    authors: [
      "Supriya Ratnaparkhe",
      "Aaditi Tamhane",
      "Ayush Nagar",
      "Niranjan Kulkarni",
      "Nilabha Mukherjea",
      "Milind Ratnaparkhe",
    ],
    selfIndex: 3,
    note: "DOI: 10.2015/IJIRMF/202510019 · Paper ID: IJIRMF202510019",
    links: [
      {
        label: "PDF",
        href: "https://www.ijirmf.com/wp-content/uploads/IJIRMF202510019-min.pdf",
      },
    ],
  },
  {
    id: "soybean-znp-thesis-2024",
    title:
      "Effect on Soybean (Glycine max) Germination of Green Synthesized Zinc Oxide Nanoparticles using Garlic (Allium sativum) Extract",
    venue:
      "Undergraduate thesis, VIT Bhopal University, School of Biosciences, Engineering & Technology",
    year: 2024,
    status: "thesis",
    statusLabel: "Undergraduate thesis",
    links: [],
  },
];
