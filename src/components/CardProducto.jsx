
export default function CardProducto({ producto }) {
  return <div>
    <div className="relative  h-40 transition-transform duration-300 hover:scale-105">
      <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover rounded-lg opacity-75" />

      <div className="absolute shadow-xs bottom-3 left-3 right-3 ">
        
        <span className="text-white text-2xl font-bold drop-shadow-lg">{producto.nombre}</span>

        <div className="flex justify-between">
        <span className="bg-black/30 px-1 py-1 rounded">{producto.categoria}</span>
        <span className="font-bold">{producto.precio == 0 ? 'Gratis' : `$${producto.precio.toFixed(2)}`}</span>
        </div>
      </div>
      
    </div>
    <p className="text-gray-200 mt-2">{producto.descripcion_breve}</p>
    <div className="flex justify-between mt-4">
      {producto.stock > 0 ? (
        <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-700 hover:cursor-pointer transition-colors">
          Añadir
        </button>
      ) : (<button className="bg-red-700 text-white px-3 py-2 rounded hover:bg-red-800 transition-colors disabled:opacity-50
    disabled:cursor-not-allowed" disabled>
          Sin stock
        </button>)}

  <button className="bg-gray-700 text-white px-3 py-2 rounded hover:bg-white hover:text-gray-700 transition-colors hover:cursor-pointer">
    Ir a la página
  </button>
</div>
  </div>
  ;
}


{/* <div className="flex justify-between mt-4">
  <button className="bg-blue-500 text-white px-3 py-2 rounded">
    Añadir
  </button>

  <button className="bg-gray-700 text-white px-3 py-2 rounded">
    Ver detalle
  </button>
</div> */}