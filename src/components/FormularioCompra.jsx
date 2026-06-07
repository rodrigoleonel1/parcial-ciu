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

  const { carrito, setCarrito } = useContext(CarritoContext);

  function completandoCampo(e) {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
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
      <label htmlFor="nombres:">Nombre\s:</label>
      <input
        id = "nombres"
        className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3"
        placeholder="Nombre/s"
        name="nombres"
        value={formulario.nombres}
        type="text"
        onChange={completandoCampo}
      />
      {errores.nombres ? <span>{errores.nombres}</span> : null}
      <label htmlFor="apellido\s">Apellido\s:</label>
      <input
        className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600  mb-3"
        placeholder="Apellido"
        name="apellido"
        value={formulario.apellido}
        type="text"
        onChange={completandoCampo}
      />
      {errores.apellido ? <span>{errores.apellido}</span> : null}
      <label htmlFor="email:">Correo Electronico:</label>
      <input
        className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3"
        placeholder="Correo Electronico"
        name="email"
        value={formulario.email}
        type="text"
        onChange={completandoCampo}
      />
      {errores.email ? <span>{errores.email}</span> : null}
      <label htmlFor="telefono">Telefono:</label>
      <input
        className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3"
        placeholder="Telefono"
        name="telefono"
        value={formulario.telefono}
        type="text"
        onChange={completandoCampo}
      />
      {errores.telefono ? <span>{errores.telefono}</span> : null}
      <label htmlFor="direccion">Dirección:</label>
      <input
        className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 hover:border-cyan-600 mb-3"
        placeholder="Direccion"
        name="direccion"
        value={formulario.direccion}
        type="text"
        onChange={completandoCampo}
      />
      {errores.direccion ? <span>{errores.direccion}</span> : null}
      <label htmlFor="entrega">Metodos de entrega:</label>
      <select
        name="entrega"
        value={formulario.entrega}
        onChange={completandoCampo}
        className="w-full bg-gray-800 text-white border border-gray-600 rounded px-3 py-2 focus:outline-none focus:border-cyan-400 mb-3 hover:border-cyan-600"
      >
        <option value="">Elija una opción</option>
        <option value="clave del juego">Clave del juego</option>
        <option value="regalo a tu cuenta">Regalo a tu cuenta</option>
      </select>
      {errores.entrega ? <span>{errores.entrega}</span> : null}
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
