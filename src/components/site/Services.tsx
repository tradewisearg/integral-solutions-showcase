// Servicios premium: cards minimalistas con íconos lineales.
import { Droplets, Hammer, Paintbrush, Wrench, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { whatsappLink } from "@/lib/site";

const services = [
  { icon: Droplets, title: "Plomería", desc: "Reparaciones, instalaciones y pérdidas." },
  { icon: Hammer, title: "Albañilería", desc: "Refacciones y mantenimiento edilicio." },
  { icon: Paintbrush, title: "Pintura", desc: "Interiores y exteriores con terminaciones prolijas." },
  { icon: Wrench, title: "Mantenimiento integral", desc: "Soluciones para consorcios y administraciones." },
];

export function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="servicios" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Servicios
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05]">
            Lo que hacemos,
            <br />
            <span className="text-foreground/40">lo hacemos bien.</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-16 md:mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${
            visible ? "animate-[fade-up_1s_ease-out_both]" : "opacity-0"
          }`}
        >
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative rounded-2xl bg-card p-8 md:p-10 border border-border/70 hover-lift hover:border-accent hover:shadow-[var(--shadow-card)]"
            >
              <Icon className="text-primary group-hover:text-accent transition-colors" size={32} strokeWidth={1.5} />
              <h3 className="mt-10 text-xl md:text-2xl font-display font-bold text-primary">{title}</h3>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                {desc}
              </p>
            </article>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 text-base md:text-lg font-medium text-primary hover:text-accent transition group"
        >
          Y mucho más. Consultanos.
          <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
        </a>
      </div>
    </section>
  );
}
