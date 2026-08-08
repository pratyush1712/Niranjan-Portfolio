import { TopBar } from "@/components/TopBar";
import { BeamRail } from "@/components/BeamRail";
import { Hero } from "@/components/Hero";
import { SectionHead } from "@/components/SectionHead";
import { ThrustCard } from "@/components/ThrustCard";
import { SystemCase } from "@/components/SystemCase";
import { PubItem } from "@/components/PubItem";
import { ExperienceItem } from "@/components/ExperienceItem";
import { BenchColumn } from "@/components/BenchColumn";
import { EducationCard } from "@/components/EducationCard";
import { RecordColumn } from "@/components/RecordColumn";
import { FooterCTA } from "@/components/FooterCTA";
import { thrusts } from "@/content/research";
import { publications } from "@/content/publications";
import { experience } from "@/content/experience";
import { education } from "@/content/education";
import { benchGroups } from "@/content/skills";
import { teaching, leadership, featuredProject } from "@/content/record";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <TopBar />
      <BeamRail />
      <main>
        <Hero />

        <section id="research" className={`wrap ${styles.section}`}>
          <SectionHead
            tag="Research"
            title="Current research"
            lead="Biomedical optics and photonics, with a focus on optical coherence tomography, light scattering in biological tissue, and structure-function relationships in the brain."
          />
          <div className={styles.researchGrid}>
            {thrusts.map((thrust) => (
              <ThrustCard key={thrust.id} thrust={thrust} />
            ))}
          </div>
        </section>

        <section id="device" className={`wrap ${styles.section}`}>
          <SectionHead
            tag="Featured system"
            title="Columnar brain biopsy device"
          />
          <SystemCase />
        </section>

        <section id="publications" className={`wrap ${styles.section}`}>
          <SectionHead tag="Publications" title="Selected publications" />
          <ul className={styles.pubList}>
            {publications.map((publication) => (
              <PubItem key={publication.id} publication={publication} />
            ))}
          </ul>
        </section>

        <section id="experience" className={`wrap ${styles.section}`}>
          <SectionHead tag="Experience" title="Research and professional experience" />
          <ul className={styles.experienceList}>
            {experience.map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
          </ul>
        </section>

        <section id="skills" className={`wrap ${styles.section}`}>
          <SectionHead
            tag="Bench capabilities"
            title="Skills"
            lead="Factual capability groups, not proficiency ratings."
          />
          <div className={styles.skillsGrid}>
            {benchGroups.map((group) => (
              <BenchColumn key={group.id} group={group} />
            ))}
          </div>
        </section>

        <section id="education" className={`wrap ${styles.section}`}>
          <SectionHead tag="Education" title="Education" />
          <div className={styles.educationGrid}>
            {education.map((item) => (
              <EducationCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <section id="record" className={`wrap ${styles.section}`}>
          <SectionHead
            tag="Record"
            title="Teaching, mentorship, and leadership"
          />
          <div className={styles.recordGrid}>
            <RecordColumn heading="Teaching & mentorship" entries={teaching} />
            <RecordColumn heading="Leadership & activities" entries={leadership} />
            <RecordColumn heading="Selected project" entries={[featuredProject]} />
          </div>
        </section>
      </main>
      <FooterCTA />
    </>
  );
}
