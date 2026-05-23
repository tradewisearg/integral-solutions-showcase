import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Mapa } from "@/components/site/Mapa";
import { Process } from "@/components/site/Process";
import { FAQ } from "@/components/site/FAQ";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { SeguridadPage } from "@/routes/seguridad";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <FAQ />
      <Mapa />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seguridad" element={<SeguridadPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
