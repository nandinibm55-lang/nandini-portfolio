import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border bg-background py-24"
    >
      <div className="section-container">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent">
            EXPERIENCE &amp; LEARNING
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Currently building a foundation
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            No formal work experience has been added yet. Nandini is focused
            on her B.Tech coursework in AI &amp; Data Science and her
            practice in 2D graphics design.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 max-w-2xl">
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-surface p-6">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Sparkles size={16} />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                B.Tech CSE — AI &amp; Data Science, Reva University
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                Details to be added as internships, coursework projects, or
                certifications are confirmed.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
