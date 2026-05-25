import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import styles from "./Footer.module.css";

const columns = [
  {
    letter: "a.",
    label: "Contact",
    items: [
      {
        text: "hello@solvix.co",
        href: "mailto:hello@solvix.co",
      },
      {
        text: "Modena, Italy",
        href: null,
      },
    ],
  },
  {
    letter: "b.",
    label: "Legal",
    items: [
      { text: "© 2008–2026 Solvix", href: null },
      { text: "Privacy Policy", href: "#" },
    ],
  },
  {
    letter: "c.",
    label: "Elsewhere",
    items: [
      {
        text: "LinkedIn",
        href: "https://www.linkedin.com/",
      },
      {
        text: "Subscribe by email",
        href: "mailto:hello@solvix.co?subject=Subscribe%20to%20Solvix%20notes",
      },
    ],
  },
];

export default function Footer() {
  return (
    <Section id="footer" as="footer" className={styles.footer}>
      <Container>
        <div className={styles.grid}>
          {columns.map((col) => (
            <div key={col.letter} className={styles.col}>
              <p className={styles.colLabel}>
                <span className={styles.letter} aria-hidden="true">
                  ({col.letter})&nbsp;
                </span>
                {col.label}
              </p>
              <ul className={styles.items}>
                {col.items.map((item) => (
                  <li key={item.text}>
                    {item.href ? (
                      <a
                        href={item.href}
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        className={styles.link}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className={styles.staticItem}>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.legal}>
          Solvix — analytics studio, Modena. Est. 2026 ©
        </p>
      </Container>
    </Section>
  );
}
