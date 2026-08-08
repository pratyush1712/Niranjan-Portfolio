import { profile } from "@/content/profile";
import styles from "./FooterCTA.module.css";

export function FooterCTA() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <h2 className={styles.heading}>Get in touch</h2>
        <p className={styles.line}>
          Reach out about OCT, neuroimaging, or biomedical device research.
        </p>
        <div className={styles.links}>
          <a className={styles.link} href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <a
            className={styles.link}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a className={styles.link} href={profile.cvHref} download>
            Download CV
          </a>
          <span className={styles.location}>{profile.location}</span>
        </div>
      </div>
    </footer>
  );
}
