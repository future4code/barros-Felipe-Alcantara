import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
  return(
      <div className="CardPequeno">
          <div>
            <img src={props.imagem} />
         </div>
         <p>{props.descricao}</p>
    </div>
  )
}

export default CardPequeno
