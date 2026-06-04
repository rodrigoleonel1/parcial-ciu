import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export default function ItemCarrito({ producto }) {
  const { eliminarProducto } = useContext(CarritoContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        key={producto.id}
        className="bg-white shadow rounded-lg p-4 flex gap-4 items-center"
      >
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-24 h-24 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="font-semibold text-lg">{producto.nombre}</h2>

          <p className="text-sm text-gray-500">Precio: ${producto.precio}</p>

          <p className="text-sm text-gray-500">Cantidad: {producto.cantidad}</p>

          <p className="text-sm font-medium mt-1">
            Subtotal: ${producto.precio * producto.cantidad}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button className="bg-gray-300 px-2 rounded hover:bg-gray-400">
            Agregar
          </button>

          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            onClick={() => eliminarProducto(producto.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
}
