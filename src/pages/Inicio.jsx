import { Link } from "react-router-dom";
import { PRODUCTOS } from "../data/Productos";
import CardProducto from "../components/CardProducto";

export default function Inicio() {
  const destacados = PRODUCTOS.filter((p) => p.badge).slice(0, 4);
  return (
    <div>
      <section className="relative h-[90vh] min-h-125 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.template.net/376680/Neon-Gaming-Background-edit-online-1.jpg"
            alt="Colección de accesorios"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-80 backdrop-blur-lg" />
        </div>

        <div className="relative mx-auto flex flex-col gap-8 px-16">
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl">
            Not<span className="text-cyan-400">Steam</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-lg -mt-4">
            Explorá nuestro catálogo de videojuegos y descubrí experiencias
            únicas para cada tipo de jugador.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/productos"
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold px-8 py-4 rounded-xl transition-all hover:shadow-lg uppercase"
            >
              Ver Catálogo
            </Link>
            <Link
              to="/nosotros"
              className="border border-cyan-600 hover:border-cyan-400  font-display font-bold px-8 py-4 rounded-xl uppercase text-base transition-all"
            >
              Sobre Nosotros
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-display font-bold text-3xl text-white">
              Juegos Destacados
            </h2>
            <p className="text-gray-400">Los más buscados por la comunidad</p>
          </div>
          <Link
            to="/productos"
            className="text-cyan-400 hover:text-cyan-300 font-display font-bold uppercase transition-colors"
          >
            Ver todos →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destacados.map((producto) => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </div>
  );
}
