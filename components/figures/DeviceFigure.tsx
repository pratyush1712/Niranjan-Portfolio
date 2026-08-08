export function DeviceFigure() {
  return (
    <svg
      viewBox="0 0 320 200"
      role="img"
      aria-label="Concept schematic of a dual-cannula columnar brain biopsy device: an outer cannula protects surrounding tissue while an inner cannula collects an intact columnar tissue sample."
      focusable="false"
    >
      <g fill="none" stroke="var(--rule)" strokeWidth="1">
        <rect x="60" y="24" width="60" height="130" rx="6" />
        <rect x="76" y="10" width="28" height="150" rx="4" />
      </g>
      <rect
        x="86"
        y="60"
        width="8"
        height="70"
        rx="2"
        fill="var(--tint-1300)"
        stroke="var(--w1300)"
        strokeWidth="1.25"
      />
      <g
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="8"
        textAnchor="start"
      >
        <text x="130" y="30">Outer cannula</text>
        <text x="130" y="42" fill="var(--muted)" fontSize="7.5">
          protects healthy tissue
        </text>
        <text x="130" y="72">Inner cannula</text>
        <text x="130" y="84" fill="var(--muted)" fontSize="7.5">
          collects columnar sample
        </text>
        <text x="130" y="114" fill="var(--w1300)">Columnar tissue core</text>
      </g>
      <g stroke="var(--rule)" strokeWidth="1">
        <line x1="120" y1="24" x2="128" y2="30" />
        <line x1="104" y1="66" x2="128" y2="76" />
        <line x1="94" y1="95" x2="128" y2="112" />
      </g>
    </svg>
  );
}
