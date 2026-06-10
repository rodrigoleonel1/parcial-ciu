import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ProductosContext } from "../context/ProductosContext"; //corrigiendo ruta
import { CarritoContext } from "../context/CarritoContext";
import { GamepadDirectional } from "lucide-react";

const DetalleProducto = ({ agregarAlCarrito }) => {
  const { agregarVariosProductos, carritoAux } = useContext(CarritoContext); //carritoAux va servir para evaluar si el juego se encuentra en la vista del carrito
  const { id } = useParams();
  const [mostrarCartel, setMostrarCartel] = useState(false);
  const { productos } = useContext(ProductosContext); //linea que se agrego para solucionar conflicto
  const juego = productos?.find((p) => p.id === Number(id));

  if (!juego) {
    return <Navigate to="/404" replace />;
  }

  const sinStock = juego.stock === 0;

  const handleAgregarClick = () => {

    if (typeof agregarVariosProductos === "function") {
      try {
        agregarVariosProductos(juego);
      } catch (error) {
        console.error("Error al ejecutar agregarAlCarrito:", error);
      }
    }
  };

  const obtenerColorBadge = (badge) => {
    switch (badge?.toLowerCase()) {
      case "bestseller":
        return "bg-amber-500 text-slate-950";
      case "oferta":
        return "bg-red-500";
      case "goty":
        return "bg-purple-600 animate-pulse";
      case "nuevo":
        return "bg-cyan-500";
      case "free":
        return "bg-emerald-500 text-slate-950";
      default:
        return "bg-slate-600";
    }
  };

  return (
    <div className="container mx-auto py-8 max-w-7xl relative px-4 sm:px-6 lg:px-8">

      <div className="mb-6">
        <Link
          to="/productos"
          className="text-cyan-400 hover:text-cyan-300 font-display font-bold uppercase transition-colors"
        >
          ← Volver a todos los juegos
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-800 p-6 md:p-8 rounded-xl border border-slate-700 shadow-2xl">
        <div className="relative overflow-hidden rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center group h-fit">
          <img
            src={juego.imagen}
            alt={juego.nombre}
            className={`w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 ${sinStock ? "grayscale opacity-30" : ""}`}
          />
          {juego.badge && !sinStock && (
            <span
              className={`absolute top-4 left-4 text-xs font-black px-3 py-1.5 rounded uppercase tracking-wider shadow-md ${obtenerColorBadge(juego.badge)}`}
            >
              {juego.badge}
            </span>
          )}
          {sinStock && (
            <span className="absolute bg-rose-500 text-xs md:text-sm px-4 py-2 rounded-md font-black uppercase tracking-widest shadow-2xl border border-rose-400">
              Agotado Temporalmente
            </span>
          )}
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 items-center mb-3">
              <span className="bg-slate-900 text-cyan-400 border border-cyan-900/60 text-xs px-2.5 py-1 rounded font-bold uppercase">
                {juego.categoria}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              {juego.nombre}
            </h1>

            <div className="mb-5">
              <span className="text-3xl font-extrabold text-emerald-400 bg-emerald-950/40 px-4 py-1.5 rounded-lg border border-emerald-800/30 inline-block">
                {juego.precio === 0
                  ? "¡GRATIS!"
                  : `$${juego.precio.toLocaleString("es-AR")}`}
              </span>
            </div>

            <div className="mb-5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                Acerca de este juego
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {juego.descripcion}
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                Características destacadas
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {juego.caracteristicas.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center space-x-2 bg-slate-900/40 p-2 rounded border border-slate-700/30"
                  >
                    <span className="text-cyan-500 font-bold">
                      <GamepadDirectional />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs border-t border-slate-700/50 pt-4 flex items-center space-x-1.5">
              <span className="text-slate-400">Stock:</span>
              {sinStock ? (
                <span className="text-rose-500 font-extrabold uppercase">
                  Sin Stock
                </span>
              ) : (
                <span className="text-emerald-400 font-bold">
                  {juego.stock} unidades
                </span>
              )}
            </div>
          </div>

          <div>
            <button
              onClick={handleAgregarClick}
              disabled={sinStock}
              className={`w-full py-3.5 rounded-lg font-black tracking-wider uppercase transition-all shadow-md ${
                sinStock
                  ? "bg-slate-700 text-slate-500 cursor-not-allowed border border-slate-600 font-display text-lg"
                  : "bg-cyan-400 font-display hover:from-cyan-300 hover:via-cyan-300 hover:bg-cyan-300 text-black hover:cursor-pointer text-lg"
              }`}
            >
              {sinStock ? "No Disponible" : "Agregar al Carrito"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
