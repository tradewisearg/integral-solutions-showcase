// Stats: bloque diferencial estilo agencia.
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { value: "+20", label: "Años de experiencia" },
  { value: "<1h", label: "Tiempo de respuesta" },
  { value: "24hs", label: "Para presupuesto" },
  { value: "24/7", label: "Atención de urgencias" },
];

export function Stats() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 md:py-32 bg-primary text-primary-foreground">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 lg:px-10 ${
          visible ? "animate-[fade-up_1s_ease-out_both]" : "opacity-0"
        }`}
      >
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Por qué elegirnos
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-display font-bold leading-[1.1]">
            Números que respaldan lo que decimos.
          </h2>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-white/15 pt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl tracking-tight text-accent">
                {s.value}
              </p>
              <p className="mt-3 text-sm md:text-base text-white/70 font-light">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
