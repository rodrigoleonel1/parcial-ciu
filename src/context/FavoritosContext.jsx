import { createContext, useState } from "react";
import Alerta from '../components/Alerta';
export const FavoritosContext = createContext();

export default function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [alertaInfo, setAlertaInfo] = useState({ mensaje: "", tipo: "buena" });

    const dispararAlerta = (mensaje, tipo) => {
        setAlertaInfo({ mensaje, tipo });
        setVisible(true);
        
        setTimeout(() => {
            setVisible(false);
        }, 3000);
    };

  const toggleFavorito = (producto) => {
    const existe = favoritos.find(
        fav => fav.id === producto.id
    );

    if (existe) {
        setFavoritos(
            favoritos.filter(
                fav => fav.id !== producto.id
            )
        );
        dispararAlerta(`${producto.nombre} ha sido eliminado de Favoritos.`, "buena")


    } else {
        setFavoritos([
            ...favoritos,
            producto
        ]);
        dispararAlerta(`${producto.nombre} ha sido añadido a Favoritos.`, "buena")
        }
    };

    const vaciar = () => {
      setFavoritos([]);
    }

    const esFavorito = (id) => {
        return favoritos.some(
            fav => fav.id === id
        );
    };

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        setFavoritos,
        toggleFavorito,
        esFavorito,
        vaciar
      }}
    >
      {children}
      {visible && (
            <Alerta
              mensaje={alertaInfo.mensaje}
              tipo={alertaInfo.tipo}
            />
          )}
    </FavoritosContext.Provider>
  );
}