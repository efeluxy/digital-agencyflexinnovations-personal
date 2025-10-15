import ChatBot from "../components/ChatBot";
import ServicesCard from "../components/ServicesCard";

export default function Services() {
  return (
    <section id='Servicios'>
      <div className="w-full px-6 py-6 md:px-40 md:py-15">
        <h2 className="text-2xl md:text-5xl font-extrabold text-center mb-16">
          Soluciones digitales hechas a tu medida.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
          {/* Columna 1 */}
          <div className="w-full md:w-1/2 flex justify-center max-w-[320px">
            <ServicesCard />
          </div>

          {/* Columna 2 */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-[320px] md:max-w-[380px]">
              <ChatBot />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
