import { profile } from "@/content/profile";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section id="top" className={`wrap ${styles.hero}`}>
      <p className={styles.eyebrow}>{profile.hero.eyebrow}</p>
      <h1>{profile.name}</h1>
      <p className={styles.role}>
        {profile.role} · {profile.location}
      </p>
      <p className={styles.lead}>{profile.hero.thesis}</p>
      <div className={styles.actions}>
        <a className={styles.primaryAction} href={profile.cvHref} download>
          {profile.hero.primaryCta}
        </a>
        <a className={styles.secondaryAction} href="#research">
          {profile.hero.secondaryCta}
        </a>
      </div>
    </section>
  );
}
