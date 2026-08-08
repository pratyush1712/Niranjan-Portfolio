import styles from "./SectionHead.module.css";

type SectionHeadProps = {
  tag: string;
  title: string;
  lead?: string;
};

export function SectionHead({ tag, title, lead }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <p className={styles.tag}>{tag}</p>
      <h2 className={styles.title}>{title}</h2>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </div>
  );
}
