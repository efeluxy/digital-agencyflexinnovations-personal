import { useState } from "react";
import { FaPalette, FaRobot, FaGlobeEurope } from "react-icons/fa";
import type { ReactNode, FC } from "react";

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

const HighlightsCardCarousel: FC = () => {
  const [centerIdx, setCenterIdx] = useState<number>(1); // Start with the middle card
  const total = highlights.length;

  // Get indices for left, center, right
  const getIndices = () => {
    const left = (centerIdx - 1 + total) % total;
    const right = (centerIdx + 1) % total;
    return { left, center: centerIdx, right };
  };

  const { left, center, right } = getIndices();

  const goLeft = () => setCenterIdx((prev) => (prev - 1 + total) % total);
  const goRight = () => setCenterIdx((prev) => (prev + 1) % total);

  return (
    <section className="relative flex items-center justify-center w-full max-w-4xl mx-auto min-h-[370px] select-none">
      <div className="flex w-full items-center justify-center relative h-[340px] md:h-[370px]">
        {/* Left card (partially hidden) */}
        <div
          className="absolute left-0 flex items-center justify-center h-full transition-all duration-500"
          style={{
            width: '33%',
            zIndex: 10,
            transform: 'translateX(-18%) scale(0.85)',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        >
          <Card {...highlights[left]} hiddenSide />
        </div>
        {/* Center card (main) */}
        <div
          className="relative flex items-center justify-center h-full transition-all duration-500"
          style={{
            width: '100%',
            zIndex: 30,
            minWidth: '260px',
            maxWidth: '300px',
            minHeight: '366px',
            maxHeight: '420px',
            transform: 'scale(1.12)',
          }}
        >
          <Card {...highlights[center]} main />
        </div>
        {/* Right card (partially hidden) */}
        <div
          className="absolute right-0 flex items-center justify-center h-full transition-all duration-500"
          style={{
            width: '33%',
            zIndex: 10,
            transform: 'translateX(18%) scale(0.85)',
            opacity: 0.7,
            pointerEvents: 'none',
          }}
        >
          <Card {...highlights[right]} hiddenSide />
        </div>
      </div>

      {/* Left arrow */}
      <button
        aria-label="Anterior"
        onClick={goLeft}
        className="absolute z-40 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-2xl border transition-all duration-200 focus:outline-none bg-gray-900/80 shadow-xl hover:bg-gray-900/90"
        style={{
          borderColor: '#94a3b8', 
          borderWidth: '1.5px',
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

      {/* Right arrow */}
      <button
        aria-label="Siguiente"
        onClick={goRight}
        className="absolute z-40 flex items-center justify-center h-16 w-16 md:h-20 md:w-20 rounded-2xl border transition-all duration-200 focus:outline-none bg-gray-900/80 shadow-xl hover:bg-gray-900/90"
        style={{
          borderColor: '#94a3b8', 
          borderWidth: '1.5px',
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
    </section>
  );
};


const Card: FC<Highlight & { main?: boolean; hiddenSide?: boolean }> = ({ title, description, icon, main, hiddenSide }) => (
  <div
    className={`flex flex-col justify-between items-center rounded-2xl border relative overflow-hidden transition-all duration-500 bg-gray-900/80 shadow-xl ${main ? 'p-10 min-w-[260px] max-w-[300px] min-h-[366px] max-h-[420px] scale-105' : 'p-6 min-w-[180px] max-w-[220px] min-h-[220px] scale-95'} ${hiddenSide ? 'opacity-80 blur-[1px]' : ''}`}
    style={{
      borderColor: '#94a3b8', 
      boxShadow: main ? '0 8px 32px 0 rgba(0,0,0,0.25)' : '0 2px 8px 0 rgba(0,0,0,0.10)',
      filter: hiddenSide ? 'blur(1.5px) brightness(0.85)' : 'none',
    }}
  >
    <div className="flex flex-col flex-1 items-center justify-between w-full h-full gap-4">
      <div className="flex-1 flex items-end justify-center">{icon}</div>
      <h3 className="flex-1 flex items-center justify-center text-xl md:text-2xl font-bold text-white text-center">
        {title}
      </h3>
      <p className="flex-1 flex items-start justify-center text-gray-300 text-center text-base md:text-lg">
        {description}
      </p>
    </div>
    <div
      className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700"
    ></div>
  </div>
);

export default HighlightsCardCarousel;
