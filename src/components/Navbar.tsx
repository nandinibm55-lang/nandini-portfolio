"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#graphics", label: "Graphics" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-border/80 bg-white/80 backdrop-blur-md"
          : "border-transparent bg-white/40 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Primary"
        className="section-container flex h-16 items-center justify-between"
      >
        <a
          href="#home"
          className="focus-ring text-sm font-bold tracking-[0.14em] text-foreground"
        >
          NANDINI BM
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`focus-ring relative py-1 text-sm font-medium transition-colors ${
                  active === link.href
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-[1px] left-0 h-[2px] w-full origin-left rounded-full bg-accent transition-transform duration-300 ${
                    active === link.href ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:shadow-md md:inline-block"
        >
          Let&apos;s Connect
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-border bg-white transition-[max-height,opacity] duration-300 ease-in-out md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="section-container flex flex-col gap-1 py-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="focus-ring block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-accent-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="focus-ring mt-2 block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white"
            >
              Let&apos;s Connect
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
