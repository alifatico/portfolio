import Image from "next/image";
import Heading from "./Heading";
import styles from "./CaseStudyCard.module.css";
import type { Project, Metric } from "@/data/projects";

function PhotographicCover({ src }: { src: string }) {
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

export default function CaseStudyCard({
  project,
  letter,
}: {
  project: Project;
  letter?: string;
}) {
  return (
    <article className={styles.card}>
      <PhotographicCover src={project.image} />
      <div className={styles.body}>
        {letter && (
          <p className={styles.letter} aria-hidden="true">
            ({letter})
          </p>
        )}
        <p className={styles.partnerLabel}>Partner</p>
        <p className={styles.partner}>{project.partner}</p>
        <dl className={styles.meta}>
          <div className={styles.metaItem}>
            <dt className={styles.metaLabel}>Sector</dt>
            <dd className={styles.metaValue}>{project.sector}</dd>
          </div>
          <div className={styles.metaItem}>
            <dt className={styles.metaLabel}>Year</dt>
            <dd className={styles.metaValue}>{project.year}</dd>
          </div>
          <div className={styles.metaItem}>
            <dt className={styles.metaLabel}>Stack</dt>
            <dd className={styles.metaValue}>{project.platform}</dd>
          </div>
        </dl>
        <Heading as="h3" variant="medium" className={styles.title}>
          {project.title}
        </Heading>
        <MetricRow metrics={project.metrics} />
        <ul className={styles.services}>
          {project.services.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <a
          href="#"
          className={styles.cta}
          aria-label={`Case study: ${project.title}`}
        >
          Explore <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
