import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import { services } from "@/data/services";
import styles from "./Services.module.css";

const outerLetters = ["a.", "b.", "c.", "d.", "e.", "f."];
const innerLetters = [
  "a.",
  "b.",
  "c.",
  "d.",
  "e.",
  "f.",
  "g.",
  "h.",
  "i.",
  "j.",
];

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <div className={styles.header}>
          <Eyebrow variant="paren">Services</Eyebrow>
          <Heading as="h2" variant="large">
            Four practice areas, one integrated approach.
          </Heading>
        </div>
        <ol className={styles.list}>
          {services.map((service, i) => (
            <li key={service.title} className={styles.item}>
              <span className={styles.letter} aria-hidden="true">
                ({outerLetters[i] ?? `${i + 1}.`})
              </span>
              <div className={styles.body}>
                <Heading as="h3" variant="medium" className={styles.title}>
                  {service.title}
                </Heading>
                <p className={styles.description}>{service.description}</p>
                <ol className={styles.capabilities}>
                  {service.capabilities.map((cap, j) => (
                    <li key={cap} className={styles.capability}>
                      <span
                        className={styles.capabilityLetter}
                        aria-hidden="true"
                      >
                        ({innerLetters[j] ?? `${j + 1}.`})
                      </span>
                      <span className={styles.capabilityText}>{cap}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
