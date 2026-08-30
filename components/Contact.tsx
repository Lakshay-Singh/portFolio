import Reveal from "./Reveal";

const LINKS = [
  {
    href: "mailto:lakshaysing37@gmail.com",
    label: "lakshaysing37@gmail.com",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </>
    ),
  },
  {
    href: "https://github.com/Lakshay-Singh",
    label: "GitHub",
    external: true,
    icon: (
      <>
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </>
    ),
  },
  {
    href: "https://linkedin.com/in/lakshay-singh-a3b701203",
    label: "LinkedIn",
    external: true,
    icon: (
      <>
        <path d="M7 17L17 7" />
        <path d="M7 7h10v10" />
      </>
    ),
  },
  {
    href: "/assets/resume.pdf",
    label: "Resume",
    external: true,
    icon: (
      <>
        <path d="M12 3v12" />
        <path d="M7 10l5 5 5-5" />
        <path d="M5 21h14" />
      </>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl border-t border-white/8 px-5 py-24 sm:px-10 sm:py-32"
    >
      <Reveal>
        <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95]">
          Let&apos;s talk
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="mt-4 max-w-md text-base text-muted">
          Open to full-time full stack/SDE roles. Immediate joiner.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-3.5" stagger="a">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener" : undefined}
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent-soft hover:bg-white/5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              width={16}
              height={16}
            >
              {link.icon}
            </svg>
            {link.label}
          </a>
        ))}
      </Reveal>
    </section>
  );
}
