// Botón flotante de WhatsApp.
import { whatsappLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[var(--shadow-soft)] hover:scale-110 transition"
    >
      <MessageCircle size={26} />
    </a>
  );
}
