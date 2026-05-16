import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Soluciones Integrales · Mantenimiento y servicios" },
      {
        name: "description",
        content:
          "Un solo contacto, todas las soluciones. Electricidad, plomería, obras y mantenimiento integral con seguimiento completo.",
      },
      { property: "og:title", content: "Soluciones Integrales" },
      {
        property: "og:description",
        content:
          "Mantenimiento integral con agilidad, organización y seguimiento.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
