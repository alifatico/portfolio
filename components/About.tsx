import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import styles from "./About.module.css";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className={styles.grid}>
          <Eyebrow variant="paren">Approach</Eyebrow>
          <div className={styles.content}>
            <Heading as="h2" variant="display" className={styles.statement}>
              Analytics is craft. Decisions are the product.
            </Heading>
            <p className={styles.paragraph}>
              We work where strategy, finance, and operations overlap — turning
              the data that&apos;s already in your business into the answers
              that leadership can act on. Methodology over tools. Clarity over
              dashboards. The number, then the narrative around it.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
