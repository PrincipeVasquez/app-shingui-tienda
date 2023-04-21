import React from "react";
import { useContext } from "react";
import { dataContext } from "./Context/dataContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faTrash } from '@fortawesome/free-solid-svg-icons'
import ProductoCantidad from "./ProductoCantidad";
import { useState, useEffect } from "react";

const Carrito = () => {
    const {carrito, cambiarCarrito} = useContext(dataContext)

    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const eliminarProducto = (id) => {
        const productoAEliminar = carrito.find((element) => element.id === id)

        const nuevoCarrito = carrito.filter((item) => {
            return item !== productoAEliminar;
        })

        cambiarCarrito(nuevoCarrito);
    }

    // APLICANDO EL LOCALSTORAGE

    const carritoGuardado = localStorage.getItem('carritoSaved') ?
                          JSON.parse(localStorage.getItem('carritoSaved'))
                          : [];

    // const carritoGuardado = JSON.parse(localStorage.getItem('carrito'));

    console.log(carritoGuardado);
    // cambiarCarrito(carritoGuardado)
    // cambiarCarrito(carritoGuardado);

    useEffect(() => {
        localStorage.setItem('carritoSaved', JSON.stringify(carrito));
      }, [carrito])

    // FIN LOCALSTORAGE

    return(
        <div className="contenedor-carrito">
           <h1>Carrito</h1>
           {carrito.length ?
                <div className="contenedor-carrito__producto-total">
                <table>
                 <thead>
                     <tr>
                         <th scope="col">Imagen</th>
                         <th scope="col">Nombre</th>
                         <th scope="col">Cantidad</th>
                         <th scope="col">Color</th>
                         <th scope="col">Talla</th>
                         <th scope="col">Subtotal</th>
                         <th scope="col">X</th>
                     </tr>
                 </thead>
                 <tbody>
                     <>
                         {carrito.map((product, key) => {
                         return(
                                 // <div className="contenedor-carrito__productos" key={product.id}>
                                 <tr key={product.id}>
                                     <td scope="row"><img src={product.imgUrl} width="50" alt="imagen" /></td>
                                     <td scope="row"><p className="contenedor-carrito-p">{product.nombre}</p></td>
                                     <td scope="row"><ProductoCantidad product={product} /></td>
                                     <td scope="row"><p className="contenedor-carrito-p">{product.color}</p></td>
                                     <td scope="row"><p className="contenedor-carrito-p">{product.talla}</p></td>
                                     <td scope="row"><p className="contenedor-carrito-p">S/. {product.precio * product.cantidad}.00</p></td>
                                     <td scope="row"><p className="contenedor-carrito-p"><FontAwesomeIcon onClick={() => eliminarProducto(product.id)} className="contenedor-carrito__icono-trash" icon={faTrash}/></p></td>
                                 </tr>
                                 // </div>
                             );
                         })}
                     </>
                 </tbody>
                </table>
                <div className="contenedor-carrito__total">
                 <h3>Carrito total</h3>
                 <div className="contenedor-carrito__body">
                     <div className="contenedor-carrito__resultado">
                         <p>Total:</p>
                         <h4>S/. {total}</h4>
                     </div>
                     <a href="#">¿Tienes un cupón?</a>
                     <button>PROCESAR COMPRA</button>
                 </div>
                </div>
            </div>
            :
            <>
                <h4 className="contenedor-carrito__vacio">Tu carrito esta actualmente vacio</h4>
                <FontAwesomeIcon className="contenedor-carrito__icono" icon={faFile}/>
            </>
           }
        </div>
    );
}

export default Carrito;