import React from "react";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faShirt, faSprayCan } from '@fortawesome/free-solid-svg-icons'

const InicioPrincipal = () => {
    return(
        <>
            <div className="contenedor-inicio-principal">
                <div className="imagen-polo">
                    <img src="/img/bg-chica.png" alt="img-polo" />
                </div>
                <div className="contenedor-inicio__texto">
                    <h1>POLO AGUAJE</h1>
                    <h2>BLANCO</h2>
                    <div className="texto">
                        <p>Viste con estilo con diseños originales</p>
                        <p>inspirados en la Amazonía Peruana.</p>
                    </div>
                    <button><NavLink to="/tienda">Comprar ahora</NavLink></button>
                </div>
            </div>
            <div className="contenedor-inicio__populares">
                <p>COLECCIÓN DE VERANO</p>
                <h4>Mas populares</h4>
                <div className="contenedor-inicio-populares__polos">
                    <div>
                        <img src="/img/polo-juaneco.png" width="250" alt="polo-juaneco" />
                        <p className="contenedor-inicio-populares__sexo">HOMBRE</p>
                        <p className="contenedor-inicio-populares__titulo-polo">Polo Juaneco</p>
                    </div>
                    <div>
                        <img src="/img/polo-barbie.png" width="250" alt="polo-barbie" />
                        <p className="contenedor-inicio-populares__sexo">MUJER</p>
                        <p className="contenedor-inicio-populares__titulo-polo">Polo Barbie</p>
                    </div>
                    <div>
                        <img src="/img/polo-maracuya.png" width="250" alt="polo-maracuya" />
                        <p className="contenedor-inicio-populares__sexo">HOMBRE</p>
                        <p className="contenedor-inicio-populares__titulo-polo">Polo Maracuya</p>
                    </div>
                    <div>
                        <img src="/img/polo-cyberpan.png" width="250" alt="polo-cyberpan" />
                        <p className="contenedor-inicio-populares__sexo">HOMBRE</p>
                        <p className="contenedor-inicio-populares__titulo-polo">Polo Cyberpan</p>
                    </div>
                </div>
            </div>
            <div className="contenedor-inicio__bg-hombre">
                <p className="contenedor-inicio-bg-hombre__texto">Nueva colección</p>
                <h3>¡Sé diferente a tu propia manera!</h3>
                <p className="contenedor-inicio-bg-hombre__texto-2">Encuentra tu estilo aquí.</p>
            </div>
            <div className="contenedor-inicio__beneficios">
                <div className="contenedor-inicio__beneficio">
                    <FontAwesomeIcon className="contenedor-inicio__icono-beneficio" icon={faTruck}/>
                    <p>Envío seguro</p>
                </div>
                <div className="contenedor-inicio__beneficio">
                    <FontAwesomeIcon className="contenedor-inicio__icono-beneficio" icon={faShirt}/>
                    <p>Calidad comprobada</p>
                </div>
                <div className="contenedor-inicio__beneficio">
                    <FontAwesomeIcon className="contenedor-inicio__icono-beneficio" icon={faSprayCan}/>
                    <p>Diseños únicos</p>
                </div>
            </div>
        </>
    );
}

export default InicioPrincipal;