// Sección de servicios con cards y íconos.
import { Droplets, Hammer, Paintbrush, Wrench } from "lucide-react";

const services = [
  { icon: Droplets, title: "Plomería", desc: "Reparaciones, instalaciones, pérdidas y mantenimiento general." },
  { icon: Hammer, title: "Albañilería", desc: "Refacciones, arreglos estructurales y mantenimiento edilicio." },
  { icon: Paintbrush, title: "Pintura", desc: "Trabajos interiores y exteriores con terminaciones prolijas." },
  { icon: Wrench, title: "Mantenimiento general", desc: "Soluciones completas para consorcios y administraciones." },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Servicios</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-primary">
            Resolvemos todo lo que tu edificio necesita
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Un equipo, varias especialidades. Coordinación clara y resultados
            que se notan.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-accent transition-all duration-300"
            >
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
