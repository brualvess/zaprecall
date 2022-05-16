
import { Link } from "react-router-dom";
import React from 'react'
export default function Boasvindas() {
    function renderTela2() {

    }
    return (
        <div className="tela1">
            <img className="logo" src="imagens/logo.png" />
            <div className="subtitulo">ZapRecall</div>
            <Link className="buttoniniciar" to="/perguntas">

                <div className="textCaixinha">Iniciar Recall!</div>

            </Link>
        </div>


    )
}