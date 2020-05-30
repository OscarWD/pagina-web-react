import React from 'react';
import imagenPresentacion from '../../assets/images/oscaralmeida.jpg';

function Presentation() {
    return (
        <div className="row align-items-center justify-content-center">
            <div className="col-md-4">
                <img
                    src={imagenPresentacion}
                    alt="oscar almeida"
                    className="img-fluid img-thumbnail shadow-lg rounded-circle"
                />
            </div>
            <div className="col-md-8">
                <h1 className="display-2 font-weight-bold">Hola, Soy Oscar</h1>
                <h2 className="h2">Desarrollador Back-end y Front-end</h2>
            </div>
            <div className="w-100"></div>
            <div className="col mt-5">
                <p className="h2">Actualmete soy analista de sistemas y desarrollador de software informatico, me gusta la programacion, el desarrollo web y aprender cada vez mas de las nuevas tecnologias en desarrollo de software</p>
            </div>
        </div>
    )
}

export default Presentation;