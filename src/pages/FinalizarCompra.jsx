import FormularioCompra from "../components/FormularioCompra";

export default function FinalizarCompra() {
    return (
        <section className="bg-linear-to-b from-cyan-950/30 via-gray-950 to-gray-950 py-20 min-h-screen">
            <div className="max-w-2xl mx-auto px-4">
                <h1 className="font-display font-bold text-4xl sm:text-6xl text-center mb-10 text-white">
                    Finalizar Compra
                </h1>
                <FormularioCompra />
            </div>
        </section>
    )
}