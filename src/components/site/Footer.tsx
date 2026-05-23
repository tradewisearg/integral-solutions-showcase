import { COMPANY_NAME, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-black text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 text-center md:grid-cols-[1fr_auto] md:items-center md:text-left lg:px-10 lg:py-20">
        <div className="flex flex-col items-center gap-6 md:items-start">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <img src="/logo-footer.svg" alt="Logo de la empresa" className="h-12 w-auto" />
            <p className="font-display text-2xl font-extrabold text-white">{COMPANY_NAME}</p>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/55">
            Mantenimiento integral en CABA para edificios, locales y espacios comunes.
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Escribinos</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:brightness-95"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl justify-center px-6 py-6 text-center text-xs text-white/40 lg:px-10">
          <p className="max-w-full leading-relaxed">
            © {new Date().getFullYear()} {COMPANY_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
