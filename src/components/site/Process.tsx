// Cómo trabajamos: línea horizontal minimalista, copy corto.
import { MessageSquare, ClipboardCheck, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const steps = [
  { icon: MessageSquare, n: "01", title: "Nos escribís" },
  { icon: ClipboardCheck, n: "02", title: "Evaluamos y coordinamos" },
  { icon: CheckCircle2, n: "03", title: "Lo resolvemos" },
];

export function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="proceso" className="py-24 md:py-32 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Cómo trabajamos
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05]">
            Tres pasos.
            <br />
            <span className="text-foreground/40">Sin vueltas.</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-20 md:mt-24 relative grid gap-12 md:grid-cols-3 ${
            visible ? "animate-[fade-up_1s_ease-out_both]" : "opacity-0"
          }`}
        >
          {/* Línea horizontal */}
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-border" />

          {steps.map(({ icon: Icon, n, title }) => (
            <div key={n} className="relative flex flex-col items-start md:items-center md:text-center">
              <div className="grid place-items-center w-14 h-14 rounded-full bg-background border border-border text-primary relative z-10">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <span className="mt-6 text-xs font-semibold tracking-[0.25em] text-accent uppercase">
                Paso {n}
              </span>
              <h3 className="mt-2 text-2xl md:text-3xl font-display font-bold text-primary">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
