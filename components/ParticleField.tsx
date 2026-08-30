"use client";

import { useEffect, useRef } from "react";

type Dot = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  r: number;
  drift: number;
  phase: number;
};

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let dots: Dot[] = [];
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let raf = 0;
    let scrollY = 0;
    let mouseX = 0;
    let mouseY = 0;

    function resize() {
      const el = canvas as HTMLCanvasElement;
      width = window.innerWidth;
      height = window.innerHeight;
      el.width = width * dpr;
      el.height = height * dpr;
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const density = Math.min(140, Math.floor((width * height) / 14000));
      dots = Array.from({ length: density }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          r: Math.random() * 1.4 + 0.4,
          drift: Math.random() * 18 + 8,
          phase: Math.random() * Math.PI * 2,
        };
      });
    }

    function draw(t: number) {
      ctx!.clearRect(0, 0, width, height);
      const parallax = scrollY * 0.04;

      for (const d of dots) {
        const tt = t / 1800;
        const dx = Math.sin(tt + d.phase) * (d.drift * 0.15);
        const dy = Math.cos(tt + d.phase) * (d.drift * 0.15) + parallax;

        const mx = (mouseX - d.baseX) * 0.02;
        const my = (mouseY - d.baseY) * 0.02;

        const x = d.baseX + dx + mx;
        const y = ((d.baseY + dy + my) % (height + 40)) - 20;

        ctx!.beginPath();
        ctx!.fillStyle = "rgba(226,232,240,0.35)";
        ctx!.arc(x, y < -20 ? y + height + 40 : y, d.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    function onScroll() {
      scrollY = window.scrollY;
    }

    function onMouse(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouse, { passive: true });

    if (!prefersReduced) {
      raf = requestAnimationFrame(draw);
    } else {
      draw(0);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
    />
  );
}
