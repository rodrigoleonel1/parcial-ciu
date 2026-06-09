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
  const {
    canTotalProducto,
    subTotalProducto,
    eliminarProducto,
    agregarVariosProductos,
    carrito,
  } = useContext(CarritoContext);
  const existeProductoActual = carrito.find((p) => p.id === producto.id);
  return (
    <div className="w-full md:w-[70%] mx-auto mb-5">
      <div
        key={producto.id}
        className="bg-gray-900 border border-gray-800 shadow-lg 
        rounded-xl p-4 flex flex-row max-[425px]:flex-col gap-4 items-center max-[425px]:items-center"
      >
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-20 h-20 max-[425px]:w-full max-[425px]:h-40 object-cover rounded-lg shrink-0"
        />
        <div className="flex-1 min-w-0 max-[425px]:w-full max-[425px]:text-center">
          <h2 className="font-semibold text-lg wrap-break-word">
            {producto.nombre}
          </h2>

          <p className="text-sm text-gray-500">Precio: ${producto.precio}</p>

          <p className="text-sm text-gray-500">
            Cantidad: {canTotalProducto(producto)}
          </p>

          <p className="text-sm font-medium mt-1">
            Subtotal: {subTotalProducto(producto)}
          </p>
        </div>
        <div className="flex flex-col gap-2 shrink-0">
          <button
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold px-6 py-1.5 rounded-xl transition-all hover:shadow-lg uppercase hover:cursor-pointer"
            onClick={() => agregarVariosProductos(producto)}
          >
            Agregar
          </button>
          <button
            className="bg-rose-500 hover:bg-rose-400 text-black font-display font-bold px-6 py-1.5 rounded-xl transition-all hover:shadow-lg uppercase hover:cursor-pointer"
            onClick={() => eliminarProducto(producto)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
