
export default function Rodape(props) {

    return (
        <div className="rodape">
            {(props.contagem.length == 8) ? <Resultado contagem={props.contagem} /> : ""}
            <div className="ok">
                {props.contagem.length}/8 Concluídos
            </div>
            <div className="icons">
                {props.contagem.map((icone) => <Icons icone={icone} />)}
            </div>
        </div>
    )
}
function Icons(props) {
    return (
        (props.icone == "esqueceu") ? <ion-icon class="play red " name="close-circle"></ion-icon>
            :
            (props.icone == "quase") ? <ion-icon class="play orange" name="help-circle"></ion-icon>
                :
                <ion-icon class="play green" name="checkmark-circle"></ion-icon>
    )
}
function Resultado(props) {
    function verificando() {
        for (let i = 0; i < props.contagem.length; i++) {
            let resultado = props.contagem[i]
            if (resultado == "esqueceu") {
                return "Putz..."
            }

        } return "Parabens!"
    }
    return (
        <>
            {(verificando() == "Putz...") ?
            <>
                <div className="rst">
                    <img className="img" src="imagens/sad.png" />
                    <div className="resultado"><p>Putz...</p></div>
                    </div>
                <div className="frase"><p>Ainda faltam alguns...</p>
                Mas não desanime! </div>
                </>
                :
                <>
                <div className="rst">
                    <img className="img" src="imagens/party.png" />
                    <div className="resultado"><p>Parabéns!</p></div>
                </div>
                 <div className="frase"><p>Você não esqueceu de</p>nenhum flashcard!</div>
        </>
            }
        </>


    )
}