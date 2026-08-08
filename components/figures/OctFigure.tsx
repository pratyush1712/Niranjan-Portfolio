export function OctFigure() {
  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label="Illustrative swept-source OCT layout: a 1300 nm source splits into a reference arm and a sample arm imaging ex vivo brain tissue, recombining at a detector."
      focusable="false"
    >
      <g fill="none" stroke="var(--rule)" strokeWidth="1">
        <rect x="10" y="16" width="90" height="34" rx="2" />
        <rect x="220" y="12" width="90" height="34" rx="2" />
        <rect x="127" y="138" width="86" height="32" rx="2" />
        <rect x="10" y="124" width="90" height="46" rx="4" />
        <rect x="136" y="76" width="48" height="24" rx="2" transform="rotate(45 160 88)" />
      </g>
      <g stroke="var(--w1300)" strokeWidth="1.25" fill="none">
        <line x1="100" y1="33" x2="147" y2="80" />
        <line x1="160" y1="98" x2="160" y2="138" />
        <line x1="173" y1="80" x2="220" y2="29" />
        <line x1="147" y1="96" x2="100" y2="147" />
      </g>
      <g
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="8.5"
        textAnchor="middle"
      >
        <text x="55" y="36">1300 nm source</text>
        <text x="265" y="32">Reference mirror</text>
        <text x="170" y="158">Detector</text>
        <text x="55" y="144">Sample arm</text>
        <text x="55" y="156">ex vivo brain tissue</text>
        <text x="160" y="70" fontSize="7.5" fill="var(--muted)">
          beamsplitter
        </text>
      </g>
    </svg>
  );
}
