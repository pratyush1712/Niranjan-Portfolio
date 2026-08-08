import type { Publication } from "@/content/publications";
import styles from "./PubItem.module.css";

function AuthorLine({ publication }: { publication: Publication }) {
  if (!publication.authors) return null;
  return (
    <p className={styles.authors}>
      {publication.authors.map((author, i) => (
        <span key={author}>
          {i === publication.selfIndex ? <strong>{author}</strong> : author}
          {i < publication.authors!.length - 1 ? ", " : ""}
        </span>
      ))}
    </p>
  );
}

export function PubItem({ publication }: { publication: Publication }) {
  return (
    <li className={styles.item}>
      <span className={styles.year}>{publication.year}</span>
      <div className={styles.content}>
        <h3 className={styles.title}>{publication.title}</h3>
        <p className={styles.venue}>{publication.venue}</p>
        <AuthorLine publication={publication} />
        {publication.note ? (
          <p className={styles.note}>{publication.note}</p>
        ) : null}
      </div>
      <div className={styles.linksCol}>
        {publication.links.map((link) => (
          <a
            key={link.href}
            className={styles.linkPill}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label}
          </a>
        ))}
        <span className={styles.chip}>{publication.statusLabel}</span>
      </div>
    </li>
  );
}
