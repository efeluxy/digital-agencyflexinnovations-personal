import Button from "../components/Button";
import FormField from "../components/FormField";

export default function Form() {
  return (
    <section id="Contacto" className="flex min-h-screen w-full justify-center items-center p-8">
      <div className="flex flex-col w-full max-w-7xl">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent pb-8">
          Estamos para ayudarte
        </h1>
        <div className="flex flex-col md:flex-row gap-14 w-full min-h-[700px] mt-4">
          {/* Columna izquierda: Formulario */}
          <div className="flex-1 min-w-[420px] min-h-[650px] p-16 rounded-2xl border border-white/10 flex flex-col justify-center
              bg-gradient-to-tr from-blue-900/80 via-slate-900/90 to-blue-800/80 rounded-2xl p-4 shadow-xl border-2 border-blue-400
            ">
            <form id="Contacto" className="flex flex-col gap-6 w-full">
              {/* Campos principales */}
              <div className="flex flex-col md:flex-row gap-4">
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
                  <div className="w-full md:w-1/2" key={field.name}>
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

              {/* Servicios de interés (Checkboxes) y Mensaje */}
              <div className="grid grid-cols-1 gap-5">
                <div>
                  <span className="text-gray-200 font-medium mb-1">
                    Servicios de interés
                  </span>
                  <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200">
                    {[
                      { label: "Servicio nº 1", value: "servicio1" },
                      { label: "Servicio nº 2", value: "servicio2" },
                      { label: "Servicio nº 3", value: "servicio3" },
                      { label: "Otros", value: "servicio4" },
                    ].map((service) => (
                      <label
                        key={service.value}
                        className="p-4 flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition"
                      >
                        <input
                          type="checkbox"
                          name="services"
                          value={service.value}
                          className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
                        />
                        {service.label}
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  {/* Mensaje */}
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

              {/* Checkbox de políticas y Botón */}
              <div className="flex items-center gap-2">
                <FormField
                  name="terms"
                  type="checkbox"
                  required
                  className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
                />
                <label htmlFor="terms" className="text-gray-300 text-sm">
                  Acepto las{" "}
                  <a href="/politicas" className="text-blue-400 underline">
                    políticas de privacidad
                  </a>
                </label>
              </div>
              <Button text="Enviar" />
            </form>
          </div>
          {/* Columna derecha: Chatbot visual dentro de contenedor igual al formulario */}
          <div className="flex-1 min-w-[420px] min-h-[650px] bg-gray-900/80 backdrop-blur-xl p-16 rounded-2xl border border-white/10 flex items-center justify-center
            bg-gradient-to-br from-blue-900/80 via-slate-900/90 to-blue-800/80 rounded-2xl p-4 shadow-xl border-2 border-blue-400
          ">
            <div className="w-full h-full flex items-center justify-center">
              <iframe
                src="https://calendly.com/agencyflexinnovations/new-meeting"
                title="Reserva tu cita"
                className="w-full h-[500px] rounded-xl border-2 border-blue-300 shadow-lg bg-white"
                style={{ minHeight: '400px', maxWidth: '500px' }}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
