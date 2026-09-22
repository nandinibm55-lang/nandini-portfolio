import { ImageIcon } from "lucide-react";
import { artworks } from "@/data/graphics";
import Reveal from "./Reveal";

const sizeClasses: Record<string, string> = {
  large: "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-square",
  small: "aspect-[4/3]",
  wide: "sm:col-span-2 aspect-[16/7]",
};

export default function Graphics() {
  return (
    <section id="graphics" className="border-b border-border bg-background py-24">
      <div className="section-container">
        <Reveal className="max-w-xl">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent">
            CREATIVE WORK
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            2D Graphics &amp; Visual Design
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A space reserved for Nandini&apos;s 2D graphics and illustration
            work. Artwork will be added here as pieces are finalized.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {artworks.map((art, i) => (
            <Reveal key={art.id} delay={i * 70} className={sizeClasses[art.size]}>
              <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-border bg-surface">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-70 transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, var(--accent-soft) 0px, var(--accent-soft) 22px, transparent 22px, transparent 44px)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                  <ImageIcon size={22} className="text-accent" />
                  <p className="text-sm font-semibold text-foreground">
                    {art.title}
                  </p>
                  <p className="text-xs text-muted">{art.category}</p>
                </div>
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-white/90 px-4 py-3 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-xs font-medium text-muted">
                    {art.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
