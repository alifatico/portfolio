import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Eyebrow variant="paren">Contact</Eyebrow>
        <Heading as="h2" variant="display" className={styles.statement}>
          Start a conversation.
        </Heading>
        <p className={styles.sub}>
          Tell us about your challenge. We respond within 24 hours.
        </p>
        <a href="mailto:hello@solvix.co" className={styles.email}>
          hello@solvix.co
        </a>
      </Container>
    </Section>
  );
}
