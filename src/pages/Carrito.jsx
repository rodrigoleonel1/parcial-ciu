import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { ProductosContext } from "../context/ProductosContext";
import ItemCarrito from "../components/ItemCarrito";

export default function Carrito() {
  const { carrito, agregarProducto, totalProductos, totalPrecio } =
    useContext(CarritoContext);
  return (
    <>
      <div>Carrito</div>
      <div className="bg-gray-100 min-h-screen p-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">Carrito</h1>
              <p className="text-gray-500 text-sm">
                Productos totales: {totalProductos()}
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-500 text-sm">Total</p>
              <p className="text-2xl font-bold">$0</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="font-semibold text-lg">Nombre del producto</h2>

              <p className="text-sm text-gray-500">
                Precio total: {totalPrecio()}
              </p>
            </div>
          </div>
          <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4 bg-black">
              Detalles de juego comprado 
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {carrito.map((producto) => (
                <ItemCarrito key={producto.id} producto={producto} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
