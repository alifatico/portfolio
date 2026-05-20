// components/Skills.tsx
import { skillGroups } from "@/data/skills";
import FadeIn from "@/components/FadeIn";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <FadeIn>
        <h2 className={styles.sectionLabel}>Skills</h2>
        <div className={styles.grid}>
          {skillGroups.map((group) => (
            <div key={group.label} className={styles.group}>
              <h3 className={styles.groupLabel}>{group.label}</h3>
              <ul>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
