// components/Services.tsx
import { services } from "@/data/services";
import FadeIn from "@/components/FadeIn";
import styles from "./Services.module.css";

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <FadeIn animClass="slide-left">
        <div className={styles.header}>
          <h2 className={styles.sectionLabel}>Services</h2>
          <p className={styles.sectionTagline}>
            Four practice areas, one integrated approach.
          </p>
        </div>
      </FadeIn>
      <div className={styles.grid}>
        {services.map((service, i) => (
          <FadeIn key={service.number} delay={i * 80} animClass="fade-up">
            <div className={styles.card}>
              <span className={styles.number}>{service.number}</span>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
              <ul className={styles.caps}>
                {service.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
