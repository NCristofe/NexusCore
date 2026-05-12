import Header from "../components/Header";
import Hero from "../components/Hero";
import Specialities from "../components/Specialities";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import BlobCursor from "../components/BlobCursor";
import PixelCard from "../components/PixelCard";

export default function LandingPage() {
  return (
    <div className="bg-black text-white overflow-x-hidden relative font-sans">
      {/* Cursor animado */}
      <BlobCursor />

      {/* Header fixo */}
      <Header />

      <main className="pt-[90px] max-w-screen-xl mx-auto px-4">
        {/* Hero Section */}
        <section id="hero" className="py-24">
          <Hero />
        </section>

        {/* Especialidades */}
        <section id="specialities" className="py-24">
          <Specialities />
        </section>

        {/* Projetos com PixelCard */}
        <section id="projects" className="py-24">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <PixelCard variant="default">
              <div style={{ position: "absolute", color: "white", fontSize: "1.2rem" }}>
                Projeto A
              </div>
            </PixelCard>
            <PixelCard variant="blue">
              <div style={{ position: "absolute", color: "white", fontSize: "1.2rem" }}>
                Projeto B
              </div>
            </PixelCard>
            <PixelCard variant="pink">
              <div style={{ position: "absolute", color: "white", fontSize: "1.2rem" }}>
                Projeto C
              </div>
            </PixelCard>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" className="py-24">
          <CallToAction />
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-gray-700">
          <Footer />
        </footer>
      </main>
    </div>
  );
}
