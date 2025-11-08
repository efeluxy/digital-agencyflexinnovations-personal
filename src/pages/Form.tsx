import { useState } from "react";
import Button from "../components/Button";
import FormField from "../components/FormField";

export default function Form() {
  const [showPolicies, setShowPolicies] = useState(false);

  return (
    <section
      id="Contacto"
      className="flex min-h-screen w-full justify-center items-center px-4 py-8 sm:px-6 sm:py-12 lg:px-8 xl:py-16"
    >
      <div className="flex flex-col w-full max-w-6xl">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center pb-6 sm:pb-8 lg:pb-10">
          Estamos para ayudarte
        </h1>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-14 w-full mt-2 sm:mt-4">
          {/* Columna izquierda: Formulario */}
          <div
            className="flex-1 w-full lg:w-1/2 min-h-fit p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-white/10 flex flex-col justify-center
              bg-blue-900/80
            "
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Formulario
            </h1>
            <form
              id="Contacto"
              className="flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full"
            >
              {/* Campos principales */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                {[
                  {
                    label: "Nombre Completo",
                    name: "name",
                    type: "text",
                    placeholder: "Nombre Completo...",
                    required: true,
                  },
                  {
                    label: "Teléfono (Opcional)",
                    name: "number",
                    type: "number",
                    placeholder: "Teléfono...",
                  },
                ].map((field) => (
                  <div className="w-full sm:w-1/2" key={field.name}>
                    <FormField
                      type="label"
                      htmlFor={field.name}
                      value={field.label}
                    />
                    <FormField
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  </div>
                ))}
              </div>

              {/* Email */}
              <FormField
                type="label"
                htmlFor="email"
                value="Correo Electrónico"
              />
              <FormField
                name="email"
                type="email"
                placeholder="Correo electrónico..."
                required
              />

              {/* Servicios de interés */}
              <div className="grid grid-cols-1 gap-4 sm:gap-5">
                <div>
                  <span className="text-gray-200 font-medium mb-1 block text-sm sm:text-base">
                    Servicios de interés
                  </span>
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-gray-200 text-sm sm:text-base">
                    {[
                      { label: "Servicio nº 1", value: "servicio1" },
                      { label: "Servicio nº 2", value: "servicio2" },
                      { label: "Servicio nº 3", value: "servicio3" },
                      { label: "Otros", value: "servicio4" },
                    ].map((service) => (
                      <label
                        key={service.value}
                        className="p-2.5 sm:p-3 flex items-center gap-2 bg-gray-800 rounded-lg border border-gray-700 cursor-pointer hover:bg-gray-700 transition"
                      >
                        <span className="relative inline-block w-5 h-5">
                          <input
                            type="checkbox"
                            name="services"
                            value={service.value}
                            className="peer appearance-none w-5 h-5 border-2 border-blue-400 rounded-md bg-gray-900 checked:bg-blue-600 checked:border-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                          <svg
                            className="pointer-events-none absolute left-0 top-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                            viewBox="0 0 20 20"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="5 11 9 15 15 7" />
                          </svg>
                        </span>
                        {service.label}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <FormField
                    type="label"
                    htmlFor="message"
                    value="Mensaje"
                    className="text-gray-200 font-medium mb-1"
                  />
                  <FormField
                    name="message"
                    type="textarea"
                    placeholder="Escribe tu consulta aquí..."
                    required
                    className="pb-17"
                  />
                </div>
              </div>

              {/* Checkbox y botón */}
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <span className="relative inline-block w-5 h-5">
                    <input
                      type="checkbox"
                      name="terms"
                      required
                      className="peer appearance-none w-5 h-5 border-2 border-violet-400 rounded-md bg-gray-900 checked:bg-gradient-to-br checked:from-blue-500 checked:to-violet-500 checked:border-violet-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-400"
                    />
                    <svg
                      className="pointer-events-none absolute left-0 top-0 w-5 h-5 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="5 11 9 15 15 7" />
                    </svg>
                  </span>
                  <span className="text-gray-300 text-xs sm:text-sm">
                    Acepto todas las{' '}
                    <button
                      type="button"
                      className="text-violet-400 underline focus:outline-none hover:text-violet-300 transition"
                      onClick={() => setShowPolicies(true)}
                    >
                      Políticas de Privacidad
                    </button>
                  </span>
                </label>
              </div>
              <Button text="Enviar" />

              {/* Bocadillo de Políticas de Privacidad */}
              {showPolicies && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                  <div className="relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-900" />
                    <div className="bg-gray-900 text-gray-100 rounded-xl p-12 max-w-2xl w-full shadow-2xl relative animate-fade-in">
                      <button
                        className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-violet-700 text-gray-200 hover:text-white rounded-full shadow transition-all duration-200 z-10"
                        onClick={() => setShowPolicies(false)}
                        aria-label="Cerrar"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <line x1="6" y1="6" x2="18" y2="18" />
                          <line x1="6" y1="18" x2="18" y2="6" />
                        </svg>
                      </button>
                      <h2 className="text-lg font-bold mb-4 text-center">
                        Políticas de Privacidad
                      </h2>
                      <div className="text-sm text-gray-300 text-center">
                        Aquí podrás leer y aceptar las políticas de privacidad y
                        cookies próximamente.
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Columna derecha: Calendly */}
          <div
            className="flex-1 w-full lg:w-1/2 min-h-fit bg-blue-900/80 p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-white/10 flex flex-col items-center justify-start"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-center">
              Agenda una Videollamada
            </h1>
            <div className="w-full flex-1 flex items-center justify-center min-h-[24rem] sm:min-h-[28rem] lg:min-h-[32rem]">
              <iframe
                src="https://calendly.com/agencyflexinnovations/30min"
                title="Reserva tu cita"
                className="w-full h-full aspect-[4/5] sm:aspect-[3/4] rounded-lg sm:rounded-xl border-2 border-blue-300 shadow-lg bg-blue-900/80"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
