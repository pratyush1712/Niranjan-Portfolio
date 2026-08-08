import { IlluminationToggle } from "@/components/IlluminationToggle";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <header className={styles.topBar}>
        <div className={`wrap ${styles.topBarInner}`}>
          <a className={styles.wordmark} href="#top">
            Niranjan V. Kulkarni
          </a>
          <div className={styles.topActions}>
            <IlluminationToggle />
            <a
              className={styles.cvLink}
              href="/cv/niranjan-vinay-kulkarni-academic-cv.pdf"
            >
              CV
            </a>
          </div>
        </div>
      </header>

      <section id="top" className={`wrap ${styles.hero}`}>
        <p className={styles.eyebrow}>
          Biomedical optics · Optical coherence tomography · Neuroimaging
        </p>
        <h1>Niranjan Vinay Kulkarni</h1>
        <p className={styles.lead}>
          I study how optical coherence tomography signals relate to tissue
          structure in the brain, combining quantitative signal analysis,
          neuroimaging workflows, and biological validation.
        </p>
        <div className={styles.actions}>
          <a
            className={styles.primaryAction}
            href="/cv/niranjan-vinay-kulkarni-academic-cv.pdf"
          >
            Download CV
          </a>
          <a
            className={styles.secondaryAction}
            href="https://www.linkedin.com/in/niranjan-kulkarni-95b5a4198/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className={`wrap ${styles.scaffoldNote}`} aria-label="Build status">
        <span>SCaffold ready</span>
        <p>
          The framework, design tokens, fonts, theme initialization, CV asset,
          linting, and deployment-ready project structure are in place. The
          implementation agent should build the full portfolio from
          <code> content/portfolio-content.md</code> and the files in
          <code> design-system/</code>.
        </p>
      </section>
    </main>
  );
}
