// Footer premium minimalista.
import { COMPANY_NAME, whatsappLink, RESPONSIBLE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-3">
        <div>
          <p className="font-display font-extrabold text-white text-2xl">{COMPANY_NAME}</p>
          <p className="mt-3 text-sm text-white/55 max-w-xs leading-relaxed">
            Mantenimiento integral para consorcios en CABA. Rápido, prolijo y sin complicaciones.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Contacto</p>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li className="text-white/70">Responsable: <span className="text-white">{RESPONSIBLE_NAME}</span></li>
            <li className="text-white/70">Zona: <span className="text-white">CABA</span></li>
            <li className="text-white/70">Atención: <span className="text-white">24/7</span></li>
          </ul>
        </div>

        <div className="md:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Escribinos</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3 text-sm font-semibold hover:brightness-95 transition"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 text-xs text-white/40 flex flex-wrap justify-between gap-2">
          <p>© {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.</p>
          <p>Hecho con dedicación.</p>
        </div>
      </div>
    </footer>
  );
}
