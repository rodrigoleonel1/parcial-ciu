import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductosContext, productos } from "./context/ProductosContext";
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

function App() {
  return (
    <BrowserRouter>
      <ProductosContext.Provider value={{ productos }}>
        <Navbar />
        <main className="pt-16">
          <CarritoProvider>
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/productos" element={<Catalogo />} />
              <Route path="/productos/:id" element={<DetalleProducto />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/contacto" element={<Contacto />} />
            </Routes>
          </CarritoProvider>
        </main>
        <Footer />
      </ProductosContext.Provider>
    </BrowserRouter>
  );
}

export default App;
