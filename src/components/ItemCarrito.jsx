import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

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

const estiloDetallesGenerales = {
  icon: <ShieldCheck className="w-7 h-7 text-cyan-400" />,
  titulo: "Compra segura",
  descripcion:
    "Todos nuestros pagos están protegidos con encriptación SSL. Tu información nunca es compartida con terceros.",
};

export default function ItemCarrito({ producto }) {
  const { eliminarProducto, agregarProducto, carrito } =
    useContext(CarritoContext);
  const existeProductoActual = carrito.find((p) => p.id === producto.id);
  return (
    <div className="grid min-w-full grid-cols-1 md:grid-cols-2 gap-4 mb-5">
      <div
        key={producto.id}
        className="bg-gray-900 border border-gray-800 shadow-lg 
        rounded-xl p-4 flex flex-col sm:flex-row gap-4 sm:items-center hover:border-cyan-400 transition-all"
      >
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1 min-w-0">
          <h2 className="font-semibold text-lg text-white break-words">
            {producto.nombre}
          </h2>

          <p className="text-sm text-gray-500">Precio: ${producto.precio}</p>

          <p className="text-sm text-gray-500">Cantidad: {producto.cantidad}</p>

          <p className="text-sm font-medium mt-1">
            Subtotal: ${producto.precio * producto.cantidad}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {existeProductoActual ? (
            <button
              className="bg-rose-500 text-white px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm rounded hover:bg-rose-600 hover:cursor-pointer transition-colors"
              onClick={() => eliminarProducto(producto.id)}
            >
              Eliminar
            </button>
          ) : (
            <button
              className="bg-cyan-500 text-black px-2 py-1 text-xs sm:px-3 sm:py-2 sm:text-sm rounded hover:bg-cyan-400 hover:cursor-pointer transition-colors"
              onClick={() => agregarProducto(producto)}
            >
              Agregar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
