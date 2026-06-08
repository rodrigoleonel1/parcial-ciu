import { Link } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { FavoritosContext } from "../context/FavoritosContext";
import { Heart } from "lucide-react";

export default function CardProducto({ producto }) {
  const { agregarProducto } = useContext(CarritoContext);
  const { toggleFavorito, esFavorito } = useContext(FavoritosContext);
  return (
    <div>
      <div className="relative  h-40 transition-transform duration-300 hover:scale-105">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-full h-full object-cover rounded-lg opacity-75"
        />
        <button
          onClick={() => toggleFavorito(producto)}
          className="absolute top-2 right-2 z-10 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
        >
          <Heart
            className={
              esFavorito(producto.id)
                ? "fill-red-500 text-red-500"
                : "text-white"
            }
          />
        </button>
        <div className="absolute shadow-xs bottom-3 left-3 right-3 ">
          <span className="text-white text-2xl font-bold drop-shadow-lg">
            {producto.nombre}
          </span>

          <div className="flex justify-between">
            <span className="bg-black/30 px-1 py-1 rounded">
              {producto.categoria}
            </span>
            <span className="font-bold">
              {producto.precio == 0
                ? "Gratis"
                : `$${producto.precio.toFixed(2)}`}
            </span>
          </div>
        </div>
      </div>
      <p className="text-gray-200 mt-2">{producto.descripcion_breve}</p>
      <div className="flex justify-between mt-4">
        <button
          disabled={producto.stock === 0}
          onClick={() => agregarProducto(producto)}
          className={`px-3 py-2 rounded transition-colors
        ${
          producto.stock > 0
            ? "bg-cyan-400 text-black hover:bg-cyan-300 hover:cursor-pointer transition-all uppercase text-sm font-bold font-display"
            : "bg-rose-700 hover:bg-rose-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all uppercase text-sm font-bold font-display"
        }`}
        >
          {producto.stock > 0 ? "Añadir" : "Sin stock"}
        </button>

        <Link
          to={`/productos/${producto.id}`}
          className="bg-gray-700 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-700 transition-all hover:cursor-pointer uppercase text-sm font-bold font-display"
        >
          Ir a la página
        </Link>
      </div>
    </div>
  );
}
