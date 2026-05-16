import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { TrustBlock } from "@/components/site/TrustBlock";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Gallery } from "@/components/site/Gallery";
import { About } from "@/components/site/About";
import { Stats } from "@/components/site/Stats";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Soluciones Integrales · Mantenimiento para consorcios en CABA" },
      {
        name: "description",
        content:
          "Mantenimiento integral para consorcios en CABA. Rápido, prolijo y sin complicaciones. Plomería, albañilería, pintura y más. 24/7.",
      },
      { property: "og:title", content: "Soluciones Integrales" },
      {
        property: "og:description",
        content:
          "Soluciones reales para problemas reales. Mantenimiento integral para consorcios en CABA.",
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
        <TrustBlock />
        <Services />
        <Gallery />
        <Process />
        <About />
        <Stats />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}
