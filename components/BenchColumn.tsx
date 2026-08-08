import type { BenchGroup } from "@/content/skills";
import styles from "./BenchColumn.module.css";

export function BenchColumn({ group }: { group: BenchGroup }) {
  return (
    <div className={styles.column}>
      <p className={styles.heading}>{group.heading}</p>
      <ul className={styles.list}>
        {group.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
