// 🌙 TEMA OSCURO: Midnight Sky (Cielo de Medianoche)
export const MidnightSkyTheme = () => (
  <div className="fixed inset-0 z-0 w-full overflow-hidden">
    {/* Gradiente base noche */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/80 to-slate-900" />
    
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
    <div className="absolute top-1/14 right-1/20 w-[400px] h-[400px] bg-blue-800/15 rounded-full shadow-[0_0_50px] shadow-blue-900/60 blur-[5px]" />
    <div className="absolute bottom-3/14 left-1/30 w-[500px] h-[500px] bg-indigo-700/10 rounded-full shadow-[0_0_70px] shadow-indigo-950/80 blur-[5px]" />
    
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


