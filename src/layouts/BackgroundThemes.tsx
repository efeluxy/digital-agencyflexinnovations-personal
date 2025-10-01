// 🌙 TEMA OSCURO: Midnight Sky (Cielo de Medianoche)
// export const MidnightSkyTheme = () => (
//   <div className="fixed inset-0 z-0 w-full overflow-hidden">
//     {/* Gradiente base noche */}
//     <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />
    
//     {/* Estrellas pequeñas */}
//     <div 
//       className="absolute inset-0 opacity-40"
//       style={{
//         backgroundImage: `
//           radial-gradient(1px 1px at 20% 30%, white, transparent),
//           radial-gradient(1px 1px at 60% 70%, white, transparent),
//           radial-gradient(1px 1px at 50% 50%, white, transparent),
//           radial-gradient(1px 1px at 80% 10%, white, transparent),
//           radial-gradient(1px 1px at 90% 60%, white, transparent),
//           radial-gradient(1px 1px at 33% 80%, white, transparent),
//           radial-gradient(1px 1px at 15% 55%, white, transparent)
//         `,
//         backgroundSize: '200px 200px, 300px 300px, 250px 250px, 280px 280px, 220px 220px, 260px 260px, 290px 290px',
//         backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px, 150px 50px, 220px 180px, 90px 220px'
//       }}
//     />
    
//     {/* Nebulosa azul/púrpura */}
//     <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-800/15 rounded-full blur-[100px]" />
//     <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-800/10 rounded-full blur-[100px]" />
    
//     {/* Grid sutil futurista */}
//     <div 
//       className="absolute inset-0 opacity-[0.03]"
//       style={{
//         backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
//         backgroundSize: '100px 100px'
//       }}
//     />
    
//     {/* Viñeta */}
//     <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />
//   </div>
// );

export const MidnightSkyTheme = () => (
  <div className="fixed inset-0 z-0 w-full overflow-hidden">
    {/* Gradiente base noche */}
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />
    
    {/* Estrellas pequeñas */}
    <div 
      className="absolute inset-0 opacity-50"
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
    <div className="absolute top-1/14 right-1/40 w-[300px] h-[300px] bg-slate-300/90 rounded-full blur-[5px] shadow-gray-500 shadow-[0_0_60px]" />
    {/* <div className="absolute bottom-1/8 left-1/9 w-[500px] h-[500px] bg-blue-800/10 rounded-full blur-[15px]" /> */}
    
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


// ☀️ TEMA CLARO: Sunday Sky (Cielo de Domingo)
export const SundaySkyTheme = () => (
<div className="fixed inset-0 z-0 w-full overflow-hidden">
    {/* Gradiente base cielo claro */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-gray-900" />
    
    {/* Estrellas suaves */}
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          radial-gradient(1px 1px at 20% 30%, #000000ff, transparent),
          radial-gradient(1px 1px at 60% 70%, #000000ff, transparent),
          radial-gradient(1px 1px at 50% 50%, #000000ff, transparent),
          radial-gradient(1px 1px at 80% 10%, #000000ff, transparent),
          radial-gradient(1px 1px at 90% 60%, #000000ff, transparent),
          radial-gradient(1px 1px at 33% 80%, #000000ff, transparent),
          radial-gradient(1px 1px at 15% 55%, #000000ff, transparent)
        `,
        backgroundSize: '200px 200px, 300px 300px, 250px 250px, 280px 280px, 220px 220px, 260px 260px, 290px 290px',
        backgroundPosition: '0 0, 40px 60px, 130px 270px, 70px 100px, 150px 50px, 220px 180px, 90px 220px'
      }}
    />
    
    {/* Nebulosa azul pastel y lavanda */}
    <div className="absolute top-1/14 left-1/40 w-[450px] h-[450px] bg-yellow-500/70 rounded-full blur-[5px] shadow-yellow-400 shadow-[0_0_80px]" />
    {/* <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-300/75 rounded-full blur-[80px]" /> */}
    
    {/* Grid sutil futurista */}
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: 'linear-gradient(rgba(40, 106, 182, 0) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 90, 153, 0) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}
    />
    
    {/* Viñeta suave */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.2)_100%)]" />
  </div>
);