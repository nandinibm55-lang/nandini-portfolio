import { Github, ExternalLink, FolderKanban } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="border-b border-border bg-surface py-24">
      <div className="section-container">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent">
            PROJECTS
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Technical &amp; Creative Projects
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Project write-ups are being prepared. This section will list
            real AI, data science, and creative technology work as it&apos;s
            documented.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 90}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent/40">
                <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-border bg-surface">
                  <FolderKanban size={26} className="text-accent/70" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3 pt-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-foreground hover:border-accent hover:text-accent"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted/70">
                      <Github size={14} /> Coming soon
                    </span>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
