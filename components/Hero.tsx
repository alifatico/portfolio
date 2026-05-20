// components/Hero.tsx
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.label}>Consulting Agency</p>
        <h1 className={styles.heading}>Solvix</h1>
        <p className={styles.tagline}>
          We turn complex data into<br />decisions that move markets.
        </p>
        <div className={styles.ctas}>
          <a href="#work" className={styles.ctaPrimary}>See our work</a>
          <a href="#contact" className={styles.ctaSecondary}>Get in touch</a>
        </div>
      </div>
      <div className={styles.accent} aria-hidden="true">
        <div className={styles.orb} />
        <div className={styles.pill1} />
        <div className={styles.pill2} />
        <div className={styles.circle} />
      </div>
    </section>
  );
}
