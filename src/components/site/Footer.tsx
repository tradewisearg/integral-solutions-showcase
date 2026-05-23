// Footer premium minimalista.
import { COMPANY_NAME, whatsappLink, RESPONSIBLE_NAME } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-12 md:grid-cols-3">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <img src="/logo-footer.svg" alt="Logo de la empresa" className="h-12 w-auto" />
            <p className="font-display font-extrabold text-white text-2xl">{COMPANY_NAME}</p>
          </div>
          <p className="text-sm text-white/55 max-w-xs leading-relaxed">
            Mantenimiento integral en CABA. Rápido, prolijo y sin complicaciones.
          </p>
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
          <p>
            © {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
