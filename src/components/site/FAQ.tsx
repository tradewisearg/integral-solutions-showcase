// FAQ minimalista.
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿La visita tiene costo?", a: "No, la visita es totalmente gratuita." },
  { q: "¿El presupuesto tiene costo?", a: "No, es sin cargo y sin compromiso." },
  { q: "¿En qué zonas trabajan?", a: "Trabajamos únicamente en CABA." },
  { q: "¿Atienden urgencias?", a: "Sí, brindamos atención 24/7." },
  { q: "¿Cuánto tardan en responder?", a: "Respondemos dentro de la primera hora." },
  { q: "¿Cuánto tarda el presupuesto?", a: "Se entrega dentro de las 24 horas." },
  { q: "¿Quién realiza los trabajos?", a: "Operarios capacitados y matriculados con más de 20 años de experiencia." },
  { q: "¿Cómo entregan el trabajo?", a: "Listo para usar, limpio y en condiciones óptimas." },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            FAQ
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-display font-bold text-primary leading-[1.05]">
            Preguntas
            <br />
            <span className="text-foreground/40">frecuentes.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-14 divide-y divide-border border-t border-b border-border">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border-0"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-display font-semibold text-primary hover:no-underline py-6 hover:text-accent transition-colors">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg text-muted-foreground leading-relaxed pb-6 font-light">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
