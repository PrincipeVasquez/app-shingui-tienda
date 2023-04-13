import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'

const Modal = ({mostrar, cambiarMostrar}) => {
    return(
        <div className="container-modal" style={{display: mostrar ? 'flex' : 'none'}}>
            <div className="container-modal__body">
                <FontAwesomeIcon className="container-modal__icono" icon={faCircleXmark}
                onClick={cambiarMostrar}/>
                <h3>¿No sabes cual es la medida de tu polo Shingui?</h3>
                <p>No te preocupes, nosotros te ayudamos:</p>
                <img src="/img/medida-polo.png" width="200" alt="medida-polo" />
            </div>
        </div>
    );
}

export default Modal;