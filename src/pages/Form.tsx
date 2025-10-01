import Button from "../components/Button";
import FormField from "../components/FormField";

export default function Form() {
  return (
    <section className="flex min-h-screen justify-center items-center p-4">
      <div className="flex flex-col justify-center items-center gap-10 w-full max-w-3xl">
        <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-white via-gray-300 to-gray-400 bg-clip-text text-transparent pb-3" >
          Estamos para ayudarte
        </h1>

        <form id="Contacto" className="flex flex-col gap-6 w-full bg-gray-900/70 backdrop-blur-xl p-8 rounded-xl shadow-2xl border border-white/10">
          {/* Fila con Nombre y Teléfono */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Nombre */}
            <div className="w-full md:w-1/2">
              <FormField
                type="label"
                htmlFor="name"
                value="Nombre Completo"
              />
              <FormField
                name="name"
                type="text"
                placeholder="Nombre Completo..."
                required
              />
            </div>

            {/* Teléfono */}
            <div className="w-full md:w-1/2">
              <FormField
                type="label"
                htmlFor="phone"
                value="Teléfono (Opcional)"
              />
              <FormField
                name="number"
                type="number"
                placeholder="Teléfono..."
              />
            </div>
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

          {/* Servicios de interés (Checkboxes) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <span className="text-gray-200 font-medium mb-1">
                Servicios de interés
              </span>
              <div className="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200">
                <label className="p-4 flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition">
                  <input
                    type="checkbox"
                    name="services"
                    value="servicio1"
                    className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
                  />
                  Servicio nº 1
                </label>
                <label className="flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition">
                  <input
                    type="checkbox"
                    name="services"
                    value="servicio2"
                    className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
                  />
                  Servicio nº 2
                </label>
                <label className="p-4 flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition">
                  <input
                    type="checkbox"
                    name="services"
                    value="servicio3"
                    className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
                  />
                  Servicio nº 3
                </label>
                <label className="flex items-center gap-2 bg-white/10 p-2 rounded-lg border border-white/20 backdrop-blur-md shadow-md cursor-pointer hover:bg-white/20 transition">
                  <input
                    type="checkbox"
                    name="services"
                    value="servicio4"
                    className="w-5 h-5 text-blue-400 bg-transparent border-white/40 rounded focus:ring-0"
                  />
                  Otros
                </label>
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

          {/* Checkbox de políticas */}
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

          {/* Botón */}
          <Button
            text="Enviar"
          />
        </form>
      </div>
    </section>
  );
}
