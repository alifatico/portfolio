import styles from "./Section.module.css";

type SectionProps = {
  id: string;
  children: React.ReactNode;
  className?: string;
  as?: "section" | "footer" | "header";
};

export default function Section({
  id,
  children,
  className = "",
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={`${styles.section} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
