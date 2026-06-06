import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import ItemCarrito from "../components/ItemCarrito";
import { Link } from "react-router";

export default function Carrito() {
  const { carritoAux, totalProductos, totalPrecio } =
    useContext(CarritoContext);

  return (
    <section className="bg-linear-to-b from-cyan-950/30 via-gray-950 to-gray-950 py-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-center mb-5">
          Tus compras
        </h1>
        <div className="rounded-lg p-4 mb-6 flex flex-col items-center gap-2 text-white hover:border-cyan-400 transition-all">
          {carritoAux.length === 0 ? (
            <div className="bg-linear-to-b from-cyan-950/10 via-gray-950 to-gray-950 py-20 min-h-screen shadow rounded-lg p-8 text-center">
              <p className="text-white-500 text-lg">¡Tu carrito está vacío !</p>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-gray-300 text-sm">
                Productos totales: {totalProductos()}
              </p>
              <p className="text-gray-300 text-sm">Total: ${totalPrecio()}</p>
              <Link to="/finalizarcompra" className="bg-gray-700 text-white px-5 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm rounded hover:bg-green-600 hover:cursor-pointer transition-colors m-2">
                Continuar compra
              </Link>
            </div>
          )}
        </div>
        <div className="space-y-4">
          {carritoAux.map((producto) => (
            <ItemCarrito key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  );
}
