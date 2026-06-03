import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="font-bold text-xl text-white">
              Not<span className="text-cyan-400">Steam</span>
            </span>
          </Link>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className="font-semibold tracking-wider text-sm uppercase transition-colors text-cyan-400 hover:text-white"
            >
              Inicio
            </NavLink>
            <NavLink
              to="/productos"
              className="font-semibold tracking-wider text-sm uppercase transition-colors text-cyan-400 hover:text-white"
            >
              Catálogo
            </NavLink>
            <NavLink
              to="/nosotros"
              className="font-semibold tracking-wider text-sm uppercase transition-colors text-cyan-400 hover:text-white"
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className="font-semibold tracking-wider text-sm uppercase transition-colors text-cyan-400 hover:text-white"
            >
              Contacto
            </NavLink>
          </div>

          <div className="flex items-center gap-4">
            {/* Icono Carrito */}
            <Link to="/carrito" className="relative group">
              <div className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-cyan-400 rounded-lg px-3 py-2 transition-all">
                <ShoppingCart className="w-5 h-5 text-gray-300 group-hover:text-cyan-400 transition-colors" />
              </div>
            </Link>

            {/* Boton abrir/cerrar menu */}
            <button
              className="md:hidden transition-colors hover:cursor-pointer"
              onClick={handleClick}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 flex flex-col gap-4">
            <NavLink
              to="/"
              className="font-semibold tracking-wider text-sm uppercase transition-colors text-cyan-400 hover:text-white"
              onClick={handleClick}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/productos"
              className="font-semibold tracking-wider text-sm uppercase transition-colors text-cyan-400 hover:text-white"
              onClick={handleClick}
            >
              Catálogo
            </NavLink>
            <NavLink
              to="/nosotros"
              className="font-semibold tracking-wider text-sm uppercase transition-colors text-cyan-400 hover:text-white"
              onClick={handleClick}
            >
              Nosotros
            </NavLink>
            <NavLink
              to="/contacto"
              className="font-semibold tracking-wider text-sm uppercase transition-colors text-cyan-400 hover:text-white"
              onClick={handleClick}
            >
              Contacto
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
