import { Droplets, Hammer, Paintbrush, Wrench, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { whatsappLink } from "@/lib/site";

const services = [
  {
    icon: Wrench,
    title: "Mantenimiento integral",
    desc: "Atención para consorcios, administraciones y locales comerciales.",
    color: "emerald",
  },
  {
    icon: Droplets,
    title: "Plomería",
    desc: "Pérdidas, instalaciones y reparaciones con diagnóstico claro.",
    color: "sky",
  },
  {
    icon: Hammer,
    title: "Albañilería",
    desc: "Arreglos, refacciones y mantenimiento edilicio con buena terminación.",
    color: "orange",
  },
  {
    icon: Paintbrush,
    title: "Pintura",
    desc: "Interiores, frentes y espacios comunes preparados con criterio.",
    color: "fuchsia",
  },
] as const;

const colorMap = {
  sky: {
    border: "border-sky-300/50",
    icon: "text-sky-700 group-hover:text-sky-500",
    badge: "bg-sky-500/10",
    accent: "from-sky-400/10 to-white",
  },
  orange: {
    border: "border-orange-300/50",
    icon: "text-orange-700 group-hover:text-orange-500",
    badge: "bg-orange-500/10",
    accent: "from-orange-400/10 to-white",
  },
  fuchsia: {
    border: "border-fuchsia-300/50",
    icon: "text-fuchsia-700 group-hover:text-fuchsia-500",
    badge: "bg-fuchsia-500/10",
    accent: "from-fuchsia-400/10 to-white",
  },
  emerald: {
    border: "border-emerald-300/50",
    icon: "text-emerald-700 group-hover:text-emerald-500",
    badge: "bg-emerald-500/10",
    accent: "from-emerald-400/10 to-white",
  },
} as const;

export function Services() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="servicios" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Servicios
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05]">
            Oficios de confianza,
            <br />
            <span className="text-foreground/40">sin vueltas.</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-16 md:mt-20 transition-all duration-500 ${
            visible ? "animate-[fade-up_1s_ease-out_both] opacity-100" : "opacity-0"
          }`}
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, desc, color }) => {
              const styles = colorMap[color];
              return (
                <article
                  key={title}
                  className={`group relative overflow-hidden rounded-2xl bg-card p-8 md:p-10 border ${styles.border} hover-lift hover:shadow-[var(--shadow-card)]`}
                >
                  <div
                    className={`absolute inset-x-8 top-6 h-28 rounded-[2rem] blur-3xl opacity-70 ${styles.badge}`}
                  />
                  <div
                    className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${styles.accent} opacity-90`}
                  />
                  {title === "Pintura" ? (
                    <>
                      <div className="absolute -left-6 top-16 h-24 w-24 rounded-full bg-fuchsia-500/20 blur-2xl" />
                      <div className="absolute right-6 top-20 h-16 w-16 rounded-full bg-fuchsia-500/25 blur-xl" />
                      <div className="absolute left-10 bottom-10 h-6 w-6 rounded-full bg-fuchsia-500/90" />
                      <div className="absolute left-16 bottom-6 h-9 w-9 rounded-full bg-fuchsia-500/80" />
                      <div className="absolute left-24 bottom-14 h-5 w-5 rounded-full bg-fuchsia-500/90" />
                    </>
                  ) : title === "Plomería" ? (
                    <>
                      <div className="absolute right-7 top-20 h-16 w-16 rounded-full bg-sky-500/15 blur-xl" />
                      <div className="absolute right-16 top-8 h-10 w-10 rounded-full bg-sky-500/20 blur-2xl" />
                      <div className="absolute left-10 bottom-10 h-6 w-6 rounded-full bg-sky-500/80" />
                    </>
                  ) : title === "Albañilería" ? (
                    <>
                      <div className="absolute inset-x-8 top-12 h-2 rounded-full bg-orange-500/15" />
                      <div className="absolute left-6 top-24 h-3 w-16 rounded-full bg-orange-500/20" />
                      <div className="absolute right-6 bottom-16 h-3 w-10 rounded-full bg-orange-500/20" />
                    </>
                  ) : (
                    <>
                      <div className="absolute right-8 top-16 h-20 w-20 rounded-full bg-emerald-500/15 blur-2xl" />
                      <div className="absolute left-10 bottom-12 h-8 w-8 rounded-full bg-emerald-500/80" />
                    </>
                  )}

                  <Icon className={`${styles.icon} relative z-10`} size={32} strokeWidth={1.5} />
                  <h3 className="relative z-10 mt-10 text-xl md:text-2xl font-display font-bold text-primary">
                    {title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm md:text-base text-muted-foreground leading-relaxed font-light">
                    {desc}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 text-base md:text-lg font-medium text-primary hover:text-accent transition group"
        >
          Consultanos por otros trabajos.
          <ArrowUpRight
            size={20}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition"
          />
        </a>
      </div>
    </section>
  );
}
