// components/Contact.tsx
import FadeIn from "@/components/FadeIn";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <FadeIn animClass="fade-up">
        <h2 className={styles.sectionLabel}>Contact</h2>
        <p className={styles.heading}>Start a conversation.</p>
        <p className={styles.sub}>
          Tell us about your challenge — we&apos;ll respond within 24 hours.
        </p>
        <div className={styles.actions}>
          <a href="mailto:hello@solvix.co" className={styles.emailLink}>
            hello@solvix.co
          </a>
          <a href="/deck.pdf" download className={styles.deckButton}>
            Download deck
          </a>
        </div>
        <p className={styles.footer}>
          © 2026 Solvix. All rights reserved.
        </p>
      </FadeIn>
    </section>
  );
}
