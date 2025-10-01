import { useEffect, useState } from "react";
import Button from "../components/Button";
import { HiX, HiMenu } from "react-icons/hi";
import logo from "../assets/logo/logo.png";
import useScrollTo from "../utils/useScrollTo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("Inicio");
 
  var scrollTo = useScrollTo();
  var sections = ["Inicio", "Servicios", "Sobre Nosotros", "Contacto"];

  // Control header hide/show
  useEffect(() => {
    const controllHeader = () => {
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
  }, [lastScrollY]);

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
        <nav className="relative w-full md:w-[80%] h-16 p-4 md:h-20 flex items-center justify-between bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg md:bg-white/5 md:backdrop-blur-3xl md:rounded-2xl md:border md:border-white/10 md:shadow-2xl md:shadow-black/10 transition-all duration-500 ease-out">
          <div className="flex items-center md:hidden">
            <button
              className="text-2xl transition-all duration-300 md:hidden text-white/90 hover:text-white hover:scale-110 active:scale-95"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <HiX className="transform rotate-90 transition-transform duration-300" />
              ) : (
                <HiMenu className="transform rotate-0 transition-transform duration-300" />
              )}
            </button>
          </div>

          <div>
            <a
              href="/"
              className="block transition-transform duration-300 hover:scale-105"
            >
              <img
                src={logo}
                alt="logo"
                className="h-10 md:h-14 w-auto cursor-pointer rounded-lg drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
              />
            </a>
          </div>

          {/* Menú desktop */}
          <div className="hidden md:flex md:text-xl gap-8 items-center">
            {sections.map((item, index) => (
              <p
                key={item}
                onClick={() => {
                  scrollTo(item);
                  setIsOpen(false);
                }}
                className={`group cursor-pointer text-white/80 hover:text-white transition-all duration-300 relative px-3 py-2 rounded-lg ${
                  activeSection === item
                    ? "after:block after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4/5 after:h-0.5 after:bg-gradient-to-r after:from-blue-400 after:to-blue-600 after:rounded-full"
                    : ""
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                {item}
              </p>
            ))}
          </div>

          <div className="hidden md:flex">
            <div className="relative rounded-xl transition-all duration-300 ease">
              <Button text={"Agenda tu Cita"} className="p-3 text-xl" />
            </div>
          </div>
        </nav>
      </header>

      {/* Menú móvil */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-start pt-20 gap-8 text-2xl font-bold transform transition-all duration-500 ease-out z-40 bg-black/20 backdrop-blur-3xl border-t border-white/10 shadow-2xl shadow-black/20 ${
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
              className="cursor-pointer hover:text-gray-300 transition-all duration-300 text-white/90 py-4 px-6 rounded-xl hover:bg-white/10 backdrop-blur-xl transform hover:scale-105 active:scale-95 border border-transparent hover:border-white/20 relative overflow-hidden"
              style={{
                animationDelay: `${index * 100 + 200}ms`,
                animation: isOpen
                  ? "slideInLeft 0.6s ease-out forwards"
                  : "none",
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
