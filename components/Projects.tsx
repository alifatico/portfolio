import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

const letters = ["a.", "b.", "c.", "d.", "e.", "f.", "g.", "h.", "i."];

export default function Projects() {
  return (
    <Section id="work">
      <Container>
        <div className={styles.header}>
          <Eyebrow variant="paren">Selected Work</Eyebrow>
          <Heading as="h2" variant="large">
            Engagements that moved the number.
          </Heading>
        </div>
        <div className={styles.grid}>
          {projects.map((project, i) => (
            <CaseStudyCard
              key={project.title}
              project={project}
              letter={letters[i] ?? `${i + 1}.`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
