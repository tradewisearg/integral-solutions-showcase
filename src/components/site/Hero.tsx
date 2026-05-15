// Hero principal con imagen de fondo y dos CTAs.
import heroImg from "@/assets/hero.jpg";
import { whatsappLink } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center pt-16 overflow-hidden">
      <img
        src={heroImg}
        alt="Equipo de mantenimiento trabajando"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/20" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 text-primary-foreground">
        <span className="inline-flex items-center gap-2 rounded-full bg-accent/95 px-4 py-1.5 text-xs font-semibold text-accent-foreground uppercase tracking-wider">
          Mantenimiento integral
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl">
          Un solo contacto, <span className="text-accent">todas las soluciones</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          Nos encargamos del mantenimiento con agilidad, organización y
          seguimiento completo.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:brightness-95 transition"
          >
            Cotizar presupuesto
            <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-primary-foreground/10 px-7 py-4 text-base font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20 transition"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
