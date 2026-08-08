import type { RecordEntry } from "@/content/record";
import styles from "./RecordColumn.module.css";

export function RecordColumn({
  heading,
  entries,
}: {
  heading: string;
  entries: RecordEntry[];
}) {
  return (
    <div className={styles.column}>
      <p className={styles.heading}>{heading}</p>
      <ul className={styles.list}>
        {entries.map((entry) => (
          <li key={entry.id} className={styles.row}>
            <div className={styles.rowHead}>
              <h3 className={styles.title}>{entry.title}</h3>
              <span className={styles.dates}>{entry.dates}</span>
            </div>
            {entry.org ? <p className={styles.org}>{entry.org}</p> : null}
            {entry.bullets ? (
              <ul className={styles.bullets}>
                {entry.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
