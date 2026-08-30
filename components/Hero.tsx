"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { ensureGsapRegistered, gsap } from "@/lib/gsap";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ensureGsapRegistered();
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-line",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }
      )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          "-=0.4"
        )
        .fromTo(
          ".hero-image",
          { opacity: 0 },
          { opacity: 1, duration: 1.2 },
          0
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={rootRef}
      className="relative flex flex-col overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Full-height headshot — right half, fading to the left */}
      <div
        className="hero-image pointer-events-none absolute inset-y-0 right-0 z-0"
        style={{ width: "62%" }}
      >
        <Image
          src="/assets/headshot.png"
          alt="Lakshay Singh"
          fill
          priority
          sizes="62vw"
          className="object-cover object-top"
          style={{
            filter: "contrast(1.08) brightness(0.82) saturate(0.9)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Left-to-right background gradient overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(90deg, #121212 0%, rgba(18,18,18,0.85) 32%, rgba(18,18,18,0.15) 58%, rgba(18,18,18,0) 72%)",
        }}
      />

      {/* Content — flex column so heading fills middle, arrow sits at bottom */}
      <div
        className="relative z-[2] mx-auto flex w-full max-w-[1240px] flex-1 flex-col px-5 sm:px-[clamp(20px,5vw,72px)]"
        style={{
          minHeight: "100vh",
          paddingTop: "clamp(64px,10vw,120px)",
          paddingBottom: "clamp(64px,6vw,90px)",
        }}
      >
        {/* Heading — grows to fill available vertical space, centred */}
        <div className="flex flex-1 items-center">
          <div style={{ maxWidth: 640, transform: "translateY(-60px)" }}>
            <h1
              className="hero-line font-display m-0 font-extrabold leading-[0.98] tracking-tight"
              style={{ fontSize: "clamp(64px,11vw,150px)" }}
            >
              Full
              <br />
              Stack
              <br />
              Developer
            </h1>
          </div>
        </div>

        {/* Arrow — sits at the bottom, left edge aligned with the heading */}
        <div>
          <a
            href="#about"
            aria-label="Scroll to about"
            className="hero-cta flex items-center justify-center rounded-full bg-accent shadow-[0_8px_24px_rgba(37,99,235,0.4)] transition-transform hover:translate-y-1"
            style={{ width: 56, height: 56 }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              width={20}
              height={20}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
