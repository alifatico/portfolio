// components/Hero.tsx
import Image from "next/image";
import styles from "./Hero.module.css";

const mosaicImages = [
  "https://picsum.photos/seed/solvix-h1/600/450",
  "https://picsum.photos/seed/solvix-h2/600/450",
  "https://picsum.photos/seed/solvix-h3/600/450",
  "https://picsum.photos/seed/solvix-h4/600/450",
];

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

      <div className={styles.mosaic} aria-hidden="true">
        {mosaicImages.map((src, i) => (
          <div key={i} className={`${styles.mosaicCard} ${styles[`card${i}`]}`}>
            <Image
              src={src}
              alt=""
              fill
              sizes="200px"
              className={styles.mosaicImg}
            />
            <div className={styles.mosaicOverlay} />
          </div>
        ))}
        <div className={styles.floatingPill} />
        <div className={styles.floatingDot} />
      </div>
    </section>
  );
}
