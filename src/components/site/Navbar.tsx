import { useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappLink, COMPANY_NAME } from "@/lib/site";

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/seguridad", label: "Seguridad" },
  { href: "/#proceso", label: "Cómo trabajamos" },
  { href: "/#faq", label: "FAQ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="/#inicio" className="flex items-center gap-3 group">
          <img src="/logo-hero.svg" alt="Logo de la empresa" className="h-10 w-auto" />

          <span className="font-display font-extrabold tracking-tight text-primary text-lg leading-none">
            {COMPANY_NAME}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-foreground/70">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Cotizar por WhatsApp
          </a>

          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 bg-white/90 text-foreground shadow-sm transition hover:bg-white"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <nav
        className={`md:hidden absolute inset-x-0 top-full z-40 overflow-hidden bg-background/95 border-b border-border/70 transition-all duration-300 ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 pb-6 pt-4">
          <div className="flex flex-col gap-4 text-base font-medium text-foreground/90">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-4 py-3 hover:bg-secondary/80 transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Cotizar por WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
