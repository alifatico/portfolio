import Heading from "./Heading";
import styles from "./CaseStudyCard.module.css";
import type { Project, Metric } from "@/data/projects";

function TypographicCover({ sector, title }: { sector: string; title: string }) {
  const letter = title.charAt(0).toUpperCase();
  return (
    <div className={styles.cover} aria-hidden="true">
      <div className={styles.coverInner}>
        <span className={styles.coverLetter}>{letter}</span>
        <span className={styles.coverSector}>{sector}</span>
      </div>
    </div>
  );
}

function MetricRow({ metrics }: { metrics: Metric[] }) {
  return (
    <dl className={styles.metrics}>
      {metrics.map((m) => (
        <div key={m.label} className={styles.metric}>
          <dt className={styles.metricLabel}>{m.label}</dt>
          <dd className={styles.metricValue}>
            {m.delta === "positive" && (
              <span className={styles.glyph} aria-label="positive change">
                ▲{" "}
              </span>
            )}
            {m.delta === "negative" && (
              <span className={styles.glyph} aria-label="negative change">
                ▼{" "}
              </span>
            )}
            {m.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export default function CaseStudyCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <TypographicCover sector={project.sector} title={project.title} />
      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.sector}>{project.sector}</span>
          <span className={styles.year}>{project.year}</span>
        </div>
        <Heading as="h3" variant="medium" className={styles.title}>
          {project.title}
        </Heading>
        <p className={styles.description}>{project.description}</p>
        <p className={styles.platform}>{project.platform}</p>
        <MetricRow metrics={project.metrics} />
        <ul className={styles.services}>
          {project.services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <a href="#" className={styles.cta} aria-label={`Case study: ${project.title}`}>
          Case Study <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
