import Arrow from "../assets/icons/arrow-icon.svg";

export default function CallToAction() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center gap-8 px-6 py-24 bg-gradient-to-b from-gray-950 to-black overflow-hidden">

      {/* glow background */}
      <div className="absolute w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full top-[-100px]"></div>

      <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
        Pronto para transformar <br className="hidden md:block"/> sua interface?
      </h2>

      <p className="text-gray-400 text-lg max-w-xl">
        Vamos conversar sobre como podemos ajudar seu produto a alcançar
        o próximo nível em usabilidade e estética.
      </p>

      <a
        href="#"
        className="group flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded-lg text-white font-medium shadow-lg hover:shadow-blue-500/30"
      >
        Iniciar um projeto
        <img
          src={Arrow}
          alt="Seta"
          className="w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

    </section>
  );
}