"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Nav.module.css";

const sections = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const lastYRef = useRef(0);

  useEffect(() => {
    lastYRef.current = window.scrollY;
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > lastYRef.current && y > 80);
      lastYRef.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const cls = [
    styles.nav,
    scrolled ? styles.scrolled : "",
    hidden ? styles.hidden : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a href="#work" className="skip-link">
        Skip to content
      </a>
      <nav className={cls} aria-label="Primary" inert={hidden ? true : undefined}>
        <a href="#top" className={styles.name}>
          Solvix
        </a>
        <ul className={styles.links}>
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={activeId === s.id ? "page" : undefined}
                className={activeId === s.id ? styles.active : undefined}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
