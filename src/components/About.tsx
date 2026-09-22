import { GraduationCap, Brain, Palette } from "lucide-react";
import Reveal from "./Reveal";

const infoBlocks = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Reva University",
  },
  {
    icon: Brain,
    label: "Focus",
    value: "AI & Data Science",
  },
  {
    icon: Palette,
    label: "Creative Focus",
    value: "2D Graphics",
  },
];

export default function About() {
  return (
    <section id="about" className="border-b border-border bg-background py-24">
      <div className="section-container grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.14em] text-accent">
            ABOUT ME
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Curious about intelligent systems,
            <br className="hidden sm:block" /> drawn to visual craft.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-5 text-base leading-relaxed text-muted">
            <p>
              Nandini is a Computer Science and Engineering student at Reva
              University, specializing in Artificial Intelligence and Data
              Science. Her coursework centers on how data-driven systems are
              built and understood — from core programming fundamentals to
              the principles behind machine learning and analysis.
            </p>
            <p>
              Alongside her technical study, she works as a 2D graphics
              editor, shaping visual compositions and digital design work.
              This dual interest — reasoning with data on one side, and
              composing visuals on the other — shapes how she approaches
              problems: analytically, but with an eye for how things look and
              feel.
            </p>
            <p>
              She&apos;s currently focused on strengthening her foundations in
              AI and data science while continuing to build practical
              projects and explore modern tools across both disciplines.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {infoBlocks.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-accent/40"
              >
                <Icon size={18} className="text-accent" />
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                  {label}
                </p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
