import type { ReactNode } from "react";
import { FaPalette, FaRobot, FaGlobeEurope } from "react-icons/fa";

type Highlight = {
  title: string;
  description: string;
  icon: ReactNode;
};

const highlights: Highlight[] = [
  {
    title: "Diseño Web",
    description: "Concebimos y creamos webs o apps webs flexibles, adaptandonos a cada caso y a cada necesidad.",
    icon: <FaPalette size={36} className="text-blue-300" />,
  },
  {
    title: "Automatización",
    description: "Automatiza tu flujo de clientes con chatbots y agentes, ahorra tiempo y costes de personal.",
    icon: <FaRobot size={36} className="text-blue-300" />,
  },
  {
    title: "Digitalización",
    description: "Renueva tu imagen: web, contenido audiovisual, reseñas y presencia digital a medida para cada caso.",
    icon: <FaGlobeEurope size={36} className="text-blue-300" />,
  },
];

export default function HighlightsCard() {
  return (
    <section className="pt-20 md:pt-14 px-4 max-w-6xl md:max-w-full mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
      {highlights.map((item, index) => (
        <div
          key={index}
          className="w-full h-auto min-w-[220px] max-w-[320px] min-h-[320px] p-10 flex flex-col justify-between items-center
                      bg-white/10 backdrop-blur-3xl rounded-2xl
                      border border-blue-300
                      relative overflow-hidden
                      transition-transform duration-500 ease-out
                      hover:scale-105 hover:bg-white/20"
          style={{
            animation: `fadeInUp 0.6s ease-out forwards`,
            animationDelay: `${index * 150}ms`,
          }}
        >
          <div className="flex flex-col flex-1 items-center justify-between w-full h-full gap-4">
            <div className="flex-1 flex items-end justify-center">{item.icon}</div>
            <h3 className="flex-1 flex items-center justify-center text-xl md:text-2xl font-bold text-white text-center">
              {item.title}
            </h3>
            <p className="flex-1 flex items-start justify-center text-gray-300 text-center text-base md:text-lg">
              {item.description}
            </p>
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5
                        rounded-2xl pointer-events-none opacity-0 hover:opacity-100
                        transition-opacity duration-700"
          ></div>
        </div>
      ))}
    </section>
  );
}
