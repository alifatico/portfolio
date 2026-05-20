// components/Contact.tsx
import FadeIn from "@/components/FadeIn";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <FadeIn>
        <h2 className={styles.sectionLabel}>Contact</h2>
        <p className={styles.heading}>Let&apos;s work together.</p>
        <div className={styles.actions}>
          <a href="mailto:enrico.d2324@gmail.com" className={styles.emailLink}>
            enrico.d2324@gmail.com
          </a>
          <a href="/cv.pdf" download className={styles.cvButton}>
            Download CV
          </a>
        </div>
        <p className={styles.footer}>
          © 2026 Enrico Damiani
        </p>
      </FadeIn>
    </section>
  );
}
