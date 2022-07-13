// import {Box} from './styled'
import React from 'react'

const Etapa1 = ()=>{
  return(
    <div>
     
      <h2> Etapa 1 - Dados Gerais </h2>

      <label>1. Qual seu Nome?</label> 
      <br/>
      <input type='text'/>

      <label>2. Qual sua Idade?</label>
      <br/>
      <input type='text'/>

      <label>3. Qual seu E-mail?</label>
      <br/>
      <input type='text'/>

      <label for="escolaridade">4.. Qual sua Escolaridade?</label>
      <select id="escolaridade" name="escolaridade">
            <option value="EMI">Ensino Médio Incompleto</option>
            <option value="EMC">Ensino Médio Completo</option>
            <option value="ESI">Ensino Superior Incompleto</option>
            <option value="ESC">Ensino Superior Completo</option>
      </select>
      
    </div>
  );
}

export default Etapa1;