import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
export default function Buscador({filtros, onChangeFiltros, limpiarfiltros}) 
    {
    const {productos} = useContext(ProductosContext);
    const categorias = [...new Set(productos?.map(p => p.categoria) || [])];
    const { busqueda, categoriasSeleccionadas, ordenPrecio } = filtros;
    const toggleCategoria = (categoria) => {
        const yaSeleccionada = categoriasSeleccionadas.includes(categoria);
        const nuevasCategorias = yaSeleccionada
            ? categoriasSeleccionadas.filter(cat => cat !== categoria) // Si ya estaba, la quita
            : [...categoriasSeleccionadas, categoria];                  // Si no estaba, la agrega

        onChangeFiltros("categoriasSeleccionadas", nuevasCategorias);
    };
    
    return (
    <div className="w-full border border-gray-700 p-5 rounded-lg">
      <input 
        className="w-full border border-gray-400 p-2 rounded" 
        type="text" 
        placeholder="Buscar" 
        value={busqueda}
        onChange={(e) => onChangeFiltros("busqueda", e.target.value)} 
      />

      <div className="mt-8 border border-inherit p-4">
        <h3 className="font-semibold mb-4">Filtrar por:</h3>
        <p className="mb-2">Categorías</p>

        {categorias.map((categoria) => (
          <label key={categoria} className="flex items-center gap-2 mb-2">
            <input 
              type="checkbox" 
              checked={categoriasSeleccionadas.includes(categoria)}  
              onChange={() => toggleCategoria(categoria)}
            /> 
            {categoria}
          </label>
        ))}

        <div className="mt-6">
          <p className="mb-2">Ordenar precio</p>
          <select 
            value={ordenPrecio} 
            onChange={(e) => onChangeFiltros("ordenPrecio", e.target.value)} 
            className="w-full border border-gray-700 p-2 rounded bg-black text-white"
          >
            <option value="">Por defecto</option>
            <option value="asc">De menor a mayor</option>
            <option value="desc">De mayor a menor</option>
          </select>
        </div>

        {/* Botón de limpiar filtros dinámico */}
        {(busqueda || categoriasSeleccionadas.length > 0 || ordenPrecio) && (
          <button 
            onClick={limpiarfiltros} 
            className="mt-6 w-full p-2 rounded bg-rose-500 text-white hover:bg-rose-600"
          >
            Limpiar filtros
          </button>
        )}
      </div>
    </div>
  );
}
