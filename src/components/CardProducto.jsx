
export default function CardProducto({ producto }) {
  return <div className="relative  h-40">
    <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover rounded-lg" />

    <div className="absolute bottom-3 left-3 right-3">
      <div className="flex justify-between">
        <span>{producto.nombre}</span>
        <span>{producto.precio}</span>
      </div>

      <p>{producto.categoria}</p>
    </div>
  </div>;
}
