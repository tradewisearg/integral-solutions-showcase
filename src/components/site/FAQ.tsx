// FAQ minimalista con animaciones mejoradas.
import { useReveal } from "@/hooks/use-reveal";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿La visita y el presupuesto cuestan algo?",
    a: "No. La visita es gratuita y el presupuesto es sin cargo y sin compromiso en CABA.",
  },
  {
    q: "¿Cómo evitan que haya costos sorpresa?",
    a: "Entregamos presupuestos detallados por escrito, con precio claro y sin costos ocultos.",
  },
  {
    q: "¿Atienen urgencias?",
    a: "Sí. Respuesta urgente en menos de 1 hora dentro de CABA con coordinación inmediata por WhatsApp.",
  },
  {
    q: "¿Qué tipo de trabajos pueden hacer?",
    a: "Plomería, albañilería, pintura, electricista, arreglos de palieres y mantenimiento integral.",
  },
  {
    q: "¿Quiénes son los responsables de la obra?",
    a: "Equipo propio de operarios matriculados y con experiencia real en edificios.",
  },
  {
    q: "¿Puedo recibir factura y garantía?",
    a: "Sí. Emitimos factura para cada trabajo y tiene seguimiento hasta su finalización.",
  },
  {
    q: "¿Cómo pido el servicio?",
    a: "Enviá un mensaje por WhatsApp con la dirección y descripción del problema; nosotros coordinamos el resto.",
  },
  {
    q: "¿Cómo saben que trabajamos bien?",
    a: "Nuestros clientes recomiendan la rapidez, orden y limpieza. Ofrecemos fotos y detalles durante el proceso.",
  },
];

function FAQSkeleton() {
  return (
    <div className="space-y-4 divide-y divide-border border-t border-b border-border">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="py-6 space-y-2">
          <Skeleton className="w-3/4 h-6 rounded-lg" />
          <Skeleton className="w-full h-4 rounded-lg" />
          <Skeleton className="w-2/3 h-4 rounded-lg" />
        </div>
      ))}
    </div>
  );
}

export function FAQ() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center animate-[fade-up_0.6s_ease-out_both]">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent inline-block">
            FAQ
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary leading-[1.05]">
            Preguntas
            <br />
            <span className="text-foreground/30">frecuentes.</span>
          </h2>
        </div>

        <div
          ref={ref}
          className={`mt-14 transition-all duration-500 ${
            visible ? "animate-[fade-up_0.8s_ease-out_both] opacity-100" : "opacity-0"
          }`}
        >
          {!visible ? (
            <FAQSkeleton />
          ) : (
            <Accordion
              type="single"
              collapsible
              className="divide-y divide-border border-t border-b border-border/50"
            >
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-0">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-display font-semibold text-primary hover:no-underline py-6 hover:text-accent transition-colors group">
                    <span className="flex items-start gap-3">
                      <span className="text-accent font-bold text-sm mt-1 min-w-fit">Q{i + 1}</span>
                      <span>{f.q}</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 font-light ml-12">
                    <span className="text-accent font-bold text-sm mr-2">A:</span>
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
}
