import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";
import { Link } from "react-router-dom";
import { X } from "lucide-react";


export default function FavoritosModal({ onClose }) {
  const { favoritos, vaciar } = useContext(FavoritosContext);

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      <aside
          className="
    fixed
    top-0
    right-0
    h-screen
    w-[400px]
    bg-gray-950
    border-l border-gray-700
    z-[9999]
    p-6
        animate-[slideIn_0.3s_ease-out]

  "
      >
        <button
          onClick={onClose}
          className="mb-4 text-xl"
        >
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-6">
          Favoritos
        </h2>

        {favoritos.length === 0 ? (
            <div className="flex flex-col h-70">
  <p className="text-center mt-4 text-gray-600">
    No tienes favoritos todavía.
  </p>

  <Link
    to="/productos"
    onClick={onClose}
    className="mt-auto px-3 py-2 rounded transition-colors bg-cyan-500 text-black hover:bg-cyan-400 text-center"
  >
    Catálogo
  </Link>
</div>
        ) : (
          <div className="space-y-4">
            {favoritos.map(producto => (
              <Link
                key={producto.id}
                to={`/productos/${producto.id}`}
                onClick={onClose}
                className="block border border-gray-700 rounded p-3 hover:border-cyan-400"
              >
                <p className="font-semibold">
                  {producto.nombre}
                </p>

                <p className="text-sm text-gray-400">
                  {producto.categoria}
                </p>
              </Link>
            ))}
            <button 
            className="px-3 py-2 rounded transition-colors bg-cyan-500 text-black hover:bg-cyan-400 hover:cursor-pointer"
            onClick={() => vaciar()}>
                Vaciar
            </button>
          </div>
        )}
      </aside>
    </>
  );
}