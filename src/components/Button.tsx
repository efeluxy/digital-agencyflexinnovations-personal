import useScrollTo from "../utils/useScrollTo";

type ButtonProps = {
  text: string;
  className?: string;
};

export default function Button({ text, className }: ButtonProps) {
  const scrollTo = useScrollTo();

  const handleClick = () => {
    scrollTo("Contacto");
  };

  return (
    <div
      onClick={handleClick}
      className={`bg-gradient-to-b from-[var(--blue1)] to-[var(--blue2)] hover:bg-gradient-to-b hover:from-blue-500 hover:to-blue-800 rounded-lg flex items-center justify-center text-center 
        px-4 py-2 transform transition duration-300 ease-in-out cursor-pointer hover:scale-110 shadow-md hover:shadow-[0_0_15px_rgba(0,255,255,0.8),0_0_30px_rgba(0,173,255,0.5)] ${
        className || ""
      }`}
    >
      <span className="font-bold text-white">{text}</span>
    </div>
  );
}

