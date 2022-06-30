import React from 'react'
import './style.css'

export function SecaoComentario(props) {

  function onChangeComentario(write) {
    console.log(write)
	}
  return (
    <div className="CommentContainer">
      <input
        className="InputComentario"
        placeholder={'Comentário'}
				onChange={ e => onChangeComentario(e.target.value)}
				value={props.aoEnviarcomentario}
        
      />
      <button onClick={props.aoEnviar}>Enviar</button>
    </div>
  )
}
