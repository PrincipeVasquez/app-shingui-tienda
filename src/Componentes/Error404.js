import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

const Error404 = () => {
    return(
        <div className="contenedor-error">
            <FontAwesomeIcon className="contenedor-error__icono" icon={faGhost}/>
            <h2>Error 404</h2>
            <p>La página no existe o fue cambiada de lugar.</p>
        </div>
    );
}

export default Error404;