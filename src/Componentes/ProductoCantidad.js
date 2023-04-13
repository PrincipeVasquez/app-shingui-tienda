import React from "react";
import { useContext } from "react";
import { dataContext } from "./Context/dataContext";

const ProductoCantidad = ({product}) => {
    const {carrito, cambiarCarrito} = useContext(dataContext);

    const aumentarCantidad = (id) => {
        // console.log(id);
        // console.log(carrito);
        // console.log(product);

        cambiarCarrito(carrito.map((element) => 
                        element.id == product.id ? 
                        {...product, cantidad: product.cantidad + 1} 
                        : 
                        element));
    }

    const disminuirCantidad = (id) => {
        // console.log(id);
        // console.log(carrito);
        // console.log(product);

        product.cantidad !== 1 &&
        cambiarCarrito(carrito.map((element) => 
                        element.id == product.id ? 
                        {...product, cantidad: product.cantidad - 1} 
                        : 
                        element));
    }

    return(
        <>
            <p className="btn-contar" onClick={() => aumentarCantidad(product.id)}>+</p>
            <p className="btn-contar-p">{product.cantidad}</p>
            <p className="btn-contar" onClick={() => disminuirCantidad(product.id)}>-</p>
        </>
    );
}

export default ProductoCantidad;