import Header from "../components/Header";
import Hero from "../components/Hero";
import Specialities from "../components/Specialities";
import Projects from "../components/Projects";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import BlobCursor from "../components/BlobCursor";

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

        {/* Projetos */}
        <Projects />

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
