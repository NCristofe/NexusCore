import Arrow from "../assets/icons/arrow-icon.svg";

export default function CallToAction() {
  return (
    <section
      className="cta-section relative flex flex-col items-center justify-center text-center gap-8 px-6 py-24 bg-gradient-to-b from-gray-950 to-black overflow-hidden"
      aria-labelledby="cta-heading"
      role="region"
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full -top-24"
        aria-hidden="true"
      />

      <h2 id="cta-heading" className="text-4xl md:text-5xl font-extrabold leading-tight max-w-2xl">
        Preparado para elevar a experiência do seu produto
      </h2>

      <p className="text-gray-400 text-lg max-w-xl">
        Converse com nossa equipe para alinhar estratégia, usabilidade e estética, e levar sua interface ao próximo nível.
      </p>

      <a
        href="#contact"
        className="cta-button group inline-flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg text-white font-medium shadow-lg hover:shadow-blue-500/30"
        aria-label="Iniciar projeto — abrir formulário de contato"
      >
        Iniciar projeto
        <img
          src={Arrow}
          alt="Ícone de seta indicando ação"
          className="w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </a>
    </section>
  );
}
