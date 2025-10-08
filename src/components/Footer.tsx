export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-700 bg-gray-950 text-gray-300 mt-14">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-slate-800 pb-8">
          {/* Logo y descripción */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-400">AgencyFlex</span>
            </div>
            <p className="text-sm text-gray-400">Ejemplo: Agencia digital especializada en automatización, diseño web y soluciones tecnológicas para negocios modernos.</p>
          </div>
          {/* Navegación */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>Ejemplo: <a href="#home" className="hover:text-blue-400">Inicio</a></li>
              <li>Ejemplo: <a href="#servicios" className="hover:text-blue-400">Servicios</a></li>
              <li>Ejemplo: <a href="#contacto" className="hover:text-blue-400">Contacto</a></li>
              <li>Ejemplo: <a href="#about" className="hover:text-blue-400">Sobre Nosotros</a></li>
            </ul>
          </div>
          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>Ejemplo: info@agencyflex.com</li>
              <li>Ejemplo: +34 600 123 456</li>
              <li>Ejemplo: Calle Ejemplo 123, Madrid</li>
            </ul>
          </div>
          {/* Redes sociales */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Síguenos</h3>
            <ul className="flex gap-4">
              <li>Ejemplo: <a href="#" className="hover:text-blue-400">Instagram</a></li>
              <li>Ejemplo: <a href="#" className="hover:text-blue-400">LinkedIn</a></li>
              <li>Ejemplo: <a href="#" className="hover:text-blue-400">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-500 gap-2">
          <span>© 2025 AgencyFlex. Todos los derechos reservados.</span>
          <span>Ejemplo: Aviso legal | Política de privacidad</span>
        </div>
      </div>
    </footer>
  );
}
