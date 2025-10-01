import ChatBot from "../components/ChatBot";
import ServicesCard from "../components/ServicesCard";

export default function Services() {
  return (
      <div className="w-full px-6 py-6 md:px-30 md:py-10
          outline-2 outline-blue-700
          bg-gradient-to-b from-slate-700/85 via-gray-900/40 to-slate-700/85">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
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
    // {/* </SectionWrapper> */}
  );
}
