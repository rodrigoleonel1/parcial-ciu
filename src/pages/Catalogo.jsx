import { useContext } from "react";
import { ProductosContext } from "../context/ProductosContext";
import CardProducto from "../components/CardProducto"

export default function Catalogo() {
  const {productos} = useContext(ProductosContext);

    console.log(productos);

  return (
<div className="container mx-auto py-8">
  <h1 className="text-2xl font-bold mb-4">Catálogo de Productos</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {productos.map(producto => <CardProducto key={producto.id} producto={producto} />)}
  </div></div>
  )
}
/*

  */