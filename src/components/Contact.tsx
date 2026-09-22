import { Mail, Linkedin, Github, Phone } from "lucide-react";
import Reveal from "./Reveal";
import ContactForm from "./ContactForm";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: "nandinibm55@gmail.com",
    href: "mailto:nandinibm55@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 96119 20970",
    href: "tel:+919611920970",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "nandini-bm",
    href: "https://www.linkedin.com/in/nandini-bm-913957399/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "nandinibm55-lang",
    href: "https://github.com/nandinibm55-lang",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="border-b border-border bg-surface py-24">
      <div className="section-container">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent">
            CONTACT
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s create something meaningful.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Have an idea, project, or opportunity? Let&apos;s connect.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="focus-ring group flex items-center gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-accent/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    {label}
                  </p>
                  <p className="truncate text-sm font-semibold text-foreground">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
