// Quiénes somos + información adicional.
import { ShieldCheck, Clock, MapPin, Sparkles } from "lucide-react";

const features = [
  { icon: Sparkles, title: "Atención personalizada", desc: "Hablás con personas, no con bots." },
  { icon: ShieldCheck, title: "Presupuestos sin compromiso", desc: "Cotizamos claro antes de empezar." },
  { icon: MapPin, title: "Cobertura amplia", desc: "Trabajamos en CABA y GBA." },
  { icon: Clock, title: "Disponibilidad", desc: "Coordinamos según tu agenda." },
];

export function About() {
  return (
    <section id="nosotros" className="py-24 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Quiénes somos</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold">
            Una empresa pensada para resolverte la vida
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
            Somos un equipo de soluciones integrales con foco en la confianza,
            la calidad y el cumplimiento. Trabajamos de forma profesional pero
            cercana, porque sabemos que cada espacio importa.
          </p>
          <p className="mt-4 text-lg text-primary-foreground/80 leading-relaxed">
            Nos encargamos de todo para que vos no tengas que preocuparte por
            coordinar varios proveedores: un solo contacto, todas las
            soluciones.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm hover:border-accent transition"
            >
              <div className="grid place-items-center w-11 h-11 rounded-lg bg-accent text-accent-foreground">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-1 text-sm text-primary-foreground/75">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
