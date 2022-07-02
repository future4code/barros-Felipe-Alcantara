
import {Container} from './style.js'
import {Cabecalho} from './style.js'
import {ColunaDireita} from './style.js'
import {ColunaEsquerda} from './style.js'
import {Centro} from './style.js'
import {Rodape} from './style.js'
import logo from './logo.png'

function App() {

  return ( 
    <Container>
        
        <Cabecalho> 
          <img src={logo}/>
        </Cabecalho>
    
          <Centro>
            <ColunaEsquerda>  </ColunaEsquerda>

            <span> remetente </span> <input type="text"/> 
            <span>MSG </span> <input type="text"/>
            <button>Enviar Mensagem</button> 

            <ColunaDireita> </ColunaDireita> 
          </Centro>
         
      <Rodape>Copright 2022 Felipe Alcantara All rights reserved , Rua tal do Sanfoneiro 2022</Rodape>
      
      </Container>
    )

  
 }

export default App
