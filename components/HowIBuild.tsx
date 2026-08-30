import Reveal from "./Reveal";

const PRINCIPLES = [
  {
    title: "1. Modular & Contract-Driven Architecture",
    description:
      "Decouple business logic through layered services (Controller → Service → Repository) and strict API contracts (REST), to keep systems maintainable as features scale.",
  },
  {
    title: "2. Data Modeling & Query Precision",
    description:
      "Structure relational and document schemas around access patterns. Prioritize compound indexing, execution plan analysis, and Redis caching layers to keep read/write latencies consistently sub-second.",
  },
  {
    title: "3. High Correctness & Automated Rigor",
    description:
      "Treat automated testing as a non-negotiable standard. Enforce >90% coverage with Playwright and Jest/Pytest in Dockerized CI/CD pipelines to catch regressions before they reach production.",
  },
  {
    title: "4. AI-Native Velocity & Critical Review",
    description:
      "Direct AI coding tools (Claude Code, Cursor) with detailed technical specifications to accelerate prototyping and refactoring, while rigorously verifying generated code for correctness, edge cases, and security.",
  },
];

export default function HowIBuild() {
  return (
    <section
      id="how-i-build"
      className="mx-auto max-w-6xl border-t border-white/8 px-5 py-24 sm:px-10 sm:py-32"
    >
      <Reveal>
        <span className="section-kicker">Mindset</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mt-5 text-4xl sm:text-5xl">
          How I Build
        </h2>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {PRINCIPLES.map((p, i) => (
          <Reveal key={p.title} delay={0.1 + i * 0.05} className="glass-card flex flex-col justify-between rounded-2xl p-8 transition-colors hover:border-accent-soft/40">
            <div>
              <h3 className="font-display text-2xl text-accent-soft sm:text-3xl">
                {p.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                {p.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
