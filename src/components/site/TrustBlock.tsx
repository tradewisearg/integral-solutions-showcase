// Bloque de confianza: 3 columnas con íconos finos.
import { Zap, Award, Eye } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const pillars = [
  { icon: Zap, title: "Rapidez", desc: "Respondemos en menos de 1 hora." },
  { icon: Award, title: "Profesionalismo", desc: "Equipo matriculado con experiencia real." },
  { icon: Eye, title: "Seguimiento", desc: "Nos encargamos hasta que esté resuelto." },
];

export function TrustBlock() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 bg-background">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-x-12 gap-y-14 ${
          visible ? "animate-[fade-up_0.9s_ease-out_both]" : "opacity-0"
        }`}
      >
        {pillars.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex flex-col">
            <Icon className="text-accent" size={32} strokeWidth={1.5} />
            <h3 className="mt-8 text-2xl md:text-3xl font-display font-bold text-primary">
              {title}
            </h3>
            <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed font-light">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
