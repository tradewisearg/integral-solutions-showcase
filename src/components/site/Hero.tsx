// Hero premium: imagen full, overlay suave, texto izquierda, badges.
import heroImg from "@/assets/hero.jpg";
import { whatsappLink } from "@/lib/site";
import { ArrowRight } from "lucide-react";

const badges = ["24HS Urgencias", "+20 años de experiencia", "Operarios matriculados"];

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Mantenimiento integral en CABA"
        width={1920}
        height={1280}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-black/85 via-brand-black/60 to-brand-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,183,5,0.12),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-24 lg:py-32 text-white w-full text-center">
        <div className="mx-auto max-w-3xl animate-[fade-up_0.9s_ease-out_both]">
          <h1 className="mt-8 font-display font-extrabold leading-[1.02] text-5xl md:text-7xl lg:text-[5.5rem]">
            Todas las soluciones, en un solo lugar.
          </h1>
          <p className="mt-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed font-light">
            Atención las 24HS en CABA. Presupuesto gratis, respuesta en menos de 1 hora y trabajo
            prolijo sin sorpresas.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full border border-yellow-400/50 bg-yellow-500/15 backdrop-blur px-4 py-2 text-xs md:text-sm font-medium text-yellow-300 shadow-[0_0_20px_rgba(234,179,8,0.4)] hover:shadow-[0_0_30px_rgba(234,179,8,0.6)] transition-shadow duration-300"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl p-8 lg:p-12 relative overflow-hidden shadow-[0_30px_90px_-40px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,183,5,0.15),transparent_60%)]" />
            <div className="relative mx-auto max-w-5xl text-center">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] tracking-tight text-white">
                ¿Tenés un problema
                <br />
                <span className="text-accent">que resolver?</span>
              </h2>
              <p className="mt-8 text-lg md:text-xl text-white/80 max-w-xl mx-auto font-light">
                Nos ocupamos de todo con presupuesto, trabajo ordenado y atención urgente.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-12 inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-base md:text-lg font-semibold text-accent-foreground shadow-[var(--shadow-soft)] hover:brightness-95 transition"
              >
                Solicitar presupuesto
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
