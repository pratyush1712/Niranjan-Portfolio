export function OctFigure() {
  return (
    <svg
      viewBox="0 0 320 180"
      role="img"
      aria-label="Illustrative swept-source OCT layout: a 1300 nm source splits into a reference arm and a sample arm imaging ex vivo brain tissue, recombining at a detector."
      focusable="false"
    >
      <g fill="none" stroke="var(--rule)" strokeWidth="1">
        <rect x="12" y="18" width="86" height="30" rx="2" />
        <rect x="132" y="76" width="56" height="24" rx="2" transform="rotate(45 160 88)" />
        <rect x="230" y="14" width="78" height="26" rx="2" />
        <rect x="132" y="140" width="78" height="30" rx="2" />
        <rect x="12" y="126" width="86" height="44" rx="4" />
      </g>
      <g stroke="var(--w1300)" strokeWidth="1.25" fill="none">
        <line x1="98" y1="33" x2="150" y2="80" />
        <line x1="160" y1="98" x2="160" y2="140" />
        <line x1="172" y1="80" x2="230" y2="27" />
        <line x1="150" y1="96" x2="98" y2="150" />
      </g>
      <g
        fill="var(--ink)"
        fontFamily="var(--font-mono)"
        fontSize="8.5"
        textAnchor="middle"
      >
        <text x="55" y="37">1300 nm source</text>
        <text x="269" y="31">Reference mirror</text>
        <text x="171" y="158">Detector</text>
        <text x="55" y="145">Sample arm</text>
        <text x="55" y="157">ex vivo brain tissue</text>
        <text x="160" y="72" fontSize="7.5" fill="var(--muted)">
          beamsplitter
        </text>
      </g>
    </svg>
  );
}
