// Footer simple con redes (placeholders) y derechos.
import { Instagram, Facebook, Linkedin, Wrench } from "lucide-react";
import { COMPANY_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-8 md:grid-cols-2 items-center">
        <div className="flex items-center gap-3">
          <span className="grid place-items-center w-10 h-10 rounded-lg bg-accent text-accent-foreground">
            <Wrench size={18} />
          </span>
          <div>
            <p className="font-display font-bold text-white text-lg">{COMPANY_NAME}</p>
            <p className="text-sm text-white/60">Mantenimiento y soluciones integrales</p>
          </div>
        </div>
        <div className="flex md:justify-end gap-3">
          {[Instagram, Facebook, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              aria-label="Red social"
              className="grid place-items-center w-10 h-10 rounded-full border border-white/15 hover:bg-accent hover:text-accent-foreground hover:border-accent transition"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-white/50 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.</p>
          <p>Hecho con dedicación.</p>
        </div>
      </div>
    </footer>
  );
}
