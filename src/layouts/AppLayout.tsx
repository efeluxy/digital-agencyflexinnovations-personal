import React from "react";
import { MidnightSkyTheme } from "./BackgroundThemes";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="w-full flex flex-col">
      {/* Fondo según tema seleccionado */}
      <MidnightSkyTheme /> 

      {/* Contenido principal */}
      <main className="relative z-10 flex-1 w-full">{children}</main>
    </div>
  );
};

export default AppLayout;