import FormularioCompra from "../components/FormularioCompra";

export default function FinalizarCompra() {
  return (
    <section className="bg-linear-to-b from-cyan-950/30 via-gray-950 to-gray-950 py-20 min-h-screen">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-center mb-10">
          Finalizar <span className="text-cyan-400">Compra</span>
        </h1>
        <FormularioCompra />
      </div>
    </section>
  );
}
