// Proceso en 3 pasos.
import { Phone, FileText, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: Phone, n: "01", title: "Contacto inicial", desc: "Nos escribís, te escuchamos y entendemos qué necesitás." },
  { icon: FileText, n: "02", title: "Organización y presupuesto", desc: "Te pasamos un presupuesto claro y armamos el plan de trabajo." },
  { icon: CheckCircle2, n: "03", title: "Ejecución y seguimiento", desc: "Hacemos el trabajo y te mantenemos al tanto de cada avance." },
];

export function Process() {
  return (
    <section id="proceso" className="py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Cómo trabajamos</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-primary">
            Simple, ordenado y sin sorpresas
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map(({ icon: Icon, n, title, desc }) => (
            <div key={n} className="relative rounded-2xl bg-card p-8 shadow-[var(--shadow-card)]">
              <span className="font-display text-6xl font-extrabold text-accent/30 leading-none">
                {n}
              </span>
              <Icon className="absolute top-8 right-8 text-primary" size={28} />
              <h3 className="mt-4 text-2xl font-bold text-primary">{title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
