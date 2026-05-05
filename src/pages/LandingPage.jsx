import Header from "../components/Header";
import Hero from "../components/Hero";
import Specialities from "../components/Specialities";
import Projects from "../components/Projects";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function LandingPage() {
  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Header />

      {/* compensação do header fixo */}
      <main className="pt-[90px]">

        <Reveal>
          <Hero />
        </Reveal>

        <Reveal delay={100}>
          <Specialities />
        </Reveal>

        <Reveal delay={200}>
          <Projects />
        </Reveal>

        <Reveal delay={300}>
          <CallToAction />
        </Reveal>

        <Reveal delay={100}>
          <Footer />
        </Reveal>

      </main>

    </div>
  );
}