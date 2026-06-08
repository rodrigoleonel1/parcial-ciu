import { useContext, useState } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { Link, useNavigate } from "react-router"

export default function FormularioCompra() {
  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    nombres: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    entrega: "",
    mensaje: ""
  })

  const [errores, setErrores] = useState({})
  const [compraConfirmada, setCompraConfirmada] = useState(false);

  const { carrito, setCarrito, carritoAux, setCarritoAux} = useContext(CarritoContext);

  function completandoCampo(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
    setErrores({ ...errores, [e.target.name]: "" })
  }

  function enviandoInformacion(e) {
    e.preventDefault();
    const erroresActuales = {};
    const regex = /\S+@\S+\.\S+/
    if (formulario.nombres.length <= 0) {
      erroresActuales.nombres = "Los Nombres son obligatorio"
    }
    if (formulario.apellido.length <= 0) {
      erroresActuales.apellido = "El apellido es obligatorio"
    }
    if (formulario.email.length <= 0) {
      erroresActuales.email = "El email es obligatorio"
    } else if (!regex.test(formulario.email)) {
      erroresActuales.email = "El email no tiene formato valido"
    }
    if (formulario.telefono.length <= 0) {
      erroresActuales.telefono = "El numero de telefono es obligatorio"
    }
    if (formulario.direccion.length <= 0) {
      erroresActuales.direccion = "La direccion es obligatoria"
    }
    if (formulario.entrega.length <= 0) {
      erroresActuales.entrega = "Debe elegir una opcion de entrega"
    }
    setErrores(erroresActuales)
    if (Object.keys(erroresActuales).length > 0) {
      return;
    }
    if (carrito.length === 0) {
      alert("El carrito esta vacio, volve y agrega productos para continuar")
      return;
    }
    if (Object.keys(erroresActuales).length === 0) {
      setCompraConfirmada(true);
      setCarrito([])
      setCarritoAux([])
    }
  }

  function etiquetaOError(valorFor, valorEtiqueta) {
    if (!errores[valorFor]) {
      return (
        <label htmlFor={valorFor}>{valorEtiqueta}</label>
      )
    } else {
      return (
        errores[valorFor] ? <span>{errores[valorFor]}</span> : null
      )
    }
  }

  if (compraConfirmada) {
    return (
      <div>
        <h2>¡Gracias por comprar en NotSteam, {formulario.nombres}!</h2>
        <h3>A continuacion te enviaremos tu {formulario.entrega}</h3>
        <p>Recibiras la confirmacion de tu compra en: {formulario.email}</p>
        <button className="bg-gray-700 mt-5 text-white px-5 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm rounded hover:bg-blue-600 hover:cursor-pointer transition-colors m-2" type="button" onClick={() => navigate("/")}>
          Volver al Inicio
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={enviandoInformacion}>
      {/*etiquetaOError("nombres", "Nombre/s")*/}
      <label className="flex flex-col gap-1">
        <span className="text-white">Nombre\s</span>
        <input
          id="nombres"
          className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.nombres ? 'border-rose-600' : 'border-gray-600 focus:border-cyan-400'}`}
          placeholder="Nombre/s"
          name="nombres"
          value={formulario.nombres}
          type="text"
          onChange={completandoCampo}
        />
        {errores.nombres && <span className="text-rose-500 mb-2 -mt-3">{errores.nombres}</span>}
      </label>
      {/*etiquetaOError("apellido", "Apellido/s")*/}
      <label className="flex flex-col gap-1">
        <span className="text-white">Apellido\s</span>
        <input
          id="apellido"
          className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.apellido ? 'border-rose-600' : 'border-gray-600 focus:border-cyan-400'}`}
          placeholder="Apellido"
          name="apellido"
          value={formulario.apellido}
          type="text"
          onChange={completandoCampo}
        />
        {errores.apellido && <span className="text-rose-500 mb-2 -mt-3">{errores.apellido}</span>}
      </label>

      {/*etiquetaOError("email", "Correo Electronico")*/}
      <label className="flex flex-col gap-1">
        <span className="text-white">Correo Electronico</span>
        <input
          id="email"
          className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.email ? 'border-rose-600' : 'border-gray-600 focus:border-cyan-400'}`}
          placeholder="Correo Electronico"
          name="email"
          value={formulario.email}
          type="text"
          onChange={completandoCampo}
        />
        {errores.email && <span className="text-rose-500 mb-2 -mt-3">{errores.email}</span>}
      </label>

      {/*etiquetaOError("telefono", "Telefono")*/}
      <label className="flex flex-col gap-1">
        <span className="text-white">Telefono</span>
        <input
          id="telefono"
          className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.telefono ? 'border-rose-600' : 'border-gray-600 focus:border-cyan-400'}`}
          placeholder="Telefono"
          name="telefono"
          value={formulario.telefono}
          type="text"
          onChange={completandoCampo}
        />
        {errores.telefono && <span className="text-rose-500 mb-2 -mt-3">{errores.telefono}</span>}
      </label>

      {/*etiquetaOError("direccion", "Direccion")*/}
      <label className="flex flex-col gap-1">
        <span className="text-white">Direccion</span>
        <input
          id="direccion"
          className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.direccion ? 'border-rose-600' : 'border-gray-600 focus:border-cyan-400'}`}
          placeholder="Direccion"
          name="direccion"
          value={formulario.direccion}
          type="text"
          onChange={completandoCampo}
        />
        {errores.direccion && <span className="text-rose-500 mb-2 -mt-3">{errores.direccion}</span>}
      </label>
      {/*etiquetaOError("entrega", "Metodo de Entrega")*/}
      <label className="flex flex-col gap-1">
        <span className="text-white">Metodo de Entrega</span>
        <select
          id="entrega"
          name="entrega"
          value={formulario.entrega}
          onChange={completandoCampo}
          className={`invalid:border-rose-500 required:border-rose-600 w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3 ${errores.entrega ? 'border-rose-600' : 'border-gray-600 focus:border-cyan-400'}`}
        >
          <option value="">Elija una opción</option>
          <option value="clave del juego">Clave del juego</option>
          <option value="regalo a tu cuenta">Regalo a tu cuenta</option>
        </select>
        {errores.entrega && <span className="text-rose-500 mb-2 -mt-3">{errores.entrega}</span>}
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
      <button
        type="submit"
        className="bg-gray-700 text-white px-5 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm rounded hover:bg-cyan-600 hover:cursor-pointer transition-colors m-2"
      >
        Finalizar Compra
      </button>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="bg-gray-700 text-white px-5 py-2 text-xs sm:px-3 sm:py-2 sm:text-sm rounded hover:bg-cyan-600 hover:cursor-pointer transition-colors m-2"
      >
        Atras
      </button>
    </form>
  )
}
