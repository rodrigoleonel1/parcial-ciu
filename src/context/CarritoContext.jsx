import { createContext, useState } from "react";
import Alerta from "../components/Alerta"
export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [carritoAux, setCarritoAux] = useState([])
const [visible, setVisible] = useState(false);
const [alertaInfo, setAlertaInfo] = useState({ mensaje: "", tipo: "buena" });

const dispararAlerta = (mensaje, tipo) => {
    setAlertaInfo({ mensaje, tipo });
    setVisible(true);
    
    setTimeout(() => {
        setVisible(false);
    }, 3000);
};

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
      dispararAlerta(`${producto.nombre} ha sido añadido al carrito.`, "error");

      } else {
        dispararAlerta("Excedio el límite de compra", "error");
        return
      }
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }
  }



  function agregarProducto(producto) {
    const existe = carrito.find((p) => p.id === producto.id);
    const existeAux = carritoAux.find((p) => p.id === producto.id);

    if (existe) {
      dispararAlerta("Ya tenés este título en tu carrito", "advertencia");
      return;
      
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        dispararAlerta(`${producto.nombre} ha sido añadido al carrito.`, "buena"); // Cambiado a buena (cyan)

      if (!existeAux) {
        setCarritoAux([...carritoAux, { ...producto, cantidad: 1 }])
        dispararAlerta(`${producto.nombre} ha sido añadido al carrito.`, "buena"); // Cambiado a buena (cyan)
      }
    }
  }

  function eliminarProducto(idx) {
    const productoActual = carrito.find(p => p.id == idx)
    setCarrito(
      carrito.filter((productoActual) =>
        productoActual.id != idx
      )
      
    )
  dispararAlerta(`${productoActual.nombre} ha sido eliminado del carrito.`, "buena");
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
        carritoAux,
        setCarritoAux,
        agregarProducto,
        eliminarProducto,
        aumentarCantidad,
        disminuirCantidad,
        totalProductos,
        totalPrecio,
        visible,
        alertaInfo,
        dispararAlerta
      }}
    >
      {children}
          {visible && (
      <Alerta
        mensaje={alertaInfo.mensaje}
        tipo={alertaInfo.tipo}
      />
    )}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
