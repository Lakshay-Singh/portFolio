import Reveal from "./Reveal";

type Skill = { label: string; icon?: string; img?: string };
type Category = { title: string; skills: Skill[] };

const CATEGORIES: Category[] = [
  {
    title: "Frontend",
    skills: [
      { label: "React", icon: "devicon-react-original colored" },
      { label: "TypeScript", icon: "devicon-typescript-plain colored" },
      { label: "JavaScript", icon: "devicon-javascript-plain colored" },
      { label: "Vite", icon: "devicon-vitejs-plain colored" },
      { label: "Redux", icon: "devicon-redux-original colored" },
      { label: "Zustand" },
      { label: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { label: "Node.js", icon: "devicon-nodejs-plain colored" },
      { label: "Express.js", icon: "devicon-express-original colored" },
      { label: "Python", icon: "devicon-python-plain colored" },
      { label: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { label: "REST APIs" },
      { label: "WebSockets" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { label: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { label: "SQL" },
      { label: "Redis", icon: "devicon-redis-plain colored" },
      { label: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { label: "Supabase", icon: "devicon-supabase-plain colored" },
    ],
  },
  {
    title: "Distributed Systems",
    skills: [
      { label: "Microservices" },
      { label: "Celery" },
      { label: "BullMQ" },
      { label: "Asynchronous Processing" },
      { label: "Event-Driven Architecture" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { label: "Playwright", icon: "devicon-playwright-plain colored" },
      { label: "Jest", icon: "devicon-jest-plain colored" },
      { label: "Postman", icon: "devicon-postman-plain colored" },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { label: "Docker", icon: "devicon-docker-plain colored" },
      { label: "GitHub Actions", icon: "devicon-githubactions-plain colored" },
      { label: "Jenkins", icon: "devicon-jenkins-line colored" },
    ],
  },
  {
    title: "AI",
    skills: [
      { label: "Anthropic Claude API" },
      { label: "OpenAI API" },
      { label: "Claude", img: "https://cdn.simpleicons.org/claude" },
      { label: "Cursor", img: "https://cdn.simpleicons.org/cursor/ffffff" },
      {
        label: "GitHub Copilot",
        img: "https://cdn.simpleicons.org/github/ffffff",
      },
    ],
  },
];

export default function Stack() {
  return (
    <section
      id="stack"
      className="mx-auto max-w-6xl border-t border-white/8 px-5 py-24 sm:px-10 sm:py-32"
    >
      <Reveal>
        <span className="section-kicker">My Stack</span>
      </Reveal>

      <div className="mt-16 flex flex-col gap-14 sm:gap-16">
        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            className="grid grid-cols-1 items-start gap-4 sm:grid-cols-[200px_1fr] sm:gap-8 lg:grid-cols-[260px_1fr] lg:gap-12"
          >
            <Reveal y={20} delay={0} className="sm:sticky sm:top-28">
              <h3 className="font-display text-[clamp(2.1rem,5.5vw,3.6rem)] leading-[0.95] text-slate-300">
                {cat.title}
              </h3>
            </Reveal>

            <Reveal
              y={18}
              delay={0.45}
              stagger=".skill-chip"
              className="flex flex-wrap content-start gap-2.5"
            >
              {cat.skills.map((s) => (
                <span key={s.label} className="skill-chip">
                  {s.icon && <i className={s.icon} style={{ fontSize: 14 }} />}
                  {s.img && (
                    <img src={s.img} alt="" width={14} height={14} />
                  )}
                  {s.label}
                </span>
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}
