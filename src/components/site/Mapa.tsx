import cabaMap from "@/assets/cabaMap.jpg";
import { useReveal } from "@/hooks/use-reveal";
import { Skeleton } from "@/components/ui/skeleton";

function MapaSkeleton() {
  return <Skeleton className="w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl" />;
}

export function Mapa() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="mapa" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center animate-[fade-up_0.6s_ease-out_both]">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent inline-block">
            Zona de cobertura
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-[1.05]">
            Llevamos soluciones a toda CABA.
          </h2>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl font-light">
            Operamos en toda la Ciudad Autónoma de Buenos Aires con atención rápida y servicio
            profesional.
          </p>
        </div>

        <div
          ref={ref}
          className={`mt-16 overflow-hidden rounded-2xl border border-border/50 shadow-lg transition-all duration-500 ${
            visible ? "animate-[fade-up_0.8s_ease-out_both] opacity-100" : "opacity-0"
          }`}
        >
          {!visible ? (
            <MapaSkeleton />
          ) : (
            <img
              src={cabaMap}
              alt="Mapa de cobertura de CABA"
              className="w-full h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </section>
  );
}
