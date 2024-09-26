import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import ImagemButton from './components/ImagemButton/ImagemButton'
import CardPequeno from './components/CardPequeno/CardPequeno'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://github.com/fmalcantara.png"
          nome="Felipe Alcântara"
          descricao="Oi, eu sou o Felipe M. Alcântara. Sou estudante de desnvolvimento full Stack Labenu."
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/1076/1076323.png"
          descricao="Rodovia Br 316, s/n, Condominio das Garças"
        />

        <CardPequeno 
        
        imagem="https://images.vexels.com/media/users/3/140928/isolated/preview/8d338f5acd60bfbc9b5fb1b208c8814f-icone-de-e-mail-com-contorno.png"
        descricao="fmalcantara@hotmail.com" />
      </div>

      <div className="page-section-container">
        
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://images.tcdn.com.br/img/img_prod/800622/noticia_16796379805fdcb16804a4a.png"
          nome="SEFA-PA"
          descricao="Suporte técnico e infraestrutura de Redes"
        />
          <CardGrande
          imagem="https://www.gov.br/mcti/pt-br/composicao/rede-mcti/capa-mini/cnpq.png"
          nome="CNPq"
          descricao="Engenharia e projetos de Telecom"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  )
}

export default App
