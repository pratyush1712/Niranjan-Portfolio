const steps = [
  ["Cranial-window", "implantation"],
  ["Longitudinal", "in vivo OCT"],
  ["Cryosectioning", "& staining"],
  ["Histology", "comparison"],
];

export function NeuroimagingFigure() {
  return (
    <svg
      viewBox="0 0 320 120"
      role="img"
      aria-label="Illustrative neuroimaging workflow: cranial-window implantation, longitudinal in vivo OCT, cryosectioning and staining, then histology comparison."
      focusable="false"
    >
      <g fill="none" stroke="var(--rule)" strokeWidth="1">
        {steps.map((_, i) => (
          <rect key={i} x={8 + i * 78} y="30" width="66" height="52" rx="2" />
        ))}
      </g>
      <g stroke="var(--w1300)" strokeWidth="1.25">
        {steps.slice(0, -1).map((_, i) => (
          <line
            key={i}
            x1={74 + i * 78}
            y1="56"
            x2={86 + i * 78}
            y2="56"
            markerEnd="url(#arrow)"
          />
        ))}
      </g>
      <defs>
        <marker
          id="arrow"
          markerWidth="6"
          markerHeight="6"
          refX="5"
          refY="3"
          orient="auto"
        >
          <path d="M0,0 L6,3 L0,6 Z" fill="var(--w1300)" />
        </marker>
      </defs>
      <g
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="7.5"
        textAnchor="middle"
      >
        {steps.map((lines, i) => (
          <g key={i}>
            <text x={41 + i * 78} y="53">
              {lines[0]}
            </text>
            <text x={41 + i * 78} y="64">
              {lines[1]}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
