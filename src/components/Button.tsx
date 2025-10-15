// Botón reutilizable que hace scroll a la sección 'Contacto' al hacer click
// Props:
//   - text: string (texto del botón)
//   - className?: string (clases adicionales opcionales)

import useScrollTo from "../utils/useScrollTo";

type ButtonProps = {
  text: string;
  className?: string;
};

export default function Button({ text, className }: ButtonProps) {
  const scrollTo = useScrollTo();

  // Al hacer click, hace scroll a la sección 'Contacto'
  const handleClick = () => {
    scrollTo("Contacto");
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-gradient-to-b from-blue-500/90 to-blue-600/70 hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-800 rounded-lg flex items-center justify-center text-center 
        px-4 py-2 transform transition duration-300 ease-in-out cursor-pointer hover:scale-105 hover:shadow-[0_0_15px_rgba(0,140,255,0.6),0_0_20px_rgba(0,120,255,0.5)] ${
        className || ""
      }`}
    >
      <span className="font-bold text-white">{text}</span>
    </div>
  );
}

