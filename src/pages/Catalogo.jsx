import { useContext, useState } from "react";
import { ProductosContext } from "../context/ProductosContext";
import CardProducto from "../components/CardProducto"
import Buscador from "../components/Buscador";

export default function Catalogo() {
  const {productos} = useContext(ProductosContext);
  const categorias = [...new Set(productos?.map(p => p.categoria) || [])];

  const [filtros, setFiltros] = useState({
    busqueda: "",
    categoriasSeleccionadas: [],
    ordenPrecio: ""
  });

  const actualizarFiltro = (clave, valor) => {
    setFiltros(prevFiltros => ({...prevFiltros, [clave]: valor       
    }));
  };


    const productosFiltrados = productos.filter(producto => {
    const coincideNombre =producto.nombre.toLowerCase().includes(filtros.busqueda.toLowerCase());
    const coincideCategoria = filtros.categoriasSeleccionadas.length === 0 || filtros.categoriasSeleccionadas.includes(producto.categoria);
    return coincideNombre && coincideCategoria;
  });
  
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    if (filtros.ordenPrecio === "asc") return a.precio - b.precio;
    if (filtros.ordenPrecio === "desc") return b.precio - a.precio;
    return 0;
  });
  const limpiarFiltros = () => {
    setFiltros({
      busqueda: "",
      categoriasSeleccionadas: [],
      ordenPrecio: ""
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl text-center font-bold mb-5">Catálogo de Productos</h1>
      <div className="flex gap-8 p-5 m-auto justify-center">

        <aside className="sticky top-16 h-fit">        
          <Buscador
            filtros={filtros}
            onChangeFiltros={actualizarFiltro}
            limpiarfiltros={limpiarFiltros}
          />
        </aside>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

          {productosOrdenados.length === 0 
          ? (<h3 className="text-center col-span-full">No se encontraron productos que coincidan con los filtros.</h3>) 
          : (productosOrdenados.map(producto => (
              <CardProducto key={producto.id} producto={producto} />
            ))
          )}
        </div>

      </div>
    </div>
  )
}