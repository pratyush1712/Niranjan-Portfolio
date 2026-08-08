import type { Education } from "@/content/education";
import styles from "./EducationCard.module.css";

export function EducationCard({ item }: { item: Education }) {
  return (
    <article className={styles.card}>
      <p className={styles.dates}>{item.dates}</p>
      <h3 className={styles.degree}>{item.degree}</h3>
      <p className={styles.institution}>{item.institution}</p>
      <ul className={styles.coursework}>
        {item.coursework.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
    </article>
  );
}
