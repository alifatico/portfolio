import Image from "next/image";
import Heading from "./Heading";
import styles from "./CaseStudyCard.module.css";
import type { Project, Metric } from "@/data/projects";

function PhotographicCover({ src, title }: { src: string; title: string }) {
  return (
    <div className={styles.cover}>
      <Image
        src={src}
        alt=""
        width={1600}
        height={1200}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className={styles.coverImage}
      />
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
      <PhotographicCover src={project.image} title={project.title} />
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
