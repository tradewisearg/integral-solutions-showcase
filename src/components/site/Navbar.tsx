// Navbar fijo con logo de marca y CTA a WhatsApp.
import { whatsappLink, COMPANY_NAME } from "@/lib/site";
import { Wrench } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2 font-display font-bold text-primary">
          <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">
            <Wrench size={18} />
          </span>
          <span className="text-lg">{COMPANY_NAME}</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <a href="#servicios" className="hover:text-primary transition">Servicios</a>
          <a href="#proceso" className="hover:text-primary transition">Cómo trabajamos</a>
          <a href="#galeria" className="hover:text-primary transition">Galería</a>
          <a href="#nosotros" className="hover:text-primary transition">Nosotros</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
        </nav>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground hover:brightness-95 transition shadow-[var(--shadow-soft)]"
        >
          Cotizar
        </a>
      </div>
    </header>
  );
}
