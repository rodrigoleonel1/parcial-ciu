import { useContext, useState } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Link, useNavigate } from "react-router";
import compraFinalizada from "../assets/compraFinalizada.png"

export default function FormularioCompra() {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    nombres: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    entrega: "",
    mensaje: "",
  });

  const [errores, setErrores] = useState({});
  const [compraConfirmada, setCompraConfirmada] = useState(false);

  const { carrito, setCarrito, carritoAux, setCarritoAux, canTotalProducto, subTotalProducto, totalPrecio } = useContext(CarritoContext);

  function completandoCampo(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
    setErrores({ ...errores, [e.target.name]: "" });
  }

  function enviandoInformacion(e) {
    e.preventDefault();
    const erroresActuales = {};
    const regex = /\S+@\S+\.\S+/;
    if (formulario.nombres.length <= 0) {
      erroresActuales.nombres = "Los Nombres son obligatorio";
    }
    if (formulario.apellido.length <= 0) {
      erroresActuales.apellido = "El apellido es obligatorio";
    }
    if (formulario.email.length <= 0) {
      erroresActuales.email = "El email es obligatorio";
    } else if (!regex.test(formulario.email)) {
      erroresActuales.email = "El email no tiene formato valido";
    }
    if (formulario.telefono.length <= 0) {
      erroresActuales.telefono = "El numero de telefono es obligatorio";
    }
    if (formulario.direccion.length <= 0) {
      erroresActuales.direccion = "La direccion es obligatoria";
    }
    if (formulario.entrega.length <= 0) {
      erroresActuales.entrega = "Debe elegir una opcion de entrega";
    }
    setErrores(erroresActuales);
    if (Object.keys(erroresActuales).length > 0) {
      return;
    }
    if (carrito.length === 0) {
      alert("El carrito esta vacio, volve y agrega productos para continuar");
      return;
    }
    if (Object.keys(erroresActuales).length === 0) {
      setCompraConfirmada(true);
      setCarrito([]);
      setCarritoAux([]);
    }
  }

  function etiquetaOError(valorFor, valorEtiqueta) {
    if (!errores[valorFor]) {
      return <label htmlFor={valorFor}>{valorEtiqueta}</label>;
    } else {
      return errores[valorFor] ? <span>{errores[valorFor]}</span> : null;
    }
  }

  if (compraConfirmada) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center text-lg p-4 text-center">
        <h2 className="text-3xl font-bold">¡Gracias por comprar en Not<span className="text-cyan-400">Steam</span>, {formulario.nombres}!</h2>
        <img src={compraFinalizada} alt="Compra Finalizada" className="mx-auto mt-4 w-128 h-128 object-contain"/>
        <h3>A continuacion te enviaremos tu {formulario.entrega}.</h3>
        <p>Recibiras la confirmacion de tu compra en: {formulario.email}</p>
        <div className="flex gap-4">
          <button
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold px-8 py-2 rounded-xl transition-all hover:shadow-lg uppercase hover:cursor-pointer"
            type="button"
            onClick={() => navigate("/")}
          >
            Volver al Inicio
          </button>
          <button
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold px-8 py-2 rounded-xl transition-all hover:shadow-lg uppercase hover:cursor-pointer"
            type="button"
            onClick={() => navigate("/productos")}
          >
            Seguir comprando
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <form onSubmit={enviandoInformacion} className="lg:h-[720px] order-3">
        {/*etiquetaOError("nombres", "Nombre/s")*/}
        <label className="flex flex-col gap-1">
          <span className={errores.nombres ? "text-rose-500" : "text-white"}>
            {errores.nombres ? errores.nombres : 'Nombre/s'}
          </span>
          <input
            id="nombres"
            className={`relative invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.nombres ? "border-rose-600" : "border-gray-600 focus:border-cyan-400"}`}
            placeholder="Nombre/s"
            name="nombres"
            value={formulario.nombres}
            type="text"
            onChange={completandoCampo}
          />
        </label>
        {/*etiquetaOError("apellido", "Apellido/s")*/}
        <label className="flex flex-col gap-1">
          <span className={errores.apellido ? "text-rose-500" : "text-white"}>
            {errores.apellido ? errores.apellido : "Apellido/s"}
          </span>
          <input
            id="apellido"
            className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.apellido ? "border-rose-600" : "border-gray-600 focus:border-cyan-400"}`}
            placeholder="Apellido"
            name="apellido"
            value={formulario.apellido}
            type="text"
            onChange={completandoCampo}
          />
        </label>

        {/*etiquetaOError("email", "Correo Electronico")*/}
        <label className="flex flex-col gap-1">
          <span className={errores.email ? "text-rose-500" : "text-white"}>
            {errores.email ? errores.email : "Correo Electronico"}
          </span>
          <input
            id="email"
            className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.email ? "border-rose-600" : "border-gray-600 focus:border-cyan-400"}`}
            placeholder="Correo Electronico"
            name="email"
            value={formulario.email}
            type="text"
            onChange={completandoCampo}
          />
        </label>

        {/*etiquetaOError("telefono", "Telefono")*/}
        <label className="flex flex-col gap-1">
          <span className={errores.telefono ? "text-rose-500" : "text-white"}>
            {errores.telefono ? errores.telefono : "Telefono"}
          </span>
          <input
            id="telefono"
            className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.telefono ? "border-rose-600" : "border-gray-600 focus:border-cyan-400"}`}
            placeholder="Telefono"
            name="telefono"
            value={formulario.telefono}
            type="text"
            onChange={completandoCampo}
          />
        </label>

        {/*etiquetaOError("direccion", "Direccion")*/}
        <label className="flex flex-col gap-1">
          <span className={errores.direccion ? "text-rose-500" : "text-white"}>
            {errores.direccion ? errores.direccion : "Dirección"}
          </span>
          <input
            id="direccion"
            className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.direccion ? "border-rose-600" : "border-gray-600 focus:border-cyan-400"}`}
            placeholder="Direccion"
            name="direccion"
            value={formulario.direccion}
            type="text"
            onChange={completandoCampo}
          />
        </label>

        {/*etiquetaOError("entrega", "Metodo de Entrega")*/}
        <label className="flex flex-col gap-1">
          <span className={errores.entrega ? "text-rose-500" : "text-white"}>
            {errores.entrega ? errores.entrega : "Metodo de Entrega"}
          </span>
          <select
            id="entrega"
            name="entrega"
            value={formulario.entrega}
            onChange={completandoCampo}
            className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.entrega ? "border-rose-600" : "border-gray-600 focus:border-cyan-400"}`}
          >
            <option value="">Elija una opción</option>
            <option value="clave del juego">Clave del juego</option>
            <option value="regalo a tu cuenta">Regalo a tu cuenta</option>
          </select>
        </label>
        <label htmlFor="mensaje">Mensaje adicional:</label>
        <textarea
          name="mensaje"
          className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3"
          value={formulario.mensaje}
          onChange={completandoCampo}
          rows={5}
          cols={50}
        />
        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-display font-bold px-8 py-2 rounded-xl transition-all hover:shadow-lg uppercase hover:cursor-pointer"
          >
            Finalizar Compra
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-rose-500 hover:bg-rose-400 text-black font-display font-bold px-8 py-2 rounded-xl transition-all hover:shadow-lg uppercase hover:cursor-pointer"
          >
            Atras
          </button>
        </div>
      </form>
      <div className=" order-1">
        <h2 className="text-lg font-bold">Orden de compra</h2>
        <div className="pt-3 md:max-h-[500px] lg:max-h-[600] overflow-y-auto order-2">
          {carrito.map(
            (p) =>
              <div key={p.id}>
                <div className="bg-gray-900 border border-gray-800 shadow-lg rounded-xl p-4 flex gap-4 items-center transition-all justify-between">
                  <div className="flex">
                    <img src={p.imagen} alt={p.nombre} className="w-20 h-20" />
                    <div>
                      <p className="text-l font-medium text-white ml-2 pt-2">{p.nombre}</p>
                      <p className="text-l font-medium text-white ml-2 pt-2">Cantidad: {canTotalProducto(p)}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-lg">$ {subTotalProducto(p)}</p>
                  </div>
                </div>
                <hr className="border-gray-800 mt-3 mb-3" />
              </div>
          )}
        </div>
        <hr className="border-gray-800 mt-3 mb-3" />
        <div className="flex items-center justify-between">
          <p className="text-l font-medium text-white ml-2 pt-2">Total:</p>
          <p className="text-l font-medium text-white ml-2 pt-2">$ {totalPrecio()}</p>
        </div>
      </div>
    </div>
  );
}
