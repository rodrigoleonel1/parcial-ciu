import { Check } from "lucide-react";

export default function Alerta({ mensaje, tipo }) {
  const colores = {
    buena: ["border-emerald-500", "bg-emerald-500"],
    advertencia: ["border-amber-500", "bg-amber-500"],
    error: ["border-rose-500", "bg-rose-500"],
  };

  return (
    <div
      className={`fixed top-5 right-5 z-9999 bg-slate-900 border-2 ${colores[tipo][0]} text-white px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center space-x-3 transition-all`}
    >
      <span
        className={`${colores[tipo][1]} text-slate-900 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs`}
      >
        {tipo === "buena" ? <Check /> : "!"}
      </span>
      <span className="text-sm font-bold tracking-wide">{mensaje}</span>
    </div>
  );
}
