import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import styles from "./BrandStatement.module.css";

const lines = ["We turn", "messy data", "into market", "decisions."];

export default function BrandStatement() {
  return (
    <Section id="statement" className={styles.section}>
      <Container>
        <h1 className={styles.statement} aria-label={lines.join(" ")}>
          {lines.map((line, i) => (
            <span key={line} className={styles.line} aria-hidden="true">
              {line}
              {i === lines.length - 1 ? "" : null}
            </span>
          ))}
        </h1>
      </Container>
    </Section>
  );
}
