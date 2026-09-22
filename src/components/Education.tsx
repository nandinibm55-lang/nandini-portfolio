import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="border-b border-border bg-surface py-24">
      <div className="section-container">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent">
            EDUCATION
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Academic background
          </h2>
        </Reveal>

        <Reveal delay={100} className="mt-10 max-w-2xl">
          <div className="flex flex-col gap-5 rounded-2xl border border-border bg-background p-7 sm:flex-row sm:items-center">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
              <GraduationCap size={26} />
            </span>
            <div>
              <p className="text-lg font-bold text-foreground">
                Bachelor of Technology (B.Tech), Computer Science &amp;
                Engineering
              </p>
              <p className="mt-1 text-sm font-medium text-accent">
                Specialization: Artificial Intelligence &amp; Data Science
              </p>
              <p className="mt-2 text-sm text-muted">Reva University</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
