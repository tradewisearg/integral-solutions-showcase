import { useEffect, useState } from "react";
import { Navbar } from "@/components/site/Navbar";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export function SeguridadPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 120;
    const step = 4;
    const interval = window.setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        window.clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-20 py-24 md:py-32 section-surface">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Seguridad y respaldo
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-display font-bold text-primary leading-tight">
            Respaldo para trabajar tranquilos
            <br />
            en tu edificio.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/70">
            Datos concretos para administraciones y propietarios: experiencia, seguimiento y
            condiciones claras antes de empezar cada trabajo.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            <div className="rounded-[2rem] border border-border bg-white/90 p-10 shadow-[var(--shadow-card)]">
              <p className="text-5xl font-display font-extrabold text-primary tracking-tight">
                {count}+
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-accent font-semibold">
                Clientes atendidos
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                Experiencia acumulada en reparaciones, urgencias y mantenimiento edilicio.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-white/90 p-10 shadow-[var(--shadow-card)]">
              <p className="text-5xl font-display font-extrabold text-primary tracking-tight">6</p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-accent font-semibold">
                Meses de garantía
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                Dejamos asentadas las condiciones de garantía según el trabajo realizado.
              </p>
            </div>

            <div className="rounded-[2rem] border border-border bg-white/90 p-10 shadow-[var(--shadow-card)]">
              <p className="text-5xl font-display font-extrabold text-primary tracking-tight">
                24HS
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-accent font-semibold">
                Soporte urgente
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/70">
                Priorizamos fallas que afectan el funcionamiento del edificio o comercio.
              </p>
            </div>
          </div>
        </div>
        <BeforeAfter />
      </section>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
