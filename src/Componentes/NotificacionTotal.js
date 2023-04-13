import React from "react";
import { useContext } from "react";
import { dataContext } from "./Context/dataContext";

const NotificacionTotal = () => {
    const {carrito} = useContext(dataContext);

    const cantidadCarrito = carrito.reduce((acc, el) => acc + el.cantidad, 0);
    
    return(
        <span className="notificacion-total">{cantidadCarrito}</span>
    );
}

export default NotificacionTotal;