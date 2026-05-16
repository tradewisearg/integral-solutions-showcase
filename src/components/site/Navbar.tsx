// Navbar minimalista premium.
import { whatsappLink, COMPANY_NAME } from "@/lib/site";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <span className="font-display font-extrabold tracking-tight text-primary text-lg leading-none">
            {COMPANY_NAME}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-foreground/70">
          <a href="#servicios" className="hover:text-primary transition">Servicios</a>
          <a href="#proceso" className="hover:text-primary transition">Cómo trabajamos</a>
          <a href="#galeria" className="hover:text-primary transition">Trabajos</a>
          <a href="#nosotros" className="hover:text-primary transition">Nosotros</a>
          <a href="#faq" className="hover:text-primary transition">FAQ</a>
        </nav>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          Cotizar
        </a>
      </div>
    </header>
  );
}
