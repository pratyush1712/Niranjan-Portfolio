import { device } from "@/content/device";
import { DeviceFigure } from "./figures/DeviceFigure";
import styles from "./SystemCase.module.css";

export function SystemCase() {
  return (
    <article className={styles.case}>
      <div className={styles.figureCol}>
        <div className={styles.figureCard}>
          <DeviceFigure />
        </div>
        <p className={styles.figureCaption}>
          Fig. 1 — {device.figureCaption}
        </p>
      </div>
      <div className={styles.contentCol}>
        <p className={styles.meta}>
          {device.role} · {device.dates}
        </p>
        <h3 className={styles.title}>{device.title}</h3>
        <p className={styles.paragraph}>{device.summary}</p>
        <p className={styles.paragraph}>{device.outcome}</p>
        <table className={styles.specTable}>
          <tbody>
            {device.specs.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                <td>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.expo}>
          Exhibited as &ldquo;{device.expo.exhibit}&rdquo; at the{" "}
          {device.expo.name}, {device.expo.year}, with{" "}
          {device.expo.team.join(", ")}.
        </p>
        <a
          className={styles.sourceLink}
          href={device.sourceHref}
          target="_blank"
          rel="noreferrer"
        >
          Cornell Engineering project source
        </a>
      </div>
    </article>
  );
}
