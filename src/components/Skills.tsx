import { skillGroups } from "@/data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-border bg-surface py-24">
      <div className="section-container">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent">
            SKILLS
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where technology meets craft
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A blend of AI &amp; data science fundamentals, core programming,
            and 2D creative design.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40">
                <h3 className="text-sm font-bold tracking-wide text-foreground">
                  {group.category}
                </h3>
                <p className="mt-1 text-sm text-muted">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
