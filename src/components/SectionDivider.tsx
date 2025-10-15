// SectionDivider.tsx
import React from "react";

const SectionDivider: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center my-20">
      {/* Líneas decorativas superiores */}
      <div className="flex w-3/4 justify-between mb-2">
        <div className="w-1/6 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
        <div className="w-1/3 h-[1px] bg-gradient-to-r from-blue-400/50 via-blue-500/80 to-blue-400/50 blur-[0.5px]" />
        <div className="w-1/6 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
      </div>

      {/* Línea principal con nodo central */}
      <div className="relative flex items-center justify-center w-3/4">
        <div className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/70 to-transparent rounded-full" />
        <div className="absolute w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
      </div>

      {/* Líneas inferiores tipo circuito */}
      <div className="flex w-3/4 justify-between mt-2">
        <div className="w-1/5 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
        <div className="w-2/5 h-[1px] bg-gradient-to-r from-blue-400/40 via-blue-500/70 to-blue-400/40 blur-[0.5px]" />
        <div className="w-1/5 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      </div>
    </div>
  );
};

export default SectionDivider;
