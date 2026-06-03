import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center gap-8">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Catálogo</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
      </div>
    </nav>
  );
}
