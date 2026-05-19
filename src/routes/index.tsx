import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Mapa } from "@/components/site/Mapa";
import { Process } from "@/components/site/Process";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Soluciones Integrales ·Edificios en CABA" },
      {
        name: "description",
        content:
          "Mantenimiento integral de edificios en CABA. Respuesta en menos de 1 hora, presupuesto sin cargo y atención 24HS.",
      },
      {
        name: "keywords",
        content:
          "mantenimiento edificios CABA, plomería CABA, albañilería edificios, pintura edificios, urgencias 24HS, presupuesto gratis",
      },
      { name: "robots", content: "index, follow" },
      {
        property: "og:title",
        content: "Soluciones Integrales · Mantenimiento para edificios en CABA",
      },
      {
        property: "og:description",
        content:
          "Atendemos edificios en CABA con trabajos prolijos, presupuestos transparentes y respuesta rápida. Cotizá ya por WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "es_AR" },
      { property: "twitter:card", content: "summary_large_image" },
      {
        property: "twitter:title",
        content: "Soluciones Integrales · Mantenimiento para edificios en CABA",
      },
      {
        property: "twitter:description",
        content:
          "Mantenimiento integral para edificios en CABA con urgencias 24HS, presupuesto gratis y servicio profesional.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <main className="bg-white">
        <div className="pt-0">
          <Process />
          <Services />
          <Mapa />
          <FAQ />
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
