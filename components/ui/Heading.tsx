import styles from "./Heading.module.css";

type Variant = "display" | "large" | "medium";
type Tag = "h1" | "h2" | "h3";

type HeadingProps = {
  as: Tag;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Component,
  variant = "large",
  children,
  className = "",
}: HeadingProps) {
  return (
    <Component
      className={`${styles.heading} ${styles[variant]} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}
