import type { Thrust } from "@/content/research";
import { OctFigure } from "./figures/OctFigure";
import { NeuroimagingFigure } from "./figures/NeuroimagingFigure";
import styles from "./ThrustCard.module.css";

const figures = {
  oct: OctFigure,
  neuroimaging: NeuroimagingFigure,
};

export function ThrustCard({ thrust }: { thrust: Thrust }) {
  const Figure = figures[thrust.figure];
  const accent = thrust.wavelengthNm ? "var(--w1300)" : "var(--dim)";

  return (
    <article
      className={styles.card}
      style={{ "--accent": accent } as React.CSSProperties}
    >
      <p className={styles.label}>{thrust.domainLabel}</p>
      <h3 className={styles.title}>{thrust.title}</h3>
      <p className={styles.summary}>{thrust.summary}</p>
      <ul className={styles.evidence}>
        {thrust.evidence.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      <div className={styles.figureWell}>
        <Figure />
      </div>
      <p className={styles.caption}>{thrust.figureCaption}</p>
      <div className={styles.whereItGoes}>
        <p className={styles.whereItGoesLabel}>Where it goes</p>
        <p>{thrust.whereItGoes}</p>
      </div>
    </article>
  );
}
