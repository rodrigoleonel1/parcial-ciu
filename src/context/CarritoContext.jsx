import { createContext, useState } from "react";
import Alerta from "../components/Alerta";
export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [carritoAux, setCarritoAux] = useState([]);
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
    const existeAux = carritoAux.find((p) => p.id === producto.id);

    if (existe) {
      if (existe.cantidad < producto.stock) {
        setCarrito(
          carrito.map((p) =>
            p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p,
          ),
        );
        dispararAlerta(
          `${producto.nombre} ha sido añadido al carrito.`,
          "buena",
        );
      } else {
        dispararAlerta("Excedio el límite de compra", "error");
        return;
      }
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
      if (!existeAux) {
        setCarritoAux([...carritoAux, { ...producto, cantidad: 1 }]);
        dispararAlerta(
          `${producto.nombre} ha sido añadido al carrito.`,
          "buena",
        );
      }
    }
  }

  //Para productos que solo se puede agregar una unidad
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
        setCarritoAux([...carritoAux, { ...producto, cantidad: 1 }]);
        dispararAlerta(
          `${producto.nombre} ha sido añadido al carrito.`,
          "buena",
        ); // Cambiado a buena (cyan)
      }
    }
  }

  function eliminarProducto(producto) {
    const existe = carrito.find((prodActual) => prodActual.id == producto.id);

    if (existe.cantidad >= 1) {
      setCarrito(
        carrito.map((p) =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad - 1 } : p,
        ),
      );
      dispararAlerta(
        `${existe.nombre} ha sido eliminado del carrito.`,
        "buena",
      );
    } else {
      dispararAlerta(
        `${existe.nombre} no tiene copias en el carrito.`,
        "advertencia",
      );
      return;
    }
  }

  function aumentarCantidad() {
    //logica
  }

  function disminuirCantidad() {
    //logica
  }

  //todos los productos
  function totalProductos() {
    return carrito.reduce((acc, curr) => {
      return acc + curr.cantidad;
    }, 0);
  }

  //todo el precio total de los productos del carrito
  function totalPrecio() {
    let total = 0;

    for (let index = 0; index < carrito.length; index++) {
      total += carrito[index].cantidad * carrito[index].precio;
    }
    return total;
  }

  //cantidad de producto especifico
  function canTotalProducto(producto) {
    const item = carrito.find((p) => p.id === producto.id);
    return item ? item.cantidad : 0;
  }

  function subTotalProducto(producto) {
    const item = carrito.find((p) => p.id === producto.id);
    return item ? item.cantidad * item.precio : 0;
  }

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        setCarrito,
        carritoAux,
        setCarritoAux,
        agregarVariosProductos,
        agregarProducto,
        eliminarProducto,
        aumentarCantidad,
        disminuirCantidad,
        totalProductos,
        totalPrecio,
        canTotalProducto,
        subTotalProducto,
        visible,
        alertaInfo,
        dispararAlerta,
      }}
    >
      {children}
      {visible && (
        <Alerta mensaje={alertaInfo.mensaje} tipo={alertaInfo.tipo} />
      )}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;

