import React from "react";
import {NavLink} from 'react-router-dom';

// const Producto = ({id, nombre, precio, imgUrl}) => {
const Producto = ({id, nombre, precio, imgUrl, hoverUrl}) => {
    return(
        <div className="contenedor-tienda-detalles">
            <div className="contenedor-tienda-detalles-hover">
                <img className="img-hover" src={imgUrl} width="350" />
                <img className="img-hover-2" src={hoverUrl} width="350" />
            </div>
            <div className="contenedor-tienda__txt">{nombre}</div>
            <p>S/. {precio}</p>
            <button><NavLink to={`/producto/${id}`}>Ver detalles</NavLink></button>
            {/* <button><NavLink to="/producto">Ver detalles</NavLink></button> */}
        </div>
    );
}

export default Producto;