import { createContext, useState } from "react";
export const CarritoContext = createContext();

//Agregar carrito (se dispara dentro detalle con el btn agregar carrito)

//Eliminar carrito (se dispara dentro de carrito con el boton de la card
//  renderizada se mostrar un boton en la card que diga eliminar y
//  que pueda elegir la cantidad de unidades)

//calcular total de productos (automatico)

//calcular precio total del producto (automatico)

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  function agregarVariosProductos(producto) {
    const existe = carrito.find((p) => p.id === producto.id);
    if (existe) {
      if (existe.cantidad < producto.stock) {
        setCarrito(
          carrito.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p,
          ),
        );
      } else {
        alert("Excedio el limite de  compra");
      }
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  function agregarProducto(producto) {
    const existe = carrito.find((p) => p.id === producto.id);
    if (existe) {
      alert("No se puede comprar mas de un juego a la vez");
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }

  function eliminarProducto() {
    //logica
  }

  function aumentarCantidad() {
    //logica
  }

  function disminuirCantidad() {
    //logica
  }

  function totalProductos() {
    return carrito.reduce((acc, curr) => {
      return acc + curr.cantidad;
    }, 0);
  }

  function totalPrecio() {
    return carrito.reduce((acc, curr) => {
      return acc + curr.cantidad + curr.precio;
    }, 0);
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        agregarProducto,
        eliminarProducto,
        aumentarCantidad,
        disminuirCantidad,
        totalProductos,
        totalPrecio,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
