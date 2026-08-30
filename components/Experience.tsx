import Reveal from "./Reveal";

const ROLES = [
  {
    title: "Lead Full-Stack Engineer",
    company: "Reliq (Co-Founder/Startup)",
    period: "DEC 2025 — PRESENT",
    description:
      "Architected the end to end enterprise platform: built modular React/TypeScript interfaces, scalable Python/FastAPI & Node.js backend services, and automated CI/CD pipelines with 90%+ test coverage.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Python FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Anthropic API",
    ],
  },
  {
    title: "Software Engineer",
    company: "Qualitest",
    period: "MAR 2022 — OCT 2025",
    description:
      "Engineered compliance grade REST APIs and 80+ accessible React/TypeScript components across 10+ production releases for Adobe EchoSign and Cengage, backed by 100+ automated test suites.",
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Playwright",
      "Jest",
      "REST APIs",
      "Figma",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl border-t border-white/8 px-5 py-24 sm:px-10 sm:py-32"
    >
      <Reveal>
        <span className="section-kicker">Experience</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mt-5 text-4xl sm:text-5xl">
          Where I&apos;ve worked
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col">
        {ROLES.map((role, i) => (
          <Reveal
            key={role.title + role.company}
            delay={0.08 * i}
            className="border-b border-white/8 py-10 first:pt-0 last:border-b-0"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-[clamp(1.8rem,5vw,3.6rem)] leading-[0.95] text-foreground">
                {role.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-widest text-faint sm:shrink-0">
                {role.period}
              </p>
            </div>
            <p className="mt-2 text-sm font-semibold text-accent-soft">
              {role.company}
            </p>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">
              {role.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <span key={skill} className="pill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

