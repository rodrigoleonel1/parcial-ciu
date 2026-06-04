import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { ProductosContext } from "../context/ProductosContext"; //corrigiendo ruta

const DetalleProducto = ({ agregarAlCarrito }) => {
  const { id } = useParams();
  const [mostrarCartel, setMostrarCartel] = useState(false);
  const juego = PRODUCTOS.find((p) => p.id === Number(id));
  const { productos } = useContext(ProductosContext); //linea que se agrego para solucionar conflicto


  useEffect(() => {
    if (mostrarCartel) {
      const timer = setTimeout(() => {
        setMostrarCartel(false);
      }, 30000);
      return () => clearTimeout(timer);
    }
  }, [mostrarCartel]);


  if (!juego) {
    return (
      <div className="container mx-auto px-4 py-16 text-center max-w-md">
        <div className="text-6xl mb-4">🎮</div>
        <h2 className="text-3xl font-extrabold text-red-500 mb-2">Juego No Encontrado</h2>
        <Link to="/productos" className="inline-block w-full bg-blue-600 text-white font-bold py-3 rounded-lg">
          Volver a la Tienda
        </Link>
      </div>
    );
  }

  const sinStock = juego.stock === 0;


  const handleAgregarClick = () => {    
    setMostrarCartel(true);

    if (typeof agregarAlCarrito === 'function') {
      try {
        agregarAlCarrito(juego);
      } catch (error) {
        console.error("Error al ejecutar agregarAlCarrito:", error);
      }}
  };

  const obtenerColorBadge = (badge) => {
    switch (badge?.toLowerCase()) {
      case 'bestseller': return 'bg-amber-500 text-slate-950';
      case 'oferta': return 'bg-red-500 text-white';
      case 'goty': return 'bg-purple-600 text-white animate-pulse';
      case 'nuevo': return 'bg-blue-500 text-white';
      case 'free': return 'bg-emerald-500 text-slate-950';
      default: return 'bg-slate-600 text-white';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl relative">
      {mostrarCartel && (
        <div className="fixed top-5 right-5 z-[9999] bg-slate-900 border-2 border-emerald-500 text-white px-6 py-4 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center space-x-3 transition-all">
          <span className="bg-emerald-500 text-slate-950 rounded-full w-5 h-5 flex items-center justify-center font-bold text-xs">✓</span>
          <span className="text-sm font-bold tracking-wide">Añadido al carrito</span>
        </div>
      )}
      
      <div className="mb-6">
        <Link to="/productos" className="inline-flex items-center text-sm font-semibold text-slate-400 hover:text-blue-400 transition-colors group">
          <span className="transform group-hover:-translate-x-1 transition-transform mr-2">←</span> 
          Volver a todos los juegos
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-800 p-6 md:p-8 rounded-xl border border-slate-700 shadow-2xl">
        
        <div className="relative overflow-hidden rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center group h-fit">
          <img 
            src={juego.imagen} 
            alt={juego.nombre} 
            className={`w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105 ${sinStock ? 'grayscale opacity-30' : ''}`}
          />
          {juego.badge && !sinStock && (
            <span className={`absolute top-4 left-4 text-xs font-black px-3 py-1.5 rounded uppercase tracking-wider shadow-md ${obtenerColorBadge(juego.badge)}`}>
              🔥 {juego.badge}
            </span>
          )}
          {sinStock && (
            <span className="absolute bg-red-600 text-white text-xs md:text-sm px-4 py-2 rounded-md font-black uppercase tracking-widest shadow-2xl border border-red-400">
              Agotado Temporalmente
            </span>
          )}
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div>
            <div className="flex flex-wrap gap-2 items-center mb-3">
              <span className="bg-slate-900 text-blue-400 border border-blue-900/60 text-xs px-2.5 py-1 rounded font-bold uppercase">
                {juego.categoria}
              </span>
              <span className="text-xs text-slate-400 font-medium bg-slate-900/50 px-2.5 py-1 rounded">
                🎮 {juego.plataforma}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-3">
              {juego.nombre}
            </h1>
            
            <div className="mb-5">
              <span className="text-3xl font-extrabold text-emerald-400 bg-emerald-950/40 px-4 py-1.5 rounded-lg border border-emerald-800/30 inline-block">
                {juego.precio === 0 ? "¡GRATIS!" : `$${juego.precio.toLocaleString('es-AR')}`}
              </span>
            </div>

            <div className="mb-5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Acerca de este juego</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {juego.descripcion}
              </p>
            </div>

            <div className="mb-5">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Características destacadas</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                {juego.caracteristicas.map((item, index) => (
                  <li key={index} className="flex items-center space-x-2 bg-slate-900/40 p-2 rounded border border-slate-700/30">
                    <span className="text-blue-500 font-bold">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-xs border-t border-slate-700/50 pt-4 flex items-center space-x-1.5">
              <span className="text-slate-400">Estado de claves:</span>
              {sinStock ? (
                <span className="text-red-400 font-extrabold uppercase">Sin Stock</span>
              ) : (
                <span className="text-emerald-400 font-bold">{juego.stock} unidades</span>
              )}
            </div>
          </div>

          <div>
            <button
              onClick={handleAgregarClick}
              disabled={sinStock}
              className={`w-full py-3.5 rounded-lg font-black tracking-wider uppercase transition-all shadow-md ${
                sinStock 
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed border border-slate-600' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white'
              }`}
            >
              {sinStock ? 'No Disponible' : 'Agregar al Carrito'}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DetalleProducto;