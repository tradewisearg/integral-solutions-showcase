// Galería tipo carrousel: scroll horizontal con snap + controles.
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";

const items = [
  { src: g2, title: "Antes / Después", desc: "Renovación completa de baño." },
  { src: g1, title: "Tablero eléctrico", desc: "Instalación y puesta en seguridad." },
  { src: g3, title: "Pintura interior", desc: "Refacción de oficinas." },
  { src: g4, title: "Reparación estructural", desc: "Trabajos de obra y mantenimiento." },
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
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">Galería</span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-primary">
              Trabajos reales, resultados que hablan
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Mirá algunos de nuestros proyectos: antes, después y todo lo que
              hay en el medio.
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
              key={it.title}
              className="relative shrink-0 w-[85%] sm:w-[60%] lg:w-[45%] snap-start group overflow-hidden rounded-2xl shadow-[var(--shadow-card)]"
            >
              <img
                src={it.src}
                alt={it.title}
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-[380px] md:h-[460px] object-cover group-hover:scale-105 transition duration-700"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-brand-black/85 to-transparent text-primary-foreground">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">{it.title}</p>
                <p className="mt-1 text-lg font-semibold">{it.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
