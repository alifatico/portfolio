import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import { services } from "@/data/services";
import styles from "./Services.module.css";

const letters = ["a.", "b.", "c.", "d.", "e.", "f."];

export default function Services() {
  return (
    <Section id="services">
      <Container>
        <div className={styles.header}>
          <Eyebrow>Services</Eyebrow>
          <Heading as="h2" variant="large">
            Four practice areas, one integrated approach.
          </Heading>
        </div>
        <ol className={styles.list}>
          {services.map((service, i) => (
            <li key={service.title} className={styles.item}>
              <span className={styles.letter} aria-hidden="true">
                {letters[i] ?? `${i + 1}.`}
              </span>
              <div className={styles.body}>
                <Heading as="h3" variant="medium" className={styles.title}>
                  {service.title}
                </Heading>
                <p className={styles.description}>{service.description}</p>
                <p className={styles.capabilities}>
                  {service.capabilities.join(" · ")}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
