import { createContext, useState } from "react";
export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);


  //Funcion que se podra utilizar para agregar otro tipo de compras
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

  function eliminarProducto(idx) {
    setCarrito(
      carrito.filter((productoActual) =>
        productoActual.id != idx
      )
    )
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
