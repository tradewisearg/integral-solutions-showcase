// CTA final con botón grande a WhatsApp.
import { whatsappLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 bg-accent">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-brand-black leading-tight">
          ¿Necesitás resolverlo hoy?
        </h2>
        <p className="mt-5 text-lg text-brand-black/75 max-w-xl mx-auto">
          Escribinos por WhatsApp. Visita sin costo, presupuesto en 24hs y respuesta dentro de la primera hora.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-9 py-5 text-lg font-semibold text-primary-foreground shadow-[var(--shadow-soft)] hover:brightness-110 transition"
        >
          <MessageCircle size={22} />
          Cotizar presupuesto por WhatsApp
        </a>
      </div>
    </section>
  );
}
