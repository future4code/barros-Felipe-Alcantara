import React from 'react'
import './style.css'

export function SecaoComentario(props) {

  function onChangeComentario(write) {
    console.log(write)

    

  function handleAddpostagem() {
    const newPost = { 
      nome: props.momeUsuario,
      foto: props.fotousuario,
      fotoPost: props.fotoPost
    }
    console.log (newPost)
  }

	}
  return (
    <div className="CommentContainer">
      <input
        onCLick={handleAddpostagem}
        className="InputComentario"
        placeholder={'Comentário'}
				onChange={ e => onChangeComentario(e.target.value)}
				value={props.aoEnviarcomentario}
        
      />
      <button onClick={props.aoEnviar}>Enviar</button>
    </div>
  )
}
