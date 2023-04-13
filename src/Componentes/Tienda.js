import React from "react";
// import {NavLink} from 'react-router-dom';
// import storeItems from './../data/products.json'
import Producto from "./Producto";
import { useContext } from "react";
import { dataContext } from "./Context/dataContext";

const Tienda = () => {
    const {data} = useContext(dataContext);

    return(
        <div className="contenedor-tienda">
            <h1>Tienda</h1>
            <div className="contenedor-tienda__polos">
                {data.map((product, index) => {
                    return <Producto key={product.id} {...product}/>;
                })}
            </div>
        </div>
    );
}

export default Tienda;