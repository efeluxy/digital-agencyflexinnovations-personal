import React from "react";
import { MidnightSkyTheme, SundaySkyTheme } from "./BackgroundThemes";
import { useTheme } from "./ThemeContext";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full flex flex-col">
      {/* Fondo según tema seleccionado */}
      {theme === "dark" ? <MidnightSkyTheme /> : <SundaySkyTheme />}

      {/* Contenido principal */}
      <main className="relative z-10 flex-1 w-full">{children}</main>
    </div>
  );
};

export default AppLayout;