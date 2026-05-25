import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section id="top" className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div className={styles.intro}>
            <p className={styles.greeting}>hello there</p>
            <p className={styles.brandLine}>
              Analytics studio. Driven by clarity. Built for the people who
              decide.
            </p>
          </div>
          <div className={styles.meta}>
            <a href="mailto:hello@solvix.co" className={styles.email}>
              hello@solvix.co
            </a>
            <p className={styles.location}>
              Modena <span aria-hidden="true">·</span> Est. 2026 ©
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
