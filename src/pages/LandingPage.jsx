import Header from "../components/Header";
import Hero from "../components/Hero";
import Specialities from "../components/Specialities";
import Projects from "../components/Projects";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-main">
        <Hero />
        <Specialities />
        <Projects />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
