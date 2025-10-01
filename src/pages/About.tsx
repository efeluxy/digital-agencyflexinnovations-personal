import logo from "../assets/logo/logo.png";
import Button from "../components/Button";

export default function About() {
  return (
    <section id="Sobre Nosotros" className="flex items-center min-h-screen justify-center px-6 md:px-16">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Imagen con glow */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-8 rounded-full blur-3xl opacity-50 animate-pulse"></div>
          <img
            src={logo}
            alt="logo"
            className="relative w-52 h-52 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl shadow-2xl z-10"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-200 bg-clip-text text-transparent">
            Quiénes somos
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed">
            Somos un equipo joven y creativo que ayuda a negocios locales a dar
            el salto digital. Diseñamos páginas web modernas, rápidas y
            adaptadas a cada cliente, y además integramos automatizaciones que
            simplifican su día a día. Nuestro objetivo es que cada negocio gane
            visibilidad, atraiga más clientes y ahorre tiempo gracias a la
            tecnología.
          </p>

          {/* CTA */}
          <div className="flex justify-center md:justify-start">
            <Button text="Hablemos de tu proyecto" />
          </div>
        </div>
      </div>
    </section>
  );
}
