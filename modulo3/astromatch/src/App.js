import React, { useState } from "react";
import axios from "axios";
import TelaInicial from "./pages/TelaInicial";
import TelaMatches from "./pages/TelaMatches";
import styled from "styled-components";

// movimenta o quadrado
const Box = styled.div`
display: flex;
justify-content: center;
text-align:center ;
`
const Header = styled.div`
position: absolute;
left: 50%;
transform: translateX(-50%);
font-size: x-large;
font-weight: bold;

span{
display: flex ;
margin-top: 15px ;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

const Container = styled.div`
display: flex;
flex-direction: column;
border: 3px solid black;
background-color: beige;
border-radius: 15px;
height: 600px;
width: 450px;
`

export default function App() {
  const [trocapagina, setTrocaPagina] = useState(true)

  const trocaTela = () => {
    setTrocaPagina(!trocapagina)
  }

  return (
    <Box>
      <Header>
        <span>Astromatch</span>
      </Header>
      <Container>
        {trocapagina ? <TelaInicial trocaTela={trocaTela} /> :
          <TelaMatches
            trocaTela={trocaTela}
          />}
      </Container>
    </Box>

  );
}


