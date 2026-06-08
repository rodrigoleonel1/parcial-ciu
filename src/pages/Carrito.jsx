import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import ItemCarrito from "../components/ItemCarrito";
import { Link, useNavigate } from "react-router";

export default function Carrito() {
  const navigate = useNavigate();
  const { carritoAux, totalProductos, totalPrecio } =
    useContext(CarritoContext);

  return (
    <section className="bg-linear-to-b from-cyan-950/30 via-gray-950 to-gray-950 py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-center">
          Tus <span className="text-cyan-400">Compras</span>
        </h1>

        <div className="rounded-lg p-4 mb-6 flex flex-col items-center gap-2 text-white hover:border-cyan-400 transition-all">
          {carritoAux.length === 0 ? (
            <div className="bg-linear-to-b from-cyan-950/10 via-gray-950 to-gray-950 py-20  shadow rounded-lg p-8 text-center">
              <p className="text-white-500 text-lg">
                ¡Tu carrito está vacío! <br />
                Prueba añadiendo unas cosas...
              </p>
            </div>
          ) : (
            <div className="text-center p-4 rounded-lg">
              <p className="text-gray-300 text-md">
                Productos totales: {totalProductos()}
              </p>
              <p className="text-gray-300 text-md">Total: ${totalPrecio()}</p>
            </div>
          )}
          <button
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg uppercase hover:cursor-pointer"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>
        {carritoAux.length !== 0 && (
          <div className="space-y-4 flex p-4 justify-center flex-col items-center">
            {carritoAux.map((producto) => (
              <ItemCarrito key={producto.id} producto={producto} />
            ))}

            {totalProductos() !== 0 && (
              <Link
                to="/finalizarcompra"
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold px-6 py-3 rounded-xl transition-all hover:shadow-lg uppercase"
              >
                Continuar compra
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
