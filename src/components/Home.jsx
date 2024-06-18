import React from "react";
import appFirebase from "../credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(appFirebase);

import Bodega from "../assets/bodega.jpg";
import Malbec from "../assets/malbec.jpg";
import Rosado from "../assets/rosado.png";
import Blanco from "../assets/blanco.jpg";

const Home = ({ correoUsuario }) => {
    return (
        <div>
            <nav className="menu navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item ms-2">
                                    <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a className="nav-link text-white" href="#">Visitas</a>
                                </li>
                                <li className="nav-item ms-3">
                                    <a className="nav-link text-white" href="Sunset.jsx">Sunset</a>
                                </li>
                            </ul>
                        </div>
                        <form role="search">
                            <button className="btn btn-dark" style={{ width: '175px' }} onClick={() => signOut(auth)}>
                                Cerrar Sesión
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
            <div className="titulo">
                <div className="container text-center p-2">
                    <div className="p-5">
                        <h1 className="display-4">Bienvenido a WINE-SENSE</h1>
                        <p className="lead">A continuación podrás comenzar a conocer nuestra bodega</p>
                    </div>
                </div>
            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Bodega} alt="Descripción de la imagen" className="img-fluid" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h2>NUESTRA HISTORIA</h2>
                        <p>Fundada en 1990, nuestra bodega ha crecido de un sueño apasionado a una reconocida productora de vinos de alta calidad. Combinamos técnicas tradicionales y modernas, respetando el medio ambiente y nuestro terroir excepcional. Con numerosos premios nacionales e internacionales, seguimos comprometidos con la excelencia y la innovación, ofreciendo vinos que reflejan nuestra dedicación y amor por la viticultura.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid vinos" style={{ backgroundColor: '#f9f9c5' }}>
                <div className="container">
                    <div className="row mt-5 p-4">
                        <div className="col-12 text-center">
                            <h2>NUESTROS VINOS</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={Malbec} className="card-img-top" alt="Descripción de la imagen 1" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Malbec</h5>
                                    <p className="card-text">Muestra un color púrpura intenso y aromas a moras maduras y ciruelas. Es robusto en boca con taninos suaves, destacando sabores de frutas negras y un toque de especias, con un final largo y persistente</p>
                                    <button className="boton btn btn-primary">Ver Más</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={Rosado} className="card-img-top" alt="Descripción de la imagen 2" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Rosado</h5>
                                    <p className="card-text">Presenta un color rosa brillante y ofrece aromas frescos de fresas y frutos rojos. En boca es ligero y refrescante, con sabores jugosos de frutas rojas y un toque delicado de florales, culminando en un final limpio y vibrante</p>
                                    <button className="boton btn btn-primary">Ver Más</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4 d-flex justify-content-center">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src={Blanco} className="card-img-top" alt="Descripción de la imagen 3" />
                                <div className="card-body text-center">
                                    <h5 className="card-title">Blanco</h5>
                                    <p className="card-text">Muestra un color amarillo pálido y despliega aromas frescos de cítricos y frutas tropicales. En boca es ligero y refrescante, con sabores vibrantes de lima, piña y un toque sutil de melón, finalizando con una acidez equilibrada y persistente.</p>
                                    <button className="boton btn btn-primary">Ver Más</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
