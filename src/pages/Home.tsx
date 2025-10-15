import Button from "../components/Button";
import HighlightsCardCarousel from "../components/HighlightsCard";

export default function Home() {
  return (
    <>
      <section
        id="Inicio"
        className="flex justify-center min-h-screen items-center pt-32 sm:pt-40"
      >
        <div className="flex flex-col text-center h-screen gap-8 md:gap-2">
          <h1 className="text-2xl md:text-4xl font-extrabold pb-8">
            Automatizamos. Analizamos. Impulsamos resultados
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 px-5 pb-2 md:mx-auto">
            “ Combinamos IA, automatización y análisis de datos para crear estrategias digitales que impulsen tus resultados. ”
          </p>
          <div className="pt-6 pb-10">
            <Button
              text={"Impulsa tu negocio ahora"}
              className="w-[80%] md:w-[25%] h-16 text-xl m-auto"
            />
          </div>
          <p className="text-lg md:text-2xl text-gray-300 px-5 md:pb-12">
            ¿Que necesitas?, nosotros tenemos la solución:
          </p>
          <div className="mb-30">
            <HighlightsCardCarousel />
          </div>
        </div>
      </section>
    </>
  );
}
