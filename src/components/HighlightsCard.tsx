import type { ReactNode } from "react";
import {
  FaLaptopCode,
  FaRegCalendarCheck,
  FaMobileAlt,
} from "react-icons/fa";

type Highlight = {
  title: string;
  description: string;
  icon: ReactNode;
};

const highlights: Highlight[] = [
  {
    title: "Diseño Web",
    description: "Creamos páginas modernas, rápidas y responsivas.",
    icon: <FaLaptopCode size={32} className="text-white/90" />,
  },
  {
    title: "Automatización",
    description: "Optimiza reservas y comunicación con clientes.",
    icon: <FaRegCalendarCheck size={32} className="text-white/90" />,
  },
  {
    title: "Digitalización",
    description: "Soluciones prácticas para digitalizar tu negocio local.",
    icon: <FaMobileAlt size={32} className="text-white/90" />,
  },
];

export default function HighlightsCard() {
  return (
    <section className="pt-20 md:pt-14 px-4 max-w-6xl md:max-w-full mx-auto grid grid-cols-1 md:flex gap-8 md:gap-12">
      {highlights.map((item, index) => (
        <div
          key={index}
          className="w-full h-auto p-6 flex flex-col justify-center items-center
                      bg-white/10 backdrop-blur-3xl rounded-2xl
                      border border-white/20 shadow-2xl shadow-black/20
                      relative overflow-hidden
                      transition-transform duration-500 ease-out
                      hover:scale-105 hover:bg-white/20"
          style={{
            animation: `fadeInUp 0.6s ease-out forwards`,
            animationDelay: `${index * 150}ms`,
          }}
        >
          <div className="mb-4">{item.icon}</div>
          <h3 className="text-lg md:text-xl font-bold text-white mb-2 text-center">
            {item.title}
          </h3>
          <p className="text-gray-300 text-center text-sm md:text-base">
            {item.description}
          </p>

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
