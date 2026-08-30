"use client";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#how-i-build", label: "Mindset" },
  { href: "#stack", label: "Stack" },
  { href: "#experience", label: "Experience" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center gap-6 border-b border-white/8 bg-background/85 px-5 py-4 backdrop-blur-md sm:px-10">
      <a href="#top" className="mr-auto text-[17px] font-semibold tracking-tight">
        Lakshay Singh
      </a>
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
    </nav>
  );
}
