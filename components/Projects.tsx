import Image from "next/image";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl border-t border-white/8 px-5 py-24 sm:px-10 sm:py-32"
    >
      <Reveal>
        <span className="section-kicker">Projects</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display mt-5 text-4xl sm:text-5xl">
          Featured work
        </h2>
      </Reveal>

      {/* DeFi Guardian — image left, text right */}
      <Reveal delay={0.1} className="mt-20 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div className="tilt-wrap">
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(ellipse_at_50%_60%,rgba(37,99,235,0.18),transparent_68%)]" />
          <Image
            src="/assets/defi-guardian-mockup.png"
            alt="DeFi Guardian dashboard and landing page"
            width={1024}
            height={1024}
            className="w-full"
          />
        </div>

        <div>
          <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-success/30 bg-success/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-success">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-current" />
            Live
          </span>
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-indigo-300">
            Featured Project
          </p>
          <h3 className="font-display mb-6 text-[clamp(1.8rem,3.2vw,2.8rem)] leading-[1.05]">
            DeFi Guardian
          </h3>
          <div className="glass-card mb-6 rounded-2xl px-6 py-5 text-[15px] leading-relaxed text-muted">
            Real-time risk monitoring platform tracking liquidity and risk metrics
            across{" "}
            <strong className="font-medium text-slate-200">
              13 blockchains
            </strong>{" "}
            and{" "}
            <strong className="font-medium text-slate-200">
              21+ DeFi protocols
            </strong>
            . WebSocket-powered live dashboards with AI/ML-driven risk scoring, portfolio health tracking, and liquidation alerts.
          </div>
          <div className="mb-7 flex flex-wrap gap-2">
            {["React", "Node.js", "PostgreSQL", "Redis", "WebSockets", "TypeScript"].map(
              (tag) => (
                <span key={tag} className="pill-tag">
                  {tag}
                </span>
              )
            )}
          </div>
          <a
            href="https://defiguardian.fi"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-5.5 py-3 text-sm font-semibold text-white shadow-[0_4px_18px_rgba(37,99,235,0.35)] transition-transform hover:-translate-y-0.5 hover:bg-blue-600"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              width={14}
              height={14}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
            Visit defiguardian.fi
          </a>
        </div>
      </Reveal>


    </section>
  );
}
