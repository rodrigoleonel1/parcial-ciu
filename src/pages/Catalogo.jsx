import { useContext, useState } from "react";
import { ProductosContext } from "../context/ProductosContext";
import CardProducto from "../components/CardProducto"
import Buscador from "../components/Buscador";

export default function Catalogo() {
  const {productos} = useContext(ProductosContext);

  const [busqueda, setBusqueda] = useState("");
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const categorias = [...new Set(productos?.map(p => p.categoria) || [])];
  const [ordenPrecio, setOrdenPrecio] = useState("");
  const productosFiltrados = productos.filter(producto => {
    const coincideNombre =producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(producto.categoria);
    return coincideNombre && coincideCategoria;
  });
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (ordenPrecio === "asc") return a.precio - b.precio;
    if (ordenPrecio === "desc") return b.precio - a.precio;
    return 0;
  });

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl text-center font-bold mb-5">Catálogo de Productos</h1>
      <div className="flex gap-8 p-5 m-auto justify-center">

        <aside>        
          <Buscador
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            categoriasSeleccionadas={categoriasSeleccionadas}
            setCategoriasSeleccionadas={setCategoriasSeleccionadas}
            ordenPrecio={ordenPrecio}
            setOrdenPrecio={setOrdenPrecio}
            categorias={categorias}
          />
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {productosOrdenados.map(producto => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>

      </div>
    </div>
  )
}