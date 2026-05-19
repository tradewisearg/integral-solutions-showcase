import { useEffect, useState } from "react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const imagePairs = [
  { before: g1, after: g2, label: "Reparación - Antes y Después" },
  { before: g3, after: g4, label: "Transformación - Antes y Después" },
];

export function BeforeAfter() {
  const [currentPair, setCurrentPair] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPair((prev) => (prev + 1) % imagePairs.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const pair = imagePairs[currentPair];

  return (
    <section id="antes-despues" className="py-24 md:py-32 section-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05]">
            Cambios reales y comprobables.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl font-light">
            Calidad garantizada que se ve en cada detalle. Antes y después de nuestros trabajos, la
            diferencia es clara.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_30px_80px_-50px_rgba(31,58,95,0.25)]">
            <div
              className={`h-[400px] relative transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <img src={pair.before} alt="Antes" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-white/95 px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider">
                ANTES
              </span>
            </div>
          </article>

          <article className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card shadow-[0_30px_80px_-50px_rgba(31,58,95,0.25)]">
            <div
              className={`h-[400px] relative transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <img src={pair.after} alt="Después" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-accent/95 px-4 py-2 text-xs font-semibold text-accent-foreground uppercase tracking-wider">
                DESPUÉS
              </span>
            </div>
          </article>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2">
          {imagePairs.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentPair(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentPair ? "w-8 bg-primary" : "w-2 bg-border hover:bg-foreground/30"
              }`}
              aria-label={`Ir al par ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
