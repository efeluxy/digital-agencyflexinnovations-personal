import { useEffect, useState, useRef } from "react";
import Button from "../components/Button";
import { HiX, HiMenu } from "react-icons/hi";
import LogoHeader from "../assets/logo/LogoHeader.png";
import useScrollTo from "../utils/useScrollTo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("Inicio");
  const [blockHide, setBlockHide] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  var scrollTo = useScrollTo();
  var sections = ["Inicio", "Servicios", "Sobre Nosotros", "Contacto"];

  // Control header hide/show
  useEffect(() => {
    const controllHeader = () => {
      if (blockHide) return;
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        setIsOpen(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controllHeader);
    return () => window.removeEventListener("scroll", controllHeader);
  }, [lastScrollY, blockHide]);

  // Detectar sección activa
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // 50% visible
    );

    sections.forEach((section) => {
      const el = document.getElementById(section);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <>
      <header
        className={`fixed top-0 w-full flex md:p-6 justify-center z-50 overflow-hidden transition-transform duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav
          ref={navRef}
          className="relative w-full md:w-[80%] h-16 p-4 md:h-20 flex items-center backdrop-blur-xl border-b border-blue-400/20 md:bg-blue-950/50 md:backdrop-blur md:rounded-2xl md:border md:border-blue-400/40 transition-all duration-500 ease-out"
        >
          {/* Botón menú hamburguesa solo en móvil */}
          <button
            className="flex md:hidden items-center justify-center mr-2 z-50 text-white text-3xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>

          {/* Logo: centrado en móvil, izquierda en desktop */}
          <div className="flex items-center flex-shrink-0 mx-auto md:mx-0 md:mr-8">
            <a
              href="/"
              className="block transition-transform duration-300 hover:scale-105"
            >
              <img
                src={LogoHeader}
                alt="logo"
                className="h-10 md:h-14 w-auto cursor-pointer rounded-lg drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
              />
            </a>
          </div>

          {/* Menú desktop centrado absoluto */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:text-xl gap-8 items-center">
            {sections.map((item, index) => (
              <div
                key={item}
                className={`relative flex items-center transition-all duration-300 ${activeSection === item ? "bg-black shadow-md [box-shadow:inset_0_2px_16px_0_rgba(96,165,250,0.18)]" : ""} rounded-xl px-3 py-2 min-w-[90px] justify-center`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <p
                  onClick={() => {
                    setBlockHide(true);
                    scrollTo(item);
                    setIsOpen(false);
                    setTimeout(() => setBlockHide(false), 800);
                  }}
                  className={`group cursor-pointer transition-all duration-300 text-white/80 hover:text-white font-semibold ${activeSection === item ? "text-white" : ""}`}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Botón a la derecha absoluto */}
          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 flex-shrink-0 md:mr-4">
            <div className="relative rounded-xl transition-all duration-300 ease">
              <Button text={"Agenda tu Cita"} className="p-3 text-xl" />
            </div>
          </div>
        </nav>
      </header>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-start pt-20 gap-8 text-2xl font-bold transform transition-all duration-500 ease-out z-40 bg-black/30 backdrop-blur-xl border-t border-blue-400/20 shadow-2xl shadow-black/20 ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col gap-8 text-center mb-8 w-full px-8">
          {sections.map((item, index) => (
            <p
              key={item}
              onClick={() => {
                scrollTo(item);
                setIsOpen(false);
              }}
              className="cursor-pointer transition-all duration-300 text-white/90 py-4 px-6 rounded-xl bg-gray-800/90 border border-blue-500 shadow-md active:scale-95 text-center md:bg-transparent md:border-transparent md:shadow-none md:hover:bg-white/10 md:hover:text-gray-300 md:active:scale-100"
              style={{
                animationDelay: `${index * 100 + 200}ms`,
                animation: isOpen ? "slideInLeft 0.6s ease-out forwards" : "none",
              }}
            >
              {item}
            </p>
          ))}

          <div
            className="mt-4 relative overflow-hidden rounded-xl"
            style={{
              animationDelay: "600ms",
              animation: isOpen ? "slideInLeft 0.6s ease-out forwards" : "none",
            }}
          >
            <Button text={"Agenda tu Cita"} className="h-16" />
          </div>
        </div>
      </div>
    </>
  );
}
