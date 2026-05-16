// Hero premium: imagen full, overlay suave, texto izquierda, badges.
import heroImg from "@/assets/hero.jpg";
import { whatsappLink } from "@/lib/site";
import { ArrowRight } from "lucide-react";

const badges = ["24/7 Urgencias", "+20 años de experiencia", "Operarios matriculados"];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <img
        src={heroImg}
        alt="Mantenimiento integral en CABA"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/60 to-brand-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 text-white w-full">
        <div className="max-w-3xl animate-[fade-up_0.9s_ease-out_both]">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Mantenimiento integral · CABA
          </span>
          <h1 className="mt-8 font-display font-extrabold leading-[1.02] text-5xl md:text-7xl lg:text-[5.5rem]">
            Soluciones reales para problemas reales.
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed font-light">
            Mantenimiento integral para consorcios en CABA.
            Rápido, prolijo y sin complicaciones.
          </p>

          <div className="mt-10 flex flex-wrap gap-2.5">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-white/25 bg-white/5 backdrop-blur px-4 py-2 text-xs md:text-sm font-medium text-white/90"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:brightness-95 transition"
            >
              Cotizar por WhatsApp
              <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-base font-medium text-white hover:bg-white hover:text-primary transition"
            >
              Ver trabajos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
