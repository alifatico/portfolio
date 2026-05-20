// components/Stats.tsx
import styles from "./Stats.module.css";

const stats = [
  { value: "30+",  label: "Country teams" },
  { value: "12",   label: "European markets" },
  { value: "40h",  label: "Saved per analyst / month" },
  { value: "100%", label: "On-time delivery" },
];

export default function Stats() {
  return (
    <div className={styles.strip}>
      {stats.map((s) => (
        <div key={s.label} className={styles.stat}>
          <span className={styles.value}>{s.value}</span>
          <span className={styles.label}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}
