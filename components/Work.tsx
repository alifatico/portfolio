// components/Work.tsx
"use client";

import { useState } from "react";
import { roles } from "@/data/roles";
import FadeIn from "@/components/FadeIn";
import styles from "./Work.module.css";

export default function Work() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="work" className={styles.section}>
      <FadeIn>
        <p className={styles.sectionLabel}>Work</p>
      </FadeIn>
      {roles.map((role, i) => (
        <FadeIn key={i} delay={i * 80}>
          <div className={styles.card} onClick={() => toggle(i)}>
            <div className={styles.cardHeader}>
              <div className={styles.meta}>
                <p className={styles.company}>{role.company}</p>
                <p className={styles.title}>{role.title}</p>
                <p className={styles.period}>
                  {role.period} · {role.location}
                </p>
              </div>
              <span
                className={[
                  styles.toggle,
                  openIndex === i ? styles.toggleOpen : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                +
              </span>
            </div>
            <div
              className={[
                styles.body,
                openIndex === i ? styles.bodyOpen : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <p className={styles.summary}>{role.summary}</p>
              <ul className={styles.highlights}>
                {role.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
              <div className={styles.tools}>
                {role.tools.map((t) => (
                  <span key={t} className={styles.tag}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      ))}
    </section>
  );
}
