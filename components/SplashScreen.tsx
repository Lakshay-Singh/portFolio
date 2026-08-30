"use client";

import { useEffect, useRef, useState } from "react";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";

/**
 * Full-screen intro: shows the name on a title-card, then pushes it off-screen
 * like a slide transition while the hero content pushes in underneath.
 * Runs on every full load/refresh (no persistence) and is skipped instantly
 * for prefers-reduced-motion.
 */
export default function SplashScreen() {
  const panelRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    ensureGsapRegistered();

    const finish = () => {
      window.__splashDone = true;
      window.dispatchEvent(new Event("splash:done"));
    };

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scale every duration to 0 for reduced-motion users instead of
    // branching into a separate code path: the timeline still runs (so
    // setMounted only ever changes inside a GSAP callback, never directly
    // in the effect body), it just resolves on the next tick.
    const d = (seconds: number) => (prefersReduced ? 0 : seconds);

    if (!prefersReduced) {
      document.documentElement.classList.add("splash-lock");
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          document.documentElement.classList.remove("splash-lock");
          setMounted(false);
        },
      });

      tl.fromTo(
        nameRef.current,
        { opacity: 0, y: 26 },
        { opacity: 1, y: 0, duration: d(0.7) }
      )
        .fromTo(
          lineRef.current,
          { width: 0 },
          { width: 56, duration: d(0.45), ease: "power2.out" },
          d(0) ? "<" : "-=0.35"
        )
        .fromTo(
          roleRef.current,
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: d(0.5) },
          d(0) ? "<" : "-=0.2"
        )
        .fromTo(
          trackRef.current,
          { opacity: 0 },
          { opacity: 1, duration: d(0.3) },
          d(0) ? "<" : "-=0.1"
        )
        .fromTo(
          barRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: d(0.85), ease: "power1.inOut" },
          "<"
        )
        // hold on the title card
        .to({}, { duration: d(0.35) })
        // exit: fade the card's own content out fast...
        .to(
          [
            nameRef.current,
            lineRef.current,
            roleRef.current,
            trackRef.current,
          ],
          { opacity: 0, y: -18, duration: d(0.35), ease: "power2.in" }
        )
        // ...then push the whole panel up while dispatching splash:done so
        // the hero's entrance animates in underneath at the same time,
        // like one slide pushing the next into place.
        .call(finish)
        .to(
          panelRef.current,
          { yPercent: -100, duration: d(0.9), ease: "power4.inOut" },
          "<"
        );
    });

    return () => ctx.revert();
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={panelRef}
      role="presentation"
      aria-hidden="true"
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div ref={nameRef} className="font-display text-[clamp(2.6rem,9vw,6rem)] leading-none">
        Lakshay Singh
      </div>
      <div ref={lineRef} className="mt-5 h-[3px] bg-accent" style={{ width: 0 }} />
      <div
        ref={roleRef}
        className="mt-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted"
      >
        Full Stack Developer
      </div>
      <div
        ref={trackRef}
        className="mt-10 h-[2px] w-40 overflow-hidden rounded-full bg-white/10"
        style={{ opacity: 0 }}
      >
        <div
          ref={barRef}
          className="h-full w-full origin-left bg-accent"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}

declare global {
  interface Window {
    __splashDone?: boolean;
  }
}
