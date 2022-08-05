import React, { useState } from "react";
import TelaInicial from "./pages/TelaInicial";
import TelaMatches from "./pages/TelaMatches";
import styled from "styled-components";

const Box = styled.div`
display: flex;
justify-content: center;
text-align:center ;
`
const Header = styled.div`
position: absolute;

    span{
    display: flex ;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 30px;
    margin-top: 15px;
    color:greenyellow ;
    font-weight: bold ;

    i{
    color: green;
    font-weight: bold ;
  }

}
`

const Container = styled.div`
display: flex;
flex-direction: column;
border: 4px solid black;
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
border-radius: 15px;
height: 600px;
width: 470px;
`

export default function App() {
  const [trocapagina, setTrocaPagina] = useState(true)

  const trocarTela = () => {
    setTrocaPagina(!trocapagina)
  }

  return (
    <Box>
      <Header>
        <span>astro<i>match</i> </span>
      </Header>
      <Container>
        {trocapagina ? <TelaInicial trocaTela={trocarTela} /> : <TelaMatches trocaTela={trocarTela}/>}
      </Container>
    </Box>

  );
}


