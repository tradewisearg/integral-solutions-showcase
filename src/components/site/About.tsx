// Quiénes somos + información clave.
import { MapPin, Clock, MessageCircle, FileText, HardHat } from "lucide-react";
import { RESPONSIBLE_NAME } from "@/lib/site";

const info = [
  { icon: MapPin, title: "Zona", desc: "CABA" },
  { icon: Clock, title: "Atención", desc: "24 horas" },
  { icon: MessageCircle, title: "Respuesta", desc: "Dentro de 1 hora" },
  { icon: FileText, title: "Presupuesto", desc: "Sin cargo y sin compromiso" },
  { icon: HardHat, title: "Responsable", desc: RESPONSIBLE_NAME },
];

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Quiénes somos</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold">
            +20 años resolviendo edificios en CABA
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            Somos un equipo con más de 20 años de experiencia en mantenimiento
            y reparaciones para consorcios y administradores.
          </p>
          <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
            Trabajamos con personal capacitado y matriculado, brindando
            soluciones rápidas, eficientes y con seguimiento en cada trabajo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {info.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm hover:border-accent transition"
            >
              <div className="grid place-items-center w-11 h-11 rounded-lg bg-accent text-accent-foreground">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                {title}
              </h3>
              <p className="mt-1 text-lg font-bold">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
