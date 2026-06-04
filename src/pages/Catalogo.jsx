import { useContext, useState } from "react";
import { ProductosContext } from "../context/ProductosContext";
import CardProducto from "../components/CardProducto"
import Buscador from "../components/Buscador";

export default function Catalogo() {
  const {productos} = useContext(ProductosContext);

  const [busqueda, setBusqueda] = useState("");
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const categorias = [...new Set(productos?.map(p => p.categoria) || [])];
  const productosFiltrados = productos.filter(producto => {
    const coincideNombre =producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCategoria = categoriasSeleccionadas.length === 0 || categoriasSeleccionadas.includes(producto.categoria);

    return coincideNombre && coincideCategoria;
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
            categorias={categorias}
          />
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {productosFiltrados.map(producto => (
            <CardProducto key={producto.id} producto={producto} />
          ))}
        </div>

      </div>
    </div>
  )
}