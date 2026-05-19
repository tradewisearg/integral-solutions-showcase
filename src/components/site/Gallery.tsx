// Galería protagonista: slider grande con cards y tag "Trabajo real en CABA".
import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g2, tag: "Plomería", date: "Mayo 2026", title: "Reparación de pérdida", place: "Palermo" },
  { src: g1, tag: "Mantenimiento", date: "Abril 2026", title: "Tablero eléctrico", place: "Recoleta" },
  { src: g3, tag: "Pintura", date: "Marzo 2026", title: "Pintura de palier", place: "Caballito" },
  { src: g4, tag: "Albañilería", date: "Marzo 2026", title: "Arreglo estructural", place: "Belgrano" },
];

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" });
  };

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              Trabajos recientes
            </span>
            <h2 className="mt-6 text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05]">
              Trabajos reales,
              <br />
              <span className="text-foreground/40">resultados que se ven.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="grid place-items-center w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              className="grid place-items-center w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="mt-16 flex gap-5 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 px-6 lg:px-10 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((it) => (
          <figure
            key={it.title + it.place}
            className="relative shrink-0 w-[88%] sm:w-[65%] lg:w-[52%] xl:w-[46%] snap-start group overflow-hidden rounded-3xl"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={it.src}
                alt={`${it.title} — ${it.place}`}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-[420px] md:h-[560px] object-cover group-hover:scale-105 transition duration-[1200ms] ease-out"
              />
            </div>
            <span className="absolute top-5 left-5 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3.5 py-1.5 text-[11px] font-semibold text-primary uppercase tracking-wider">
              <MapPin size={12} />
              Trabajo real en CABA
            </span>
            <figcaption className="absolute inset-x-0 bottom-0 p-7 md:p-10 bg-gradient-to-t from-brand-black/95 via-brand-black/50 to-transparent text-white">
              <div className="flex items-center gap-2 text-xs font-medium text-accent uppercase tracking-wider">
                <span>{it.tag}</span>
                <span className="text-white/50">·</span>
                <span className="text-white/70">{it.date}</span>
              </div>
              <h3 className="mt-2 text-2xl md:text-3xl font-display font-bold">{it.title}</h3>
              <p className="mt-1 text-white/75 text-base">{it.place}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
