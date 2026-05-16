// Configuración rápida del sitio: editá WhatsApp y datos de contacto acá.
export const WHATSAPP_NUMBER = "5491100000000"; // reemplazar por número real

// Mensaje pre-cargado optimizado para que el cliente envíe toda la info de entrada.
export const WHATSAPP_MESSAGE = `Hola, quiero solicitar un presupuesto.

📍 Dirección:
🛠 Tipo de trabajo:
📝 Detalle del problema:
📸 (Adjunto fotos si tengo)

Quedo a la espera, gracias.`;

export const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

export const COMPANY_NAME = "Soluciones Integrales";
export const RESPONSIBLE_NAME = "Elías";
export const SERVICE_AREA = "CABA";
