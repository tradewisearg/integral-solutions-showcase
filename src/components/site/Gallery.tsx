// Galería tipo carrousel: scroll horizontal con snap + controles.
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

// "Trabajos recientes": fotos reales, fecha y tipo de trabajo.
const items = [
  { src: g2, tag: "Plomería", date: "Mayo 2026", title: "Reparación de pérdida", place: "Edificio en Palermo" },
  { src: g1, tag: "Mantenimiento", date: "Abril 2026", title: "Tablero eléctrico", place: "Consorcio en Recoleta" },
  { src: g3, tag: "Pintura", date: "Marzo 2026", title: "Pintura de palier", place: "Edificio en Caballito" },
  { src: g4, tag: "Albañilería", date: "Marzo 2026", title: "Arreglo estructural", place: "Consorcio en Belgrano" },
];

export function Gallery() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Trabajos recientes</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-primary">
              Trabajos reales — antes y después
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Mostramos resultados reales de nuestro trabajo en consorcios de CABA.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Anterior"
              className="grid place-items-center w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Siguiente"
              className="grid place-items-center w-12 h-12 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={scrollerRef}
          className="mt-12 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((it) => (
            <figure
              key={it.title + it.place}
              className="relative shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] snap-start group overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
            >
              <img
                src={it.src}
                alt={`${it.title} — ${it.place}`}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-[380px] md:h-[460px] object-cover group-hover:scale-105 transition duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                  {it.tag}
                </span>
                <span className="rounded-full bg-brand-black/70 text-white px-3 py-1 text-xs font-medium backdrop-blur">
                  {it.date}
                </span>
              </div>
              <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-brand-black/85 to-transparent text-primary-foreground">
                <p className="text-lg font-semibold">{it.title}</p>
                <p className="mt-1 text-sm text-primary-foreground/80">{it.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
