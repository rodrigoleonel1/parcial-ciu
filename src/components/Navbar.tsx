import { ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-2 group">
        <span className="font-bold text-sm">
          NotSteam
        </span>
      </Link>
      <div className="flex items-center gap-8 h-16">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Catálogo</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </div>
      <Link to="/carrito" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-sky-900 border border-sky-700 rounded flex items-center justify-center">
          <span className="text-dark-900 font-display font-bold text-sm">
            <ShoppingCart />
          </span>
        </div>
      </Link>
    </nav>
  );
}
