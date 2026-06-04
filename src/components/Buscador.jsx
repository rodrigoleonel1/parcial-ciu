export default function Buscador({     
    busqueda,
    setBusqueda,
    categorias,
    categoriasSeleccionadas,
    setCategoriasSeleccionadas,
    ordenPrecio,
    setOrdenPrecio
    }) 
    {
    const toggleCategoria = (categoria) => {
        if (categoriasSeleccionadas.includes(categoria)) {
            setCategoriasSeleccionadas(categoriasSeleccionadas.filter(cat => cat !== categoria));
        } else {
            setCategoriasSeleccionadas([...categoriasSeleccionadas, categoria]);
        }
    };
    
    return (
        <div className="w-72 border p-5 rounded-lg">
            <input className="w-full border p-2 rounded" type="text" placeholder="Buscar" value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)} />

            <div className="mt-8 border p-4">
                <h3 className="font-semibold mb-4">Filtrar por:</h3>

                <p className="mb-2">Categorías</p>

                {categorias.map((categoria) => (
                    <label key={categoria} className="flex items-center gap-2 mb-2">
                        <input type="checkbox" checked={categoriasSeleccionadas.includes(categoria)}  onChange={() => toggleCategoria(categoria)}/> {categoria}
                    </label>
                ))}

                <div className="mt-6">
                    <p className="mb-2">Precio</p>

                    <select value={ordenPrecio} onChange={(e) => setOrdenPrecio(e.target.value)} className="w-full border p-2 rounded bg-black text-white">
                        <option value="">Por defecto</option>
                        <option value="asc">De menor a mayor</option>
                        <option value="desc">De mayor a menor</option>
                    </select>
                </div>
            </div>
        </div>
    )
}