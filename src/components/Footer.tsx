import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#F4F4F5] py-12">
      <div className="section-container flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-bold tracking-[0.14em] text-foreground">
            NANDINI BM
          </p>
          <p className="mt-1 text-xs text-muted">
            AI &amp; Data Science · 2D Graphics Editor
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/nandinibm55-lang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/nandini-bm-913957399/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:nandinibm55@gmail.com"
            aria-label="Email"
            className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        © 2026 Nandini BM. All rights reserved.
      </p>
    </footer>
  );
}
