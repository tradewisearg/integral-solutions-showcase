import { MessageSquare, ClipboardCheck, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Skeleton } from "@/components/ui/skeleton";

const steps = [
  { icon: MessageSquare, n: "01", title: "Nos escribís" },
  { icon: ClipboardCheck, n: "02", title: "Coordinamos y presupuestamos" },
  { icon: CheckCircle2, n: "03", title: "Lo resolvemos" },
];

function ProcessSkeleton() {
  return (
    <div className="grid gap-12 md:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex flex-col items-start md:items-center md:text-center space-y-4">
          <Skeleton className="w-14 h-14 rounded-full" />
          <Skeleton className="w-16 h-3 rounded-full" />
          <Skeleton className="w-32 h-6 rounded-lg" />
        </div>
      ))}
    </div>
  );
}

export function Process() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="proceso" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center animate-[fade-up_0.6s_ease-out_both]">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent inline-block">
            Cómo trabajamos
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-[1.05]">
            Tres pasos.
            <br />
            <span className="text-foreground/30">Sin vueltas.</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-20 md:mt-24 relative transition-all duration-500 ${
            visible ? "animate-[fade-up_0.8s_ease-out_both] opacity-100" : "opacity-0"
          }`}
        >
          {!visible ? (
            <ProcessSkeleton />
          ) : (
            <div className="relative grid gap-12 md:grid-cols-3">
              {/* Línea horizontal */}
              <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />

              {steps.map(({ icon: Icon, n, title }, idx) => (
                <div
                  key={n}
                  className="relative flex flex-col items-start md:items-center md:text-center group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="grid place-items-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 text-accent group-hover:border-accent/50 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] relative z-10 transition-all duration-300">
                    <Icon
                      size={24}
                      strokeWidth={1.5}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className="mt-6 text-xs font-semibold tracking-[0.3em] text-accent/70 uppercase">
                    Paso {n}
                  </span>
                  <h3 className="mt-3 text-2xl md:text-3xl font-display font-bold text-primary leading-snug">
                    {title}
                  </h3>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
