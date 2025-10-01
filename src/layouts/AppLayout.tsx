import React from "react";
import {
  // OceanDepthsTheme,
  MidnightSkyTheme,
  // ArcticFrostTheme,
  // DeepSpaceTheme,
} from "../layouts/BackgroundThemes";

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // 🎨 Cambia aquí el tema que quieras usar
  const selectedTheme = "midnight"; // Opciones: "ocean", "midnight", "arctic", "space"

  const renderTheme = () => {
    switch (selectedTheme) {
      // case "ocean":
      //   return <OceanDepthsTheme />;
      case "midnight":
        return <MidnightSkyTheme />;
      // case "arctic":
      //   return <ArcticFrostTheme />;
      // case "space":
      //   return <DeepSpaceTheme />;
      default:
        return <MidnightSkyTheme />;
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Fondo seleccionado */}
      {renderTheme()}

      {/* Contenido principal */}
      <main className="relative z-10 flex-1 w-full">{children}</main>
    </div>
  );
};

export default AppLayout;