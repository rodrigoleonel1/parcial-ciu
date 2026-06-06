import { useContext, useState } from "react"
import { CarritoContext } from "../context/CarritoContext"
import { Link } from "react-router"

export default function FormularioCompra() {
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

  const {carrito, setCarrito} = useContext(CarritoContext);

  function completandoCampo(e){
    setFormulario({...formulario, [e.target.name]: e.target.value})
  }

  function enviandoInformacion(e){
    e.preventDefault();
    const erroresActuales = {};
    if (formulario.nombres.length <= 0) {
      erroresActuales.nombres = "Los Nombres son obligatorio"
    }
    if (formulario.apellido.length <= 0){
      erroresActuales.apellido = "El apellido es obligatorio"
    }
    if (formulario.email.length <= 0) {
      erroresActuales.email = "El email es obligatorio"
    }
    if (formulario.telefono.length <= 0){
      erroresActuales.telefono = "El numero de telefono es obligatorio"
    }
    if (formulario.direccion.length <= 0) {
      erroresActuales.direccion = "La direccion es obligatoria"
    }
    if (formulario.entrega.length <= 0) {
      erroresActuales.entrega = "Debe elegir una opcion de entrega"
    }
    setErrores(erroresActuales)
    if (Object.keys(erroresActuales).length > 0){
      return;
    }
    if (carrito.length === 0){
      alert("El carrito esta vacio, volve y agrega productos para continuar")
      return;
    }
    if (Object.keys(erroresActuales).length === 0){
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
        <Link to="/">Volver al Inicio</Link>
      </div>
    )
  }

  return (
    <form onSubmit={enviandoInformacion}>
      <input name="nombres" value={formulario.nombres} type="text" onChange={completandoCampo}/>
      {errores.nombres ? <span>{errores.nombres}</span> : null}
      <input name="apellido" value={formulario.apellido} type="text" onChange={completandoCampo}/>
      {errores.apellido ? <span>{errores.apellido}</span> : null}
      <input name="email" value={formulario.email} type="text" onChange={completandoCampo}/>
      {errores.email ? <span>{errores.email}</span> : null}
      <input name="telefono" value={formulario.telefono} type="text" onChange={completandoCampo}/>
      {errores.telefono ? <span>{errores.telefono}</span> : null}
      <input name="direccion" value={formulario.direccion} type="text" onChange={completandoCampo}/>
      {errores.direccion ? <span>{errores.direccion}</span> : null}
      <select name="entrega" value={formulario.entrega} onChange={completandoCampo}>
        <option value="clave del juego">Clave del juego</option>
        <option value="regalo a tu cuenta">Regalo a tu cuenta</option>
      </select>
      {errores.entrega ? <span>{errores.entrega}</span> : null}
      <textarea name="mensaje" value={formulario.mensaje} onChange={completandoCampo} rows={5} cols={50}/>
      <button type="submit">Finalizar compra</button>
      <Link to="/carrito">Atras</Link>
    </form>
  )
}
