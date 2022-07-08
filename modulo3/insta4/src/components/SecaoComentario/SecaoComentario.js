import React, { useState } from 'react'
import { CommentContainer, InputComentario } from './style'


export function SecaoComentario(props) {
    return (
        <CommentContainer>
            <InputComentario className='InputComentario'
                placeholder={'Comentário'}
                value={props.comentario}
                onChange={props.onChangeComentario}
            />
            <button onClick={props.aoEnviar}>Enviar</button>
        </CommentContainer>
    )
}