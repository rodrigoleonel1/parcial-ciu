import {
  Target,
  Eye,
  Heart,
  Headset,
  Truck,
  ShieldCheck,
  Star,
  Users,
  Package,
  Zap,
} from "lucide-react";

const VALORES = [
  {
    icon: <ShieldCheck className="w-7 h-7" />,
    titulo: "Compra segura",
    descripcion:
      "Todos nuestros pagos están protegidos con encriptación SSL. Tu información nunca es compartida con terceros.",
  },
  {
    icon: <Zap className="w-7 h-7" />,
    titulo: "Entrega inmediata",
    descripcion:
      "Las claves digitales se envían automáticamente a tu email en menos de 5 minutos tras confirmar el pago.",
  },
  {
    icon: <Headset className="w-7 h-7" />,
    titulo: "Soporte real",
    descripcion:
      "Nuestro equipo de atención al cliente está disponible de lunes a viernes de 10 a 19 hs por email.",
  },
  {
    icon: <Truck className="w-7 h-7" />,
    titulo: "Envíos a todo el país",
    descripcion:
      "Además de la entrega digital, enviamos físicamente a cualquier punto del país con seguimiento en tiempo real.",
  },
];

const STATS = [
  {
    icon: <Users />,
    titulo: "Clientes satisfechos",
    descripcion: "+5.000",
  },
  {
    icon: <Package />,
    titulo: "Copias vendidas",
    descripcion: "+7000",
  },
  {
    icon: <Star />,
    titulo: "Puntuación promedio",
    descripcion: "4.9",
  },
  {
    icon: <Zap />,
    titulo: "Entrega digital",
    descripcion: "< 5 min",
  },
];

export default function Nosotros() {
  return (
    <>
      <section className="border-gray-800 bg-linear-to-b from-cyan-950/30 via-gray-950 to-gray-950 py-20">
        <div className="px-4 text-center">
          <h1 className="mb-4 font-display font-bold text-4xl sm:text-6xl lg:text-7xl">
            La tienda gamer que eligen
            <br />
            <span className="text-cyan-400">los argentinos </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto ">
            NotSteam nació con una sola misión: que cada gamer en Argentina
            pueda acceder a los mejores títulos al mejor precio, con la rapidez
            y seguridad que se merece.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 border-y border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-center mb-12">
            ¿Por qué elegir Not<span className="text-cyan-400">Steam</span> ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALORES.map(({ icon, titulo, descripcion }) => (
              <div
                key={titulo}
                className="bg-gray-950 border border-gray-800 hover:border-cyan-400 rounded-xl p-6 flex gap-4 transition-all hover:-translate-y-1"
              >
                <div className="mt-1 text-cyan-400">{icon}</div>
                <div>
                  <h3 className="font-bold">{titulo}</h3>
                  <p className="text-gray-400 text-sm">{descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Stats */}
      <section className="border-gray-800 bg-linear-to-t from-cyan-950/30 via-gray-950 to-gray-950 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map(({ icon, titulo, descripcion }) => (
              <div key={titulo} className="flex flex-col items-center gap-2">
                <div className="text-cyan-400">{icon}</div>
                <p className="font-bold text-3xl text-white">{descripcion}</p>
                <p className="text-gray-400 text-sm">{titulo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
