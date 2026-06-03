import { Children, createContext } from "react";

export const CarritoContext = createContext([]);

const CarritoProvider = () => {

    return (
        <CarritoContext.Provider>
            {Children}
        </CarritoContext.Provider>
    )

}


export default CarritoProvider;