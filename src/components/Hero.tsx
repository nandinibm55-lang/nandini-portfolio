import Image from "next/image";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-background"
    >
      {/* subtle data-grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border-color) 1px, transparent 1px), linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 20%, black 40%, transparent 100%)",
        }}
      />

      <div className="section-container relative grid grid-cols-1 items-center gap-14 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
        <Reveal>
          <p className="mb-5 inline-flex items-center rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-accent">
            AI &amp; DATA SCIENCE • 2D GRAPHICS
          </p>

          <h1 className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-[3.4rem]">
            Building intelligent ideas.
            <br />
            Designing visual experiences.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            I explore the intersection of artificial intelligence, data, and
            visual creativity — building thoughtful digital experiences while
            developing skills in modern technology and 2D visual design.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              title="Resume coming soon — get in touch for details"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Resume Coming Soon
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href="https://www.linkedin.com/in/nandini-bm-913957399/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nandini BM on LinkedIn"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/nandinibm55-lang"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Nandini BM on GitHub"
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={18} />
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto w-full max-w-sm">
          <div className="group relative rounded-[1.75rem] border border-border bg-surface p-3 shadow-[0_20px_50px_-25px_rgba(24,24,27,0.25)] transition-transform duration-500 hover:-translate-y-1">
            <div className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] ring-1 ring-accent/25" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] bg-accent-soft">
              <Image
                src="/profile.jpg"
                alt="Portrait of Nandini BM"
                fill
                priority
                sizes="(max-width: 768px) 80vw, 420px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* small floating data label */}
          <div className="absolute -left-6 bottom-8 hidden rounded-xl border border-border bg-surface px-4 py-2.5 text-xs font-medium text-muted shadow-sm sm:block">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-accent align-middle" />
            AI &amp; Data Science · Reva University
          </div>
        </Reveal>
      </div>
    </section>
  );
}
