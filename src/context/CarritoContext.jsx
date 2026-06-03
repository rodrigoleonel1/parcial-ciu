import { createContext } from "react";

export const CarritoContext = createContext([]);

const CarritoProvider = ({ children }) => {
    return (
        <CarritoContext.Provider value={{}}>
            {children}
        </CarritoContext.Provider>
    );
};

export default CarritoProvider;