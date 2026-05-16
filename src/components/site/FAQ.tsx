// Preguntas frecuentes.
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
    <section id="faq" className="py-24 bg-secondary">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">FAQ</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-primary">
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Todo lo que necesitás saber antes de contactarnos.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 shadow-[var(--shadow-card)]"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
