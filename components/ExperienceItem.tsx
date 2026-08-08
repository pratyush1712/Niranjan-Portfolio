import type { Experience } from "@/content/experience";
import styles from "./ExperienceItem.module.css";

export function ExperienceItem({ item }: { item: Experience }) {
  return (
    <li className={styles.item}>
      <div className={styles.meta}>
        <span className={styles.dates}>{item.dates}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.role}>{item.role}</h3>
        <p className={styles.org}>{item.org}</p>
        <ul className={styles.bullets}>
          {item.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
