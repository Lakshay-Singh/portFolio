import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-6xl border-t border-white/8 px-5 py-24 sm:px-10 sm:py-32"
    >
      {/* Large statement — full width, editorial style */}
      <Reveal y={40}>
        <p
          className="text-foreground font-display leading-[1.05] tracking-tight uppercase"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          I BUILD FULL STACK SYSTEMS END-TO-END. FROM PIXEL-PERFECT UIS TO DISTRIBUTED BACKENDS. AND I OWN WHAT SHIPS.
        </p>
      </Reveal>

      {/* Thin divider + label */}
      <Reveal delay={0.08} className="mt-10 border-t border-white/8 pt-6">
        <span className="section-kicker">About me</span>
      </Reveal>

      {/* Two-column split: big name / intro left, detail paragraphs right */}
      <div className="mt-10 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal y={24} delay={0.1}>
          <h2
            className="font-display leading-[0.95] text-foreground"
            style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
          >
            Hi, I&apos;m Lakshay.
          </h2>
        </Reveal>

        <Reveal y={18} delay={0.2} className="flex flex-col gap-5">
          <p className="text-[15px] leading-relaxed text-muted">
            4.5+ years building full stack systems. Frontend, backend, and the infrastructure underneath. I led engineering end to end on <span className="font-medium text-slate-200">Reliq</span>, an AI-powered COBOL modernization platform for legacy banking infrastructure, and built <span className="font-medium text-slate-200">DeFi Guardian</span>, a real time risk monitor tracking 13 blockchains.
          </p>
          <p className="text-[15px] leading-relaxed text-muted">
            Before that, three and a half years at <span className="font-medium text-slate-200">Qualitest</span> across test automation and full stack development for enterprise clients including <span className="font-medium text-slate-200">Adobe</span> and <span className="font-medium text-slate-200">Cengage</span>.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-200">
            I&apos;m now looking for a full time role where I can bring that same ownership to a product team. <span className="font-medium text-accent-soft">Immediately available.</span>
          </p>

          {/* Inline stats */}
          <div className="mt-2 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/8 pt-6">
            {[
              { value: "4.5+", label: "Years experience" },
              { value: "3", label: "Production platforms" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl text-accent-soft">
                  {s.value}
                </div>
                <div className="mt-0.5 text-xs text-muted">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

