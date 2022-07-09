import { DivCard } from '../style'

function Card(props){
  return(

    <DivCard>
    <div>
        <p>{props.mensagem}</p>
    </div>

    <div>
        <small>{props.hora}</small>
    </div>
    </DivCard>
    
    
  )
}

export default Card