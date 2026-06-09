import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-950/95 backdrop-blur border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <article className="sm:mx-auto">
          <Link to="/">
            <span className="font-bold text-xl font-display">
              Not<span className="text-cyan-400">Steam</span>
            </span>
          </Link>
          <p className="tracking-wider text-sm text-gray-400 max-w-3/4">
            Tu tienda gamer de confianza. Encontrá los mejores títulos para PC y
            consolas al mejor precio, con entrega rápida y segura.
          </p>
        </article>
        <article className="sm:mx-auto">
          <p className="font-bold text-xl font-display text-cyan-400">
            Navegación
          </p>
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/"
              className="tracking-wider text-sm transition-colors text-gray-400 hover:text-cyan-400"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/productos"
              className="tracking-wider text-sm transition-colors text-gray-400 hover:text-cyan-400"
            >
              Catálogo
            </NavLink>
            <NavLink
              to="/nosotros"
              className="tracking-wider text-sm transition-colors text-gray-400 hover:text-cyan-400"
            >
              Nosotros
            </NavLink>
          </nav>
        </article>
        <article className="sm:mx-auto">
          <p className="font-bold text-xl font-display text-cyan-400">
            Contacto
          </p>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <p>soporte@notsteam.com</p>
            <p>Atención 24/7</p>
            <p>Respuesta en menos de 24 hs</p>
          </div>
        </article>
      </div>
    </footer>
  );
}
