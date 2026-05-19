import { whatsappLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Urgencias 24HS por WhatsApp"
      className="group fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3.5 shadow-[0_10px_30px_-5px_rgba(37,211,102,0.55)] hover:scale-105 transition-transform sm:bottom-6 sm:right-6"
    >
      <span className="relative grid place-items-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-white/40 animate-ping" />
        <MessageCircle size={22} className="relative" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight text-left">
        <span className="text-[10px] uppercase tracking-wider font-bold opacity-90">Urgencias</span>
        <span className="text-sm font-semibold">24HS WhatsApp</span>
      </span>
    </a>
  );
}
