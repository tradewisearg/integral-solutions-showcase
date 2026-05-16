// Hero principal con imagen de fondo, bullets de confianza y CTA.
import heroImg from "@/assets/hero.jpg";
import { whatsappLink } from "@/lib/site";
import { ArrowRight, Check } from "lucide-react";

const trustBullets = [
  "Atención 24/7 (urgencias incluidas)",
  "Visita sin costo",
  "Presupuesto en 24hs",
  "Trabajos limpios y completos",
];

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
          +20 años de experiencia · CABA
        </span>
        <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] max-w-4xl">
          Un solo contacto, <span className="text-accent">todas las soluciones</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-primary-foreground/85 leading-relaxed">
          Más de 20 años de experiencia. Operarios matriculados, respuesta
          rápida y trabajos garantizados en CABA.
        </p>

        {/* Bullets de confianza */}
        <ul className="mt-8 grid sm:grid-cols-2 gap-3 max-w-xl">
          {trustBullets.map((b) => (
            <li key={b} className="flex items-start gap-2 text-sm md:text-base text-primary-foreground/90">
              <span className="mt-0.5 grid place-items-center w-5 h-5 rounded-full bg-accent text-accent-foreground shrink-0">
                <Check size={14} strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:brightness-95 transition"
          >
            Cotizar por WhatsApp
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
