import { useState } from 'react';
import { FaBrain, FaRobot, FaChartLine } from 'react-icons/fa';

// Estilos de animación
const animationStyles = `
  @keyframes fadeScale {
    0% {
      opacity: 0.3;
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1.1);
    }
  }

  @keyframes iconBounce {
    0%, 100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-12px) scale(1.15);
    }
  }

  @keyframes slideFromLeft {
    0% {
      transform: translateX(-150%) scale(0.8);
      opacity: 0;
    }
    100% {
      transform: translateX(-18%) scale(0.9);
      opacity: 0.7;
    }
  }

  @keyframes slideToLeft {
    0% {
      transform: translateX(-18%) scale(0.9);
      opacity: 0.7;
    }
    100% {
      transform: translateX(-150%) scale(0.8);
      opacity: 0;
    }
  }

  @keyframes slideFromRight {
    0% {
      transform: translateX(150%) scale(0.8);
      opacity: 0;
    }
    100% {
      transform: translateX(18%) scale(0.9);
      opacity: 0.7;
    }
  }

  @keyframes slideToRight {
    0% {
      transform: translateX(18%) scale(0.9);
      opacity: 0.7;
    }
    100% {
      transform: translateX(150%) scale(0.8);
      opacity: 0;
    }
  }

  .animate-fadeScale {
    animation: fadeScale 0.5s ease-out forwards;
  }

  .animate-iconBounce {
    animation: iconBounce 0.6s ease-out;
  }

  .animate-slideFromLeft {
    animation: slideFromLeft 0.5s ease-out forwards;
  }

  .animate-slideToLeft {
    animation: slideToLeft 0.5s ease-out forwards;
  }

  .animate-slideFromRight {
    animation: slideFromRight 0.5s ease-out forwards;
  }

  .animate-slideToRight {
    animation: slideToRight 0.5s ease-out forwards;
  }
`;

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  side?: boolean;
  animateIcon?: boolean;
}

interface Highlight {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const highlights: Highlight[] = [
  {
    title: 'Inteligencia Artificial',
    description:
      'Implementamos IA para optimizar decisiones, predecir resultados y personalizar la experiencia de tus clientes.',
    icon: <FaBrain className="text-blue-300 w-9 h-9" />,
  },
  {
    title: 'Automatización',
    description:
      'Automatiza tus procesos y comunicación con chatbots, agentes inteligentes y flujos eficientes.',
    icon: <FaRobot className="text-blue-300 w-9 h-9" />,
  },
  {
    title: 'Análisis de Datos',
    description:
      'Transformamos datos en información útil para optimizar tus procesos, estrategias y mejorar resultados.',
    icon: <FaChartLine className="text-blue-300 w-9 h-9" />,
  },
];

const Card = ({
  title,
  description,
  icon,
  side = false,
  animateIcon = false,
}: CardProps) => {
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

  const sideStyles = {
    padding: 'p-3',
    minW: 'min-w-[169px]',
    maxW: 'max-w-[195px]',
    minH: 'min-h-[238px]',
    maxH: 'max-h-[273px]',
    icon: 'w-6 h-6',
    title: 'text-md',
    desc: 'text-sm',
  };

  const c = side ? sideStyles : base;

  return (
    <div
      className={`flex flex-col justify-between items-center rounded-2xl border border-blue-300 relative overflow-hidden transition-all duration-500 bg-gray-900/80 
        ${c.padding} ${c.minW} ${c.maxW} ${c.minH} ${c.maxH} ${
        side ? 'opacity-80 blur-[1px]' : 'scale-105'
      }
      `}
    >
      <div className="flex flex-col flex-1 items-center justify-between w-full h-full gap-4">
        <div
          className={`flex-1 flex items-end justify-center ${c.icon} ${
            animateIcon && !side ? 'animate-iconBounce' : ''
          }`}
        >
          {icon}
        </div>
        <h3
          className={`flex-1 flex items-center justify-center font-bold text-white text-center ${c.title}`}
        >
          {title}
        </h3>
        <p
          className={`flex-1 flex items-start justify-center text-gray-300 text-center ${c.desc}`}
        >
          {description}
        </p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 rounded-2xl pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
    </div>
  );
};

const HighlightsCardCarousel = () => {
  const [centerIdx, setCenterIdx] = useState<number>(1);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const total = highlights.length;

  const getIndices = () => {
    const left = (centerIdx - 1 + total) % total;
    const right = (centerIdx + 1) % total;
    return { left, center: centerIdx, right };
  };

  const { left, center, right } = getIndices();

  const goLeft = () => {
    if (isAnimating) return;
    setDirection('left');
    setIsAnimating(true);
    setCenterIdx((prev) => (prev - 1 + total) % total);
    setTimeout(() => {
      setIsAnimating(false);
      setDirection(null);
    }, 500);
  };

  const goRight = () => {
    if (isAnimating) return;
    setDirection('right');
    setIsAnimating(true);
    setCenterIdx((prev) => (prev + 1) % total);
    setTimeout(() => {
      setIsAnimating(false);
      setDirection(null);
    }, 500);
  };

  return (
    <section className="relative flex items-center justify-center w-full max-w-4xl mx-auto min-h-[370px] select-none">
      <style>{animationStyles}</style>

      {/* Desktop */}
      <div className="hidden md:flex w-full items-center justify-center relative h-[340px] md:h-[370px]">
        {/* Tarjeta izquierda */}
        <div
          className={`absolute left-0 flex items-center justify-center h-full transition-all duration-500 w-1/3 z-10 opacity-70 pointer-events-none -translate-x-[18%] scale-90 ${
            direction === 'left'
              ? 'animate-slideFromLeft'
              : direction === 'right'
              ? 'animate-slideToLeft'
              : ''
          }`}
        >
          <Card {...highlights[left]} side={true} />
        </div>

        {/* Tarjeta central */}
        <div
          className={`relative flex items-center justify-center h-full transition-all duration-500 w-full z-30 min-w-[260px] max-w-[300px] min-h-[366px] max-h-[420px] scale-110 ${
            direction ? 'animate-fadeScale' : ''
          }`}
          key={centerIdx}
        >
          <Card {...highlights[center]} animateIcon={isAnimating} />
        </div>

        {/* Tarjeta derecha */}
        <div
          className={`absolute right-0 flex items-center justify-center h-full transition-all duration-500 w-1/3 z-10 opacity-70 pointer-events-none translate-x-[18%] scale-90 ${
            direction === 'right'
              ? 'animate-slideFromRight'
              : direction === 'left'
              ? 'animate-slideToRight'
              : ''
          }`}
        >
          <Card {...highlights[right]} side={true} />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="#7dd3fc"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="#7dd3fc"
            className="w-9 h-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden w-full items-center justify-center relative h-[340px]">
        <div className="flex items-center justify-center w-full h-full relative">
          <button
            aria-label="Anterior"
            onClick={goLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-2xl border border-slate-400 transition-all duration-200 focus:outline-none bg-gray-900/80 shadow-xl hover:bg-gray-900/90"
            style={{ pointerEvents: 'auto' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#7dd3fc"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <div className="flex-1 flex items-center justify-center">
            <div
              className={direction ? 'animate-fadeScale' : ''}
              key={centerIdx}
            >
              <Card {...highlights[center]} animateIcon={isAnimating} />
            </div>
          </div>

          <button
            aria-label="Siguiente"
            onClick={goRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-2xl border border-slate-400 transition-all duration-200 focus:outline-none bg-gray-900/80 shadow-xl hover:bg-gray-900/90"
            style={{ pointerEvents: 'auto' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="#7dd3fc"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HighlightsCardCarousel;
