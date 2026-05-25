import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import styles from "./FutureVision.module.css";

export default function FutureVision() {
  return (
    <Section id="future-vision">
      <Container>
        <div className={styles.header}>
          <Eyebrow variant="paren">Future Vision</Eyebrow>
          <Heading as="h2" variant="large" className={styles.title}>
            Numbers are commodities. Decisions are not.
          </Heading>
        </div>
        <div className={styles.body}>
          <p className={styles.paragraph}>
            Every business is already drowning in data. Dashboards proliferate.
            Reports get longer, signal gets thinner. The real challenge is no
            longer collection or visibility — it is meaning, and the speed at
            which that meaning reaches the people who can act on it.
          </p>
          <p className={styles.paragraph}>
            We work at the seam between systems and judgement. Methodology
            before tools. The narrative before the dashboard. A KPI is not a
            chart on a slide; it is a question a leader needs to answer this
            week, in a language that lets them move.
          </p>
          <p className={styles.paragraph}>
            The future of analytics is not more output. It is fewer numbers,
            chosen well, delivered to the right room, on the right cadence.
            That is the work.
          </p>
        </div>
      </Container>
    </Section>
  );
}
