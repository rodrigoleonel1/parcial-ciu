

export default function CardProducto({ producto }) {
  return <div className="relative border h-40">
    <img src={producto.imagen} alt={producto.nombre} className="w-full h-full object-cover" />
    
  </div>;
}
