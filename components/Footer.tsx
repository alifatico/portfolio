import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <Section id="footer" as="footer" className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.col}>
            <p className={styles.colLabel}>Contact</p>
            <a href="mailto:hello@solvix.co" className={styles.link}>
              hello@solvix.co
            </a>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>Newsletter</p>
            <a
              href="mailto:hello@solvix.co?subject=Subscribe%20to%20Solvix%20notes"
              className={styles.link}
            >
              Subscribe by email
            </a>
          </div>
          <div className={styles.col}>
            <p className={styles.colLabel}>Elsewhere</p>
            <a
              href="https://www.linkedin.com/"
              rel="noopener noreferrer"
              target="_blank"
              className={styles.link}
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className={styles.legal}>© 2026 Solvix. All rights reserved.</p>
      </Container>
    </Section>
  );
}
