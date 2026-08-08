export type Thrust = {
  id: string;
  /** Only set when a real, CV-supported wavelength exists. Drives the channel colour. */
  wavelengthNm?: 1300;
  /** Neutral mono label used instead of a fabricated wavelength colour. */
  domainLabel: string;
  title: string;
  summary: string;
  evidence: string[];
  figure: "oct" | "neuroimaging";
  figureCaption: string;
  whereItGoes: string;
};

export const thrusts: Thrust[] = [
  {
    id: "quantitative-oct",
    wavelengthNm: 1300,
    domainLabel: "1300 nm OCT",
    title: "Quantitative OCT of brain tissue",
    summary:
      "Analyzing depth-dependent OCT A-line profiles to understand how scattering-driven contrast varies across brain regions and what structural features the signal represents.",
    evidence: [
      "Conducts ex vivo brain imaging using 1300 nm OCT.",
      "Studies region-wise structural differences, including white matter versus gray matter.",
      "Implements dispersion compensation and Fourier-domain reconstruction to improve depth-resolved signal consistency.",
      "Investigates relationships between scattering behavior and underlying tissue structure.",
    ],
    figure: "oct",
    figureCaption:
      "Illustrative swept-source OCT sample arm at 1300 nm, imaging ex vivo brain tissue.",
    whereItGoes:
      "Relate quantitative OCT signal behavior to underlying tissue structure and regional differences in the brain.",
  },
  {
    id: "in-vivo-neuroimaging",
    domainLabel: "In vivo / ex vivo workflow",
    title: "In vivo neuroimaging and biological validation",
    summary:
      "Builds experimental workflows that connect optical imaging with small-animal disease models and histological ground truth.",
    evidence: [
      "Established and leads the lab's small-animal neuroimaging model workflow.",
      "Rewrote and executes IACUC protocols for 5xFAD Alzheimer's and GL261 glioblastoma models.",
      "Performed and optimized more than 20 cranial-window implantation surgeries for longitudinal in vivo imaging.",
      "Established cryosectioning, Nissl staining, and H&E staining workflows for OCT–histology comparison.",
      "Contributes biological validation and experimental-pipeline design to ultra-deep OCT development.",
    ],
    figure: "neuroimaging",
    figureCaption:
      "Illustrative cranial-window imaging workflow: surgery, longitudinal OCT, and histological validation.",
    whereItGoes:
      "Ground optical signal behavior in disease-model biology and histological ground truth, not signal analysis alone.",
  },
];
