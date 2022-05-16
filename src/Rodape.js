export default function Rodape (props) {
    console.log(props.contagem)
    return (
        <div className="rodape">
        <div className="ok">
        {props.contagem.length}/8 Concluídos
        </div>
        <div className="icons">
            {props.contagem.map((icone)=> <Icons icone={icone}/>)}
        </div>
        </div>
    ) 
}
function Icons(props){
    return(
       (props.icone=="esqueceu") ?  <ion-icon class="play red " name="close-circle"></ion-icon>
        :
        (props.icone=="quase") ?  <ion-icon class="play orange" name="help-circle"></ion-icon>
        :
        <ion-icon class="play green" name="checkmark-circle"></ion-icon>
    )
}