import ChatBot from "../components/ChatBot";
import ServicesCard from "../components/ServicesCard";

export default function Services() {
  return (
    <section id='Servicios'>
      <div className="w-full px-6 py-6 md:px-40 md:py-15 shadow-xl/30 shadow-blue-700
          outline-3 outline-black 
          bg-gradient-to-b from-slate-700/85 via-gray-900/40 to-slate-700/85">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16" style={{ fontFamily: 'IBM Plex Serif, serif' }}>
          Soluciones digitales hechas a tu medida
        </h2>
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          {/* Columna 1 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <ServicesCard />
          </div>

          {/* Columna 2 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <ChatBot />
          </div>
        </div>
      </div>
    </section>
  );
}
