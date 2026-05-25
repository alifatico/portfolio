import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import Heading from "@/components/ui/Heading";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
  return (
    <Section id="work">
      <Container>
        <div className={styles.header}>
          <Eyebrow>Selected Work</Eyebrow>
          <Heading as="h2" variant="large">
            Engagements that moved the number.
          </Heading>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <CaseStudyCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
