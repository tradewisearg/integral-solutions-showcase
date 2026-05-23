// Este archivo ya no se utiliza - la aplicación usa App.tsx sin routing

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
