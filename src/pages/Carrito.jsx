export default function Carrito() {
  return (
    <><div>Carrito</div>
      <div className="bg-gray-100 min-h-screen p-6">

        <div className="max-w-5xl mx-auto">
          <div className="bg-white shadow rounded-lg p-4 mb-6 flex justify-between items-center">

            <div>
              <h1 className="text-xl font-bold">Carrito</h1>
              <p className="text-gray-500 text-sm">
                Productos totales: 0
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-500 text-sm">Total</p>
              <p className="text-2xl font-bold">$0</p>
            </div>

          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white shadow rounded-lg p-4">

              <h2 className="font-semibold text-lg">Nombre del producto</h2>

              <p className="text-sm text-gray-500">Precio: $0</p>
              <p className="text-sm text-gray-500">Cantidad: 0</p>
              <p className="text-sm font-medium mt-1">Subtotal: $0</p>

              <div className="flex gap-2 mt-3">
                <button className="bg-gray-200 px-2 rounded">-</button>
                <button className="bg-gray-200 px-2 rounded">+</button>
                <button className="bg-red-500 text-white px-3 rounded ml-auto">
                  Eliminar
                </button>
              </div>

            </div>
          </div>
          <h3>Aca voy a renderizar unas cards con los productos comprados que van a ser dinamicos</h3>
        </div>

      </div>
    </>
  )
}
