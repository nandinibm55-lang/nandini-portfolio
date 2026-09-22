import { BrainCircuit, BarChart3, PenTool, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: BrainCircuit,
    title: "AI & Data Science",
    description: "Exploring data-driven solutions and intelligent systems.",
  },
  {
    icon: BarChart3,
    title: "Data Visualization",
    description: "Turning data into understandable visual stories.",
  },
  {
    icon: PenTool,
    title: "2D Graphics Design",
    description: "Creating clean digital compositions and visual assets.",
  },
  {
    icon: Sparkles,
    title: "Creative Digital Experiences",
    description: "Combining technology and visual design.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-b border-border bg-background py-24">
      <div className="section-container">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent">
            SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Areas of focus
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/40">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
