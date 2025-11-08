export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-700 bg-gray-950 text-gray-300 mt-14">
      <div className="w-full px-4 md:px-60 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-40 border-b border-slate-800 pb-6 w-full justify-between">
          {/* Logo y descripción */}
          <div className="flex flex-col justify-center min-w-[180px] text-center">
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-400">AgencyFlex</span>
            </div>
            <p className="text-sm text-gray-400">Somos una agencia digital especializada en automatización de procesos, concretamente en la captación de clientes mediante chats automático.</p>
          </div>
          {/* Contacto */}
          <div className="flex flex-col justify-center min-w-[180px] text-center">
            <h3 className="text-lg font-semibold mb-3">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="font-bold">Correo de contacto: <a className="font-normal">agencyflexinnovations@gmail.com</a></li>
              <li className="font-bold">Teléfono de contacto: <a className="font-normal">+34 684 73 51 67</a></li>
            </ul>
          </div>
          {/* Redes sociales */}
          <div className="flex flex-col justify-center min-w-[180px] text-center">
            <h3 className="text-lg font-semibold mb-3">Síguenos en <a href="https://www.instagram.com/agencyflexinnovations/" target="_blank" className="hover:text-blue-400 italic">  Instagram</a></h3>
            <ul className="flex gap-4">
              {/* <li><a href="#" className="hover:text-blue-400">Instagram</a></li> */}
              {/* <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
              <li><a href="#" className="hover:text-blue-400">Twitter</a></li> */}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-4 text-xs text-gray-500 gap-2 w-full">
          <span>© 2025 AgencyFlex. Todos los derechos reservados.</span>
          <span>Aviso legal | Política de privacidad</span>
        </div>
      </div>
    </footer>
  );
}
