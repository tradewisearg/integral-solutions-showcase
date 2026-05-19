// CTA final premium: fondo azul oscuro.
import { whatsappLink } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-40 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,183,5,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] tracking-tight">
          ¿Tenés un problema
          <br />
          <span className="text-accent">que resolver?</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-white/75 max-w-xl mx-auto font-light">
          Escribinos ahora y te damos una solución.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-12 inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-base md:text-lg font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:brightness-95 transition"
        >
          Cotizar por WhatsApp
          <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
        </a>
      </div>
    </section>
  );
}
