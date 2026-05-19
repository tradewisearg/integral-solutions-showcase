// Quiénes somos: imagen + texto, layout asimétrico premium.
import g1 from "@/assets/gallery-1.jpg";
import { useReveal } from "@/hooks/use-reveal";

export function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
          visible ? "animate-[fade-up_1s_ease-out_both]" : "opacity-0"
        }`}
      >
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Quiénes somos
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-[1.05]">
            Más de 20 años resolviendo problemas reales.
          </h2>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed font-light">
            Trabajamos con rapidez, orden y responsabilidad en consorcios de
            CABA. Nuestro objetivo es simple: que no tengas que preocuparte.
          </p>
        </div>

        <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-3xl">
          <img
            src={g1}
            alt="Equipo trabajando en consorcio"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}
