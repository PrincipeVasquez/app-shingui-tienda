import React from "react";

const Nosotros = () => {
    return(
        <div className="contenedor-inicio">
            <h1>Nosotros</h1>
            <div className="contenedor-nosotros__img">
                <img src="/img/img-nosotros.png" alt="img-nosotros" width="400" />
            </div>
            <p>Somos una empresa peruana de Iquitos que se dedica a la creación
                de polos 100% de algodón con diseños de la cultura pop inspirados en la
                Amazonía Peruana.
            </p>
            <p>Nuestros productos son de buena calidad y garantizamos el envío de cada
                uno de nuestros productos con total seguridad y profesionalismo, con 
                el monitoreo desde la salida del producto hasta la llegada de ella a la
                ubicación del cliente.
            </p>
            <p>Trabajamos de la mano de grandes artistas peruanos con muchos años de
                experiencia en el rubro, artistas cuyos trabajos pasan por un exhausto
                proceso de calidad para que cada diseño mostrado en nuestra marca,
                sea con total creatividad, ingenio y con su toque amazónico.
            </p>
        </div>
    );
}

export default Nosotros;