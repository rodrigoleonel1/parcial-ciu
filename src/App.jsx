import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import DetalleProducto from "./pages/DetalleProducto";
import Nosotros from "./pages/Nosotros";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
        <Route path="/productos" element={<Catalogo />}></Route>
        <Route path="/productos/:id" element={<DetalleProducto />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/carrito" element={<Carrito />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
