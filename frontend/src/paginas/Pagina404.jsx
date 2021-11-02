import React from 'react';
import imagem from "../assets/img/404.svg"
import '../assets/css/404.css'


const Pagina404 = () => {
    return (
        <main className="container flex flex--centro flex--coluna">
            <img className="predio-imagem" src={imagem} alt="Imagem de prédio não encontrado."/>
            <p className="naoencontrado-texto">Ops, página não encontrada!</p>
        </main>
    )
}

export default Pagina404;