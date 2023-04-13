import React from "react";

const Footer = () => {
    return(
        <div className="contenedor-footer">
            <div className="contenedor-footer__información">
                <div class="contenedor-footer__info">
                    <h4>Información</h4>
                    <p className="contenedor-footer__titulo">Ponte en contato con nosotros</p>
                    <p>+51 954684616</p>
                    <p>principevasquez932010@gmail.com</p>
                </div>
                <div class="contenedor-footer__info">
                    <h4>Compras</h4>
                    <p className="contenedor-footer__titulo">Adquiere tus polos ñañito</p>
                    <p>Tienda</p>
                    <p>Carrito</p>
                </div>
                <div class="contenedor-footer__info">
                    <h4>Contactos</h4>
                    <p className="contenedor-footer__titulo">Ubícanos</p>
                    <p>Whatsapp: 954684616</p>
                    <p>Calle Cabo Pantoja Nro. 202</p>
                    <p>Iquitos - Perú</p>
                </div>
                <div class="contenedor-footer__info">
                    <h4>Redes sociales</h4>
                    <p className="contenedor-footer__titulo">Búscanos</p>
                    <p>Facebook</p>
                    <p>Instagran</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className="contenedor-footer__pie-pagina">
                <p>Todos los derechos reservados</p>
                <p>© 2023, Shingui</p>
            </div>
        </div>
    );
}

export default Footer;