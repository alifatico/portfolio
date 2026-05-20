"use client";

import { useEffect, useRef } from "react";

export default function FadeIn({
  children,
  delay = 0,
  animClass = "fade-up",
}: {
  children: React.ReactNode;
  delay?: number;
  animClass?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !el.classList.contains("visible")) {
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={animClass}>
      {children}
    </div>
  );
}
