import styles from "./Eyebrow.module.css";

type EyebrowVariant = "default" | "paren";

export default function Eyebrow({
  children,
  variant = "default",
}: {
  children: React.ReactNode;
  variant?: EyebrowVariant;
}) {
  if (variant === "paren") {
    return (
      <p className={styles.eyebrow}>
        <span className={styles.paren} aria-hidden="true">
          (&nbsp;
        </span>
        {children}
        <span className={styles.paren} aria-hidden="true">
          &nbsp;)
        </span>
      </p>
    );
  }
  return <p className={styles.eyebrow}>{children}</p>;
}
