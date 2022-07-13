import React from 'react'


const Etapa3=()=>{
  return(
    <div>
            <h2> Etapa 3 - Informações Gerais de Ensino </h2>
      
      <label>7. Por que você não terminou o curso de graduação?</label>
      <input type="Text"/>

      <label for="escolaridade">4. Você fez algum curso complementar?</label>
      <select id="escolaridade" name="escolaridade">
            <option value="CT">Curso Técnico</option>
            <option value="CI">Cursos de inglês</option>
            <option value="NFCC">Não fiz curso complementar</option>
      </select>
    </div>
  );
}

export default Etapa3;