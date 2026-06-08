import {Link} from "react-router-dom";
import Alerta from "../components/Alerta"

export default function NoEncontrado() {
    return (
        <div className="container min-h-screen mx-auto py-5">
            <h1 className="text-4xl text-center font-bold mt-10">Página no encontrada</h1>
            <p className="text-center mt-4 text-gray-600">Lo sentimos, la página que buscas no existe.</p>
            <img 
                src="https://images.vexels.com/media/users/3/232416/isolated/preview/020f458122d9f7a3cd5d0eba923d6962-confused-gamer-cartoon.png"
                alt="Página no encontrada"
                className="mx-auto mt-4 w-64 h-64 object-contain"
            ></img>
             <div className="flex justify-center mt-6">
                <Link to={`/`} className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-2 px-4 rounded">
                    Volver a la página principal
                </Link>
            </div>
        </div>
    )
}