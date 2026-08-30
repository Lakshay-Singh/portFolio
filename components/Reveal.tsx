"use client";

import { useEffect, useRef } from "react";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";

type RevealProps = {
  children: React.ReactNode;
  y?: number;
  delay?: number;
  className?: string;
  stagger?: string;
};

/**
 * Fades + slides its direct children into view on scroll using GSAP ScrollTrigger.
 * Pass `stagger` (a CSS selector) to animate matching descendants one after another
 * instead of animating the wrapper as a whole.
 */
export default function Reveal({
  children,
  y = 32,
  delay = 0,
  className,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsapRegistered();
    const el = ref.current;
    if (!el) return;

    const targets = stagger ? el.querySelectorAll(stagger) : el;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger: stagger ? 0.08 : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [y, delay, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
