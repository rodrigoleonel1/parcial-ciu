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

    function agregarProducto() {
        //logica
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

    function totalCantidad() {
        //logica
    }


    function totalPrecio() {
        //logica
    }

    return (
        <CarritoContext.Provider value={{
            carrito,
            agregarProducto,
            eliminarProducto,
            aumentarCantidad,
            disminuirCantidad,
            totalCantidad,
            totalPrecio
        }}>
            {children}
        </CarritoContext.Provider>
    );
};

export default CarritoProvider;