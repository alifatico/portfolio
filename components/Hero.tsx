import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <Section id="top" className={styles.hero}>
      <Container>
        <Eyebrow>Consulting Agency</Eyebrow>
        <Heading as="h1" variant="display" className={styles.headline}>
          Strategy and analytics for markets that move.
        </Heading>
        <p className={styles.tagline}>
          We turn complex data into decisions that ship.
        </p>
        <a href="mailto:hello@solvix.co" className={styles.email}>
          hello@solvix.co
        </a>
      </Container>
    </Section>
  );
}
