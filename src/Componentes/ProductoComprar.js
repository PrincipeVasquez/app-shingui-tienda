import React, { useState } from "react";
import ReactDOM from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faCartPlus, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import storeItems from './../data/products.json'
import { useParams, Navigate } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "./Context/dataContext";
import Modal from "./Modal";

const ProductoComprar = () => {
    const {id} = useParams();
    // console.log(id);

    const [mostrar, cambiarMostrar] = useState(false);

    const iconoBoton = <p>AGREGADO <FontAwesomeIcon className="icono-agregar" icon={faCircleCheck} /></p>

    const {data, carrito, cambiarCarrito} = useContext(dataContext);

    const [textoBoton, cambiarTextoBoton] = useState('AÑADIR AL CARRITO')

    const añadirCarrito = () => {
        const product = data[id - 1]
        // console.log(product);
        const productoRepetido = carrito.find((item) => item.id === product.id);
        console.log(productoRepetido);

        if(productoRepetido) {
            cambiarCarrito(carrito.map((item, index=product.id) =>
                item.id === product.id ? 
                {...product, cantidad: productoRepetido.cantidad + 1} 
                : 
                item))
        }
        else {
            cambiarCarrito([...carrito, product]);
        }

        cambiarTextoBoton(iconoBoton);

        // alert('Se añadió al carrito');
    }

    return(
        data[id - 1] ?
        <div className="container-producto-comprar">
            <h1>Producto</h1>
            <div className="container-producto-comprar__detalles">
                <div className="container-producto-comprar__img">
                    <img src={storeItems[id - 1].imgUrl} alt="imagen" />
                </div>
                <div className="container-producto-comprar__form">
                    <div className="container-producto-comprar__form-titulo"> {storeItems[id - 1].nombre}</div>
                    <div className="container-producto-comprar__form-titulo-resto">Tamaño</div>
                    <div className="container-producto-comprar__form-a">
                        <p>Mira tu medida <a href="#" onClick={() => cambiarMostrar(true)}>aqui</a></p>
                        <Modal mostrar={mostrar} cambiarMostrar={() => cambiarMostrar(false)}/>
                    </div>
                    <div className="container-producto-comprar__form-radio">
                        <label><input className="myRadio" type="radio" value="extra-small" name="talla"/>Extra small</label>
                        <label><input className="myRadio" type="radio" value="small" name="talla"/>Small</label>
                        <label><input className="myRadio" type="radio" value="medio" name="talla"/>Medio</label>
                        <label><input className="myRadio" type="radio" value="large" name="talla"/>Large</label>
                        <label><input className="myRadio" type="radio" value="extra-large" name="talla"/>Extra large</label>
                    </div>
                    
                    <div className="container-producto-comprar__form-titulo-resto">Color</div>
                    <div className="container-producto-comprar__color">
                        <p>{storeItems[id - 1].color}</p>
                    </div>

                    <div className="container-producto-comprar__form-titulo-resto">Detalle</div>
                        <div className="container-producto-comprar__form-detalles">
                            <div className="texto-iconos">
                                <FontAwesomeIcon className="container-producto-comprar__form-iconos" icon={faCheckDouble}/><p>Polo 100% algodón.</p>
                            </div>
                            <div className="texto-iconos">
                                <FontAwesomeIcon className="container-producto-comprar__form-iconos" icon={faCheckDouble}/><p>Diseño original.</p>
                            </div>
                            <div className="texto-iconos">
                            <FontAwesomeIcon className="container-producto-comprar__form-iconos" icon={faCheckDouble}/><p>Totalmente lavable.</p>
                            </div>
                            <div className="texto-iconos">
                            <FontAwesomeIcon className="container-producto-comprar__form-iconos" icon={faCheckDouble}/><p>Estampado cero tacto.</p>
                            </div>
                        </div>
                    <div className="precio" id="precio">
                        <p>S/. {storeItems[id - 1].precio}</p>
                    </div>
                    {/* <FontAwesomeIcon icon={faCartPlus} /> */}
                    <button className="button" id="btnAgregar" onClick={() => añadirCarrito()}>
                        {textoBoton}
                    </button>
                </div>
            </div>
        </div>
        :
        <Navigate replace to='/'/>
    );
}

export default ProductoComprar;