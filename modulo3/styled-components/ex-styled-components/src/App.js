import { Container, DivCard } from './style.js'
import { Cabecalho } from './style.js'
import { ColunaDireita } from './style.js'
import { ColunaEsquerda } from './style.js'
import { Centro } from './style.js'
import { Rodape } from './style.js'

import logo from './logo.png'
import { useState } from 'react'
import Card from './Components/Card.jsx'

function App() {

  const [escrito, setEscrito] = useState('')
  const [msgFixada, setMsgFixada] = useState([])

  function handleAddMsg() {
    const newMsg = {
      msg: escrito,
      horario: new Date().toLocaleDateString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }
    setMsgFixada(prevState => [...prevState, newMsg])
  }


  
  return (
    <Container>
      <Cabecalho>
        <img src={logo} />
      </Cabecalho>

      <Centro>
        <ColunaEsquerda> </ColunaEsquerda>
        <span> Remetente </span>
        <input type="text" placeholder="Digite o remetente..." />

        <span> Mensagem </span>
        <input
          type="text"
          placeholder="Digite sua msg..."
          onChange={e => setEscrito(e.target.value)}
        />
          
          
          {
            
          msgFixada.map(mssg => (<Card mensagem={mssg.msg} hora={mssg.horario} />))
         
          }
          

        <button onClick={handleAddMsg}> Enviar Mensagem</button>
        <ColunaDireita> </ColunaDireita>
      </Centro>

      <Rodape>
        Copright 2022 Felipe Alcantara All rights reserved , Rua tal do
        Sanfoneiro 2022
      </Rodape>
    </Container>
  )
}

export default App