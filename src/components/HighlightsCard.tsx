// ===============================
// Componente HighlightsCardCarousel
// Carousel de tarjetas destacadas con animación y navegación
// ===============================

import { useState } from "react";
import { FaBrain, FaRobot, FaChartLine } from "react-icons/fa";
import type { ReactNode, FC } from "react";

// ===============================
// Tipos y datos de las tarjetas
// ===============================
type Highlight = {
  title: string;
  description: string;
  icon: ReactNode;
};

const highlights: Highlight[] = [
  {
    title: "Inteligencia Artificial",
    description: "Implementamos IA para optimizar decisiones, predecir resultados y personalizar la experiencia de tus clientes.",
    icon: <FaBrain className="text-blue-300 w-9 h-9" />,
  },
  {
    title: "Automatización",
    description: "Automatiza tus procesos y comunicación con chatbots, agentes inteligentes y flujos eficientes.",
    icon: <FaRobot className="text-blue-300 w-9 h-9" />,
  },
  {
    title: "Análisis de Datos",
    description: "Transformamos datos en información útil para optimizar tus procesos, estrategias y mejorar resultados.",
    icon: <FaChartLine className="text-blue-300 w-9 h-9" />,
  },
];



// ===============================
// Componente principal del carousel
// ===============================
const HighlightsCardCarousel: FC = () => {
  // Estado: índice de la tarjeta central
  const [centerIdx, setCenterIdx] = useState<number>(1);
  const total = highlights.length;

  // Calcula los índices de las tarjetas izquierda, central y derecha
  const getIndices = () => {
    const left = (centerIdx - 1 + total) % total;
    const right = (centerIdx + 1) % total;
    return { left, center: centerIdx, right };
  };

  const { left, center, right } = getIndices();

  // Navegación
  const goLeft = () => setCenterIdx((prev) => (prev - 1 + total) % total);
  const goRight = () => setCenterIdx((prev) => (prev + 1) % total);

  return (
    <section className="relative flex items-center justify-center w-full max-w-4xl mx-auto min-h-[370px] select-none">
      {/* Desktop: 3 tarjetas y flechas laterales */}
      <div className="hidden md:flex w-full items-center justify-center relative h-[340px] md:h-[370px]">
        {/* Tarjeta izquierda */}
        <div
          className="absolute left-0 flex items-center justify-center h-full transition-all duration-500 w-1/3 z-10 opacity-70 pointer-events-none -translate-x-[18%] scale-90"
        >
          <Card {...highlights[left]} side />
        </div>
        {/* Tarjeta central */}
        <div
          className="relative flex items-center justify-center h-full transition-all duration-500 w-full z-30 min-w-[260px] max-w-[300px] min-h-[366px] max-h-[420px] scale-110"
        >
          <Card {...highlights[center]} />
        </div>
        {/* Tarjeta derecha */}
        <div
          className="absolute right-0 flex items-center justify-center h-full transition-all duration-500 w-1/3 z-10 opacity-70 pointer-events-none translate-x-[18%] scale-90"
        >
          <Card {...highlights[right]} side />
        </div>
        {/* Flecha izquierda */}
        <button
          aria-label="Anterior"
          onClick={goLeft}
          className="absolute z-40 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-2xl border border-slate-400 transition-all duration-200 focus:outline-none bg-gray-900/80 hover:bg-gray-800/90 hover:scale-105"
          style={{
            top: '50%',
            left: '-8rem',
            transform: 'translateY(-50%)',
            pointerEvents: 'auto',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#7dd3fc" className="w-9 h-9 mx-auto my-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        {/* Flecha derecha */}
        <button
          aria-label="Siguiente"
          onClick={goRight}
          className="absolute z-40 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-2xl border border-slate-400 transition-all duration-200 focus:outline-none bg-gray-900/80 hover:bg-gray-800/90 hover:scale-105"
          style={{
            top: '50%',
            right: '-8rem',
            transform: 'translateY(-50%)',
            pointerEvents: 'auto',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#7dd3fc" className="w-9 h-9 mx-auto my-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
      {/* Mobile: solo tarjeta central y flechas laterales */}
      <div className="flex md:hidden w-full items-center justify-center relative h-[340px]">
        <div className="flex items-center justify-center w-full h-full relative">
          {/* Flecha izquierda */}
          <button
            aria-label="Anterior"
            onClick={goLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-2xl border border-slate-400 transition-all duration-200 focus:outline-none bg-gray-900/80 shadow-xl hover:bg-gray-900/90"
            style={{ pointerEvents: 'auto' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#7dd3fc" className="w-7 h-7 mx-auto my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <div className="flex-1 flex items-center justify-center">
            <Card {...highlights[center]} />
          </div>
          {/* Flecha derecha */}
          <button
            aria-label="Siguiente"
            onClick={goRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-2xl border border-slate-400 transition-all duration-200 focus:outline-none bg-gray-900/80 shadow-xl hover:bg-gray-900/90"
            style={{ pointerEvents: 'auto' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="#7dd3fc" className="w-7 h-7 mx-auto my-auto">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

// ===============================
// Componente Card: representa cada tarjeta
// ===============================
const Card: FC<Highlight & { side?: boolean }> = ({ title, description, icon, side }) => {
  // Proporciones base de la tarjeta central
  const base = {
    padding: 'py-10 px-5',
    minW: 'min-w-[260px]',
    maxW: 'max-w-[300px]',
    minH: 'min-h-[350px]',
    maxH: 'max-h-[420px]',
    icon: 'w-12 h-12',
    title: 'text-xl md:text-2xl',
    desc: 'text-base md:text-lg',
  };
  // Proporciones reducidas para laterales (por ejemplo, 65% del tamaño)
  const sideStyles = {
    padding: 'p-3',
    minW: 'min-w-[169px]', // 260*0.65
    maxW: 'max-w-[195px]', // 300*0.65
    minH: 'min-h-[238px]', // 366*0.65
    maxH: 'max-h-[273px]', // 420*0.65
    icon: 'w-6 h-6',
    title: 'text-md',
    desc: 'text-sm',
  };

  const c = side ? sideStyles : base;
  
  return (
    <div
      className={`flex flex-col justify-between items-center rounded-2xl border border-blue-300 relative overflow-hidden transition-all duration-500 bg-gray-900/80 
        ${c.padding} ${c.minW} ${c.maxW} ${c.minH} ${c.maxH} ${side ? 'opacity-80 blur-[1px]' : 'scale-105'}
      `}
    >
      {/* Icono de la tarjeta */}
      <div className="flex flex-col flex-1 items-center justify-between w-full h-full gap-4">
        <div className={`flex-1 flex items-end justify-center ${c.icon}`}>{icon}</div>
        {/* Título */}
        <h3 className={`flex-1 flex items-center justify-center font-bold text-white text-center ${c.title}`}>
          {title}
        </h3>
        {/* Descripción */}
        <p className={`flex-1 flex items-start justify-center text-gray-300 text-center ${c.desc}`}>
          {description}
        </p>
      </div>
      {/* Overlay de resplandor al hacer hover */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700"
      ></div>
    </div>
  );
};

export default HighlightsCardCarousel;
