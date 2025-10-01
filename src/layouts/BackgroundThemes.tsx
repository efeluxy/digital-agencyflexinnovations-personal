// 🌊 TEMA 1: Ocean Depths (Profundidades del Océano)
export const OceanDepthsTheme = () => (
  <div className="fixed inset-0 z-0 w-full overflow-hidden">
    {/* Gradiente base azul profundo */}
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-gray-950" />
    
    {/* Ondas horizontales sutiles */}
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 100px,
            rgba(59, 130, 246, 0.03) 100px,
            rgba(59, 130, 246, 0.03) 200px
          )
        `
      }}
    />
    
    {/* Patrón hexagonal */}
    <div 
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `
          radial-gradient(circle, rgba(96, 165, 250, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }}
    />
    
    {/* Manchas de luz azul */}
    <div className="absolute top-1/5 right-1/5 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[15px]" />
    <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[15px]" />
    
    {/* Overlay de profundidad */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
  </div>
);

// 🌌 TEMA 2: Midnight Sky (Cielo de Medianoche)
export const MidnightSkyTheme = () => (
  <div className="fixed inset-0 z-0 w-full overflow-hidden">
    {/* Gradiente base noche */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
    
    {/* Estrellas pequeñas */}
    <div 
      className="absolute inset-0 opacity-40"
      style={{
        backgroundImage: `
          radial-gradient(1px 1px at 20% 30%, white, transparent),
          radial-gradient(1px 1px at 60% 70%, white, transparent),
          radial-gradient(1px 1px at 50% 50%, white, transparent),
          radial-gradient(1px 1px at 80% 10%, white, transparent),
          radial-gradient(1px 1px at 90% 60%, white, transparent),
          radial-gradient(1px 1px at 33% 80%, white, transparent),
          radial-gradient(1px 1px at 15% 55%, white, transparent)
        `,
        backgroundSize: '200px 200px, 300px 300px, 250px 250px, 280px 280px, 220px 220px, 260px 260px, 290px 290px',
        backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px, 150px 50px, 220px 180px, 90px 220px'
      }}
    />
    
    {/* Nebulosa azul/púrpura */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-800/15 rounded-full blur-[10px]" />
    <div className="absolute bottom-1/8 left-1/9 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-[15px]" />
    
    {/* Grid sutil futurista */}
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}
    />
    
    {/* Viñeta */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
  </div>
);

// 🏔️ TEMA 3: Arctic Frost (Escarcha Ártica)
export const ArcticFrostTheme = () => (
  <div className="fixed inset-0 z-0 w-full overflow-hidden">
    {/* Gradiente base frío */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950 to-gray-950" />
    
    {/* Patrón cristalino */}
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `
          linear-gradient(30deg, transparent 48%, rgba(6, 182, 212, 0.05) 49%, rgba(6, 182, 212, 0.05) 51%, transparent 52%),
          linear-gradient(150deg, transparent 48%, rgba(6, 182, 212, 0.05) 49%, rgba(6, 182, 212, 0.05) 51%, transparent 52%)
        `,
        backgroundSize: '50px 50px'
      }}
    />
    
    {/* Manchas luminosas cyan */}
    <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-900/12 rounded-full blur-[110px]" />
    <div className="absolute bottom-1/4 right-1/3 w-[380px] h-[380px] bg-blue-800/10 rounded-full blur-[100px]" />
    
    {/* Textura de hielo sutil */}
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(165, 243, 252, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(165, 243, 252, 0.1) 0%, transparent 50%)'
      }}
    />
    
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-black/30" />
  </div>
);

// 🌑 TEMA 4: Deep Space (Espacio Profundo) - Ultra Minimalista
export const DeepSpaceTheme = () => (
  <div className="fixed inset-0 z-0 w-full overflow-hidden">
    {/* Gradiente muy oscuro */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-950 to-black" />
    
    {/* Líneas verticales sutiles */}
    <div 
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(100, 116, 139, 0.3) 2px, rgba(100, 116, 139, 0.3) 3px)',
        backgroundSize: '100px 100%'
      }}
    />
    
    {/* Resplandor azul central muy sutil */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-950/8 rounded-full blur-[150px]" />
    
    {/* Puntos dispersos */}
    <div 
      className="absolute inset-0 opacity-25"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(148, 163, 184, 0.2) 0.5px, transparent 0.5px)',
        backgroundSize: '80px 80px'
      }}
    />
    
    {/* Degradado superior e inferior */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
  </div>
);