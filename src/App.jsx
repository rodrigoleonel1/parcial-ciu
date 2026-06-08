import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductosContext, productos } from "./context/ProductosContext";
import {FavoritosContext } from "./context/FavoritosContext";
import "./App.css";
import Inicio from "./pages/Inicio";
import Catalogo from "./pages/Catalogo";
import DetalleProducto from "./pages/DetalleProducto";
import Nosotros from "./pages/Nosotros";
import Carrito from "./pages/Carrito";
import Contacto from "./pages/Contacto";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CarritoProvider from "./context/CarritoContext";
import FavoritosProvider from "./context/FavoritosContext";
import FinalizarCompra from "./pages/FinalizarCompra";
import NoEncontrado from "./pages/NoEncontrado";

function App() {
  return (
    <BrowserRouter>
      <ProductosContext.Provider value={{ productos }}>
        <FavoritosProvider>
          <CarritoProvider>
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/productos" element={<Catalogo />} />
                <Route path="/productos/:id" element={<DetalleProducto />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/carrito" element={<Carrito />} />
                <Route path="/contacto" element={<Contacto />} />
                <Route path="/finalizarcompra" element={<FinalizarCompra />}/>
                <Route path="*" element={<NoEncontrado />} />
              </Routes>
            </main>
          <Footer /> 
        </CarritoProvider>
      </FavoritosProvider>
    </ProductosContext.Provider>
  </BrowserRouter>
  );
}

export default App;
