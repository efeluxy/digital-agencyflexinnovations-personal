// 🌙 TEMA OSCURO: Midnight Sky (Cielo de Medianoche)
const MidnightSkyTheme = () => (
  // Contenedor principal, ocupa toda la pantalla, z-0 para estar detrás
  <div className="fixed inset-0 z-0 w-full overflow-hidden">
    {/* Gradiente base noche: cubre todo el fondo con un color oscuro uniforme */}
    <div className="absolute inset-0 bg-slate-950" />

    {/* Estrellas pequeñas: varias capas de pequeños puntos blancos simulando estrellas */}
    <div 
      className="absolute inset-0 opacity-60" // Capa de estrellas con opacidad
      style={{
        // backgroundImage: 7 radial-gradients en diferentes posiciones para simular estrellas dispersas
        backgroundImage: `
          radial-gradient(1px 1px at 20% 30%, white, transparent),
          radial-gradient(1px 1px at 60% 70%, white, transparent),
          radial-gradient(1px 1px at 50% 50%, white, transparent),
          radial-gradient(1px 1px at 80% 10%, white, transparent),
          radial-gradient(1px 1px at 90% 60%, white, transparent),
          radial-gradient(1px 1px at 33% 80%, white, transparent),
          radial-gradient(1px 1px at 15% 55%, white, transparent)
        `,
        // Cada capa de estrellas tiene diferente tamaño y posición
        backgroundSize: '200px 200px, 300px 300px, 250px 250px, 280px 280px, 220px 220px, 260px 260px, 290px 290px'
      }}
    />

    {/* Nebulosa azul difuminada arriba a la derecha */}
    <div
      className="absolute top-[8%] right-[6%] w-[420px] h-[420px] bg-blue-700/20 rounded-full blur-[32px] opacity-60 shadow-[0_0_120px_40px_rgba(59,130,246,0.25)]"
      // Círculo grande azul, difuminado y con sombra para simular una nebulosa
    />

    {/* Nebulosa púrpura difuminada abajo a la izquierda */}
    <div
      className="absolute bottom-[10%] left-[4%] w-[540px] h-[540px] bg-indigo-500/15 rounded-full blur-[40px] opacity-60 shadow-[0_0_160px_60px_rgba(67,56,202,0.18)]"
      // Círculo grande púrpura, difuminado y con sombra para simular otra nebulosa
    />

    {/* Grid sutil futurista: líneas muy tenues en el fondo */}
    <div 
      className="absolute inset-0 opacity-[0.03]" // Muy baja opacidad
      style={{
        // Dos linear-gradients cruzados para simular una cuadrícula
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}
    />

    {/* Viñeta: oscurece los bordes del fondo con un gradiente radial */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
  </div>
);

export { MidnightSkyTheme };
