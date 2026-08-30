"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SplashScreen from "@/components/SplashScreen";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HowIBuild from "@/components/HowIBuild";

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mainRef.current;
    if (!el) return;

    // Start the main content invisible and slightly below
    gsap.set(el, { opacity: 0, y: 40 });

    const reveal = () => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    };

    // If splash already finished (e.g. fast load / reduced-motion tick),
    // reveal immediately; otherwise wait for the event.
    if (window.__splashDone) {
      reveal();
    } else {
      window.addEventListener("splash:done", reveal, { once: true });
    }

    return () => window.removeEventListener("splash:done", reveal);
  }, []);

  return (
    <>
      <SplashScreen />
      <div ref={mainRef}>
        <Nav />
        <main>
          <Hero />
          <About />
          <Projects />
          <HowIBuild />
          <Stack />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
