// components/Projects.tsx
import Image from "next/image";
import { projects } from "@/data/projects";
import FadeIn from "@/components/FadeIn";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <section id="work" className={styles.section}>
      <FadeIn animClass="slide-left">
        <h2 className={styles.sectionLabel}>Selected Work</h2>
      </FadeIn>
      <div className={styles.list}>
        {projects.map((project, i) => (
          <FadeIn key={i} delay={i * 80} animClass="fade-up">
            <article className={styles.project}>
              <div className={styles.imageWrap}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 960px) 100vw, 900px"
                  className={styles.image}
                />
                <span className={styles.sector}>{project.sector}</span>
              </div>
              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.index}>0{i + 1}</span>
                  <div className={styles.tools}>
                    {project.tools.map((t) => (
                      <span key={t} className={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
                <p className={styles.outcome}>{project.outcome}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
