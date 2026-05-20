// components/Nav.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastYRef.current && y > 80);
      lastYRef.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cls = [
    styles.nav,
    scrolled ? styles.scrolled : "",
    hidden ? styles.hidden : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className={cls}>
      <span className={styles.name}>Enrico Damiani</span>
      <ul className={styles.links}>
        <li><a href="#work">Work</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
