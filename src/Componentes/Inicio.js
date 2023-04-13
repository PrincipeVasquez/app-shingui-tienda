import React from "react";
import {NavLink} from 'react-router-dom';
import NotificacionTotal from "./NotificacionTotal";
import { useContext } from "react";
import { dataContext } from "./Context/dataContext";

const Inicio = () => {
    const {carrito} = useContext(dataContext);

    return(
        <div className="contenedor-inicio">
            <header>
                <div className="logo"></div>
            </header>
            <div className="menu">
                <nav>
                    {/* <li><a href="#">Inicio</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Tienda</a></li>
                    <li><a href="#">Contáctanos</a></li> */}

                    <NavLink to='/'>Inicio</NavLink>
                    <NavLink to='/nosotros'>Nosotros</NavLink>
                    <NavLink to='/tienda'>Tienda</NavLink>
                    <NavLink to='/carrito'>Carrito
                        {carrito.length > 0 ? <NotificacionTotal /> : null}
                    </NavLink>
                    <NavLink to='/Preguntas'>Preguntas</NavLink>
                </nav>
            </div>
        </div>
    );
}

export default Inicio;