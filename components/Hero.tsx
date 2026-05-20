// components/Hero.tsx
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <p className={styles.label}>Portfolio</p>
      <h1 className={styles.heading}>Enrico Damiani</h1>
      <p className={styles.descriptor}>
        Category Development &amp; Data Analytics — EMEA market intelligence,
        executive reporting, and cross-functional analysis.
      </p>
    </section>
  );
}
