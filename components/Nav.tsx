"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#how-i-build", label: "Mindset" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/8 bg-background/85 px-5 py-4 backdrop-blur-md sm:px-10">
      <a href="#top" className="text-[17px] font-semibold tracking-tight relative z-[60]">
        Lakshay Singh
      </a>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-6">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className="rounded-lg bg-accent px-4.5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(37,99,235,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-blue-600"
        >
          Contact
        </a>
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="sm:hidden p-2 -mr-2 relative z-[60] text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          )}
        </svg>
      </button>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[55] sm:hidden flex justify-end">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="relative h-[100dvh] w-[70%] bg-background border-l border-white/10 shadow-2xl animate-[slideIn_0.3s_ease-out]">
            <div className="flex flex-col h-full pt-24 px-6 gap-6 overflow-y-auto">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-muted transition-colors hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-4 rounded-lg bg-accent px-4.5 py-3 text-center text-sm font-semibold text-white shadow-[0_4px_18px_rgba(37,99,235,0.35)] transition-transform active:scale-95"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
