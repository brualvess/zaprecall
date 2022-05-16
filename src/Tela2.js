import React from 'react';
import Topo from "./Topo"
import Rodape from './Rodape';
function ErrosAcertos(props) {

    return (
        <>
            {(props.tipo == "esqueceu") ?
                <div className="perguntas">
                    <h2 className="p red">Pergunta {props.numero}</h2>
                    <ion-icon class="play red " name="close-circle"></ion-icon>
                </div> :
                (props.tipo == "quase") ?
                    <div className="perguntas">
                        <h2 className="p orange">Pergunta {props.numero}</h2>
                        <ion-icon class="play orange" name="help-circle"></ion-icon>
                    </div>
                    :
                    <div className="perguntas">
                        <h2 className="p green">Pergunta {props.numero}</h2>
                        <ion-icon class="play green" name="checkmark-circle"></ion-icon>
                    </div>
            }
        </>
    )
}
function Perguntas(props) {
    const [mostrarPergunta, setMostrarPergunta] = React.useState("valor inicial")

    function chamarContagem(valor){
        props.contagem(valor)
        setMostrarPergunta(valor)
    }

    return (
        <>
            {
                (mostrarPergunta == "valor inicial") ?
                    <div onClick={() => setMostrarPergunta('questao')} className="perguntas">
                        <h2>Pergunta {props.numero}</h2>
                        <ion-icon class="play" name="play-outline"></ion-icon>
                    </div>
                    :
                    (mostrarPergunta == "questao") ?
                        <div className="pergunta">
                            <div className="renderPergunta">
                                {props.questao}
                            </div>
                            <div class="iconePergunta"><ion-icon onClick={() => setMostrarPergunta('resposta')} class="ion" name="arrow-redo-circle"></ion-icon></div>
                        </div>
                        :
                        (mostrarPergunta == "resposta") ?
                            <div className="pergunta">
                                <div className="renderPergunta">
                                    {props.resposta}
                                    <div className="botoes">
                                        <div onClick={() => chamarContagem("esqueceu")} className="botaoText vermelho"> Não <p />lembrei</div>
                                        <div onClick={() => chamarContagem("quase")} className="botaoText laranja "> Quase não <p />lembrei</div>
                                        <div onClick={() => chamarContagem("lembrou")} className="botaoText verde ">Zap!</div>
                                    </div>
                                </div>
                            </div>
                            :
                            <ErrosAcertos numero={props.numero} tipo={mostrarPergunta} />


            }

        </>
    )

}
export default function Tela2() {
const [contagem, setContagem]=React.useState([])
    const perguntas = [
        {
            pergunta: "O que é JSX?",
            resposta: " Uma extensão de linguagem do JavaScript"
        },
        {
            pergunta: " O React é __ ",
            resposta: " uma biblioteca JavaScript para construção de interfaces"
        },
        {
            pergunta: "Componentes devem iniciar com __",
            resposta: "letra minúscula"
        },
        {
            pergunta: "Podemos colocar __ dentro do JSX",
            resposta: "expressoes"
        },
        {
            pergunta: "Usamos estado (state) para __",
            resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
        },
        {
            pergunta: "O ReactDOM nos ajuda __",
            resposta: " interagindo com a DOM para colocar componentes React na mesma"
        },
        {
            pergunta: "Usamos o npm para __",
            resposta: "passar diferentes informações para componentes "
        },
        {
            pergunta: "Usamos props para __  ",
            resposta: " uma biblioteca JavaScript para construção de interfaces"
        },
    ]

    function adicionarNoArray (value){
        const novoArray =[...contagem, value]
        setContagem(novoArray)
    }

    perguntas.sort(comparador)
    return (
        <>
            <Topo />
            <div className="containerDePerguntas">
                {perguntas.map((pergunta, index) => <Perguntas numero={index + 1} questao={pergunta.pergunta} resposta={pergunta.resposta} 
                 contagem = {adicionarNoArray} />)}
            </div>
            <Rodape contagem = {contagem}/>
        </>
    )
}


function comparador() {
    return Math.random() - 0.5;
}