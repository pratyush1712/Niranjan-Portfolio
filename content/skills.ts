export type BenchGroup = {
  id: string;
  heading: string;
  items: string[];
};

export const benchGroups: BenchGroup[] = [
  {
    id: "optical-imaging",
    heading: "Optical imaging",
    items: [
      "Optical Coherence Tomography (OCT)",
      "Optical Coherence Microscopy (OCM)",
      "Confocal microscopy",
    ],
  },
  {
    id: "data-analysis",
    heading: "Data analysis",
    items: ["MATLAB", "Python", "ImageJ"],
  },
  {
    id: "signal-processing",
    heading: "Signal processing",
    items: [
      "Fourier-domain reconstruction",
      "Dispersion compensation",
      "Phase stability",
      "Depth-dependent signal analysis",
    ],
  },
  {
    id: "instrumentation-design",
    heading: "Instrumentation and design",
    items: [
      "Interferometric alignment",
      "Optical assembly",
      "3D CAD",
      "Autodesk Fusion 360",
      "SolidWorks",
    ],
  },
  {
    id: "materials-characterization",
    heading: "Materials characterization",
    items: ["XRD", "SEM", "UV-Vis", "DLS / optical-property analysis"],
  },
  {
    id: "software",
    heading: "Software",
    items: ["LabVIEW", "Autodesk Fusion 360", "OriginPro"],
  },
  {
    id: "biological-methods",
    heading: "Biological methods",
    items: [
      "Cranial-window implantation",
      "Ex vivo brain extraction",
      "Tissue fixation",
      "Cryosectioning",
      "Nissl staining",
      "H&E staining",
      "GL261 tumor implantation",
      "In vitro neuronal culture",
    ],
  },
];
