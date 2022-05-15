import React from 'react';
import Topo from "./Topo"
function Perguntas(props){
    const[mostrarPergunta, setMostrarPergunta]=React.useState("valor inicial")

return(
    <>
    {
 (mostrarPergunta == "valor inicial") ? 
        <div onClick={()=>setMostrarPergunta("hello")}className="perguntas"> 
        <h2>Pergunta {props.numero}</h2>
        <ion-icon  class="play" name="play-outline"></ion-icon>
        </div>
    : 
    <div className="pergunta">
        <div className="renderPergunta">
            {props.questao}
        </div>
        <div  class="iconePergunta"><ion-icon class="ion" name="arrow-redo-circle"></ion-icon></div>
    </div>
    }
  </>
)

}
export default function Tela2() {
    
    const perguntas = [
        {
            pergunta : "O que é JSX?",
            resposta : " Uma extensão de linguagem do JavaScript"
        },
        {
            pergunta : " O React é __ ",
            resposta : " uma biblioteca JavaScript para construção de interfaces"
        },

    ]
    return (
        <>
        <Topo />
        <div className="containerDePerguntas">
        {perguntas.map((pergunta, index)=> <Perguntas numero = {index + 1} questao = {pergunta.pergunta}/>)}
        </div>
        </>
        )
}