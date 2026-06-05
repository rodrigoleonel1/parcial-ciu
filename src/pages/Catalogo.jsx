import { useContext, useState } from "react";
import { ProductosContext } from "../context/ProductosContext";
import CardProducto from "../components/CardProducto"
import Buscador from "../components/Buscador";

export default function Catalogo() {
  const {productos} = useContext(ProductosContext);
  const categorias = [...new Set(productos?.map(p => p.categoria) || [])];
  const [mostrarFiltros, setMostrarFiltros] = useState(false);

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
      
      <button onClick={() => setMostrarFiltros(true)} className="md:hidden bg-gray-700 text-white px-4 py-2 rounded mb-4 ml-4">
        Filtrar
      </button>

    {/* Versión movil */}
        {mostrarFiltros && (
          <>
            <div className="fixed  inset-0 bg-black/50 z-40" onClick={() => setMostrarFiltros(false)} />

            <aside className="fixed  top-0 left-0 h-full w-72 bg-black z-50 p-4 overflow-y-auto">
              <button onClick={() => setMostrarFiltros(false)} className="mb-4" >
                ✖
              </button>

              <Buscador
                filtros={filtros}
                onChangeFiltros={actualizarFiltro}
                limpiarfiltros={limpiarFiltros}
              />
            </aside>
          </>
        )}

      {/* Version escritorio */}
      <div className="flex gap-8 p-5 m-auto justify-center">  

        <aside className="hidden md:block sticky top-16 h-fit">
          <Buscador
            filtros={filtros}
            onChangeFiltros={actualizarFiltro}
            limpiarfiltros={limpiarFiltros}
          />
        </aside>
        <div className="grid flex-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[70vh]">

          {productosOrdenados.length === 0 
          ? ( <p className="text-center text-lg text-gray-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] col-span-full">No se encontraron productos que coincidan con los filtros.</p>) 
          : (productosOrdenados.map(producto => (
              <CardProducto key={producto.id} producto={producto} />
            ))
          )}
        </div>

      </div>
    </div>
  )
}

