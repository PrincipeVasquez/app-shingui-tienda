import React, {createContext, useState, useEffect} from "react";
import storeItems from './../../data/products.json'

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, cambiarData] = useState(storeItems);
    const [carrito, cambiarCarrito] = useState([]);
    
    return <dataContext.Provider value={{data, carrito, cambiarCarrito}}>
        {children}
    </dataContext.Provider>
}

export default DataProvider;