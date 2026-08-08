import Link from "next/link";
import { profile } from "@/content/profile";
import { IlluminationToggle } from "./IlluminationToggle";
import styles from "./TopBar.module.css";

const navLinks = [
  { href: "#research", label: "Research" },
  { href: "#device", label: "Work" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function TopBar() {
  return (
    <header className={styles.topBar}>
      <div className={`wrap ${styles.inner}`}>
        <Link href="#top" className={styles.wordmark}>
          Niranjan V. Kulkarni
        </Link>
        <nav className={styles.nav} aria-label="Section navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <IlluminationToggle />
          <a className={styles.cvLink} href={profile.cvHref} download>
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
