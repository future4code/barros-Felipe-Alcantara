import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { RiUserReceived2Fill } from "react-icons/ri";
import { AiOutlineClear } from "react-icons/ai";

const CardList = styled.div`
display: flex;
flex-direction: column;
gap:20px;


img{
width: 40px;
border-radius: 50%;
margin-right: 10px;

}
.ajustMachs{
    display: flex;
    margin: 5px;
}
`
const LimparVoltar = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
margin-top: 20px;
`
const Limpar = styled.span`
display: flex;
justify-content: left;
cursor: pointer;
font-size: 1.7rem;
color: rgb(117, 49, 146);
margin-bottom: 7px;
`
const Voltar = styled.span`
display: flex;
justify-content: right;
font-size: 1.7rem;
color: rgb(117, 49, 146);
cursor: pointer;
margin-right: 8px;

:hover{
    font-size: 1.3rem;
}
`
const Lista = styled.div`
overflow: hidden;
flex:none;
flex-flow: column nowrap;
overflow-y: scroll;
height: 70%;
::-webkit-scrollbar {width: 4px;}
::-webkit-scrollbar-thumb 
{background-color: rgb(117, 49, 146);
opacity:40%;
border-radius: 2px;
}
::-webkit-scrollbar-track {background: transparent;}
`


export default function TelaMatches(props) {
    const [matches, setMatches] = useState([])


    useEffect(() => {
        pegaMatches()
    }, [matches])
    // colocar o matche

    const pegaMatches = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-alcantara-barros/matches")
            .then(response => {
                setMatches(response.data.matches)
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    const limparLista = () => {
        axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-alcantara-barros/clear")
            .then(response => {
                pegaMatches(response.data.matches)
            })
            .catch(erro => {
                console.log(erro)
            })
    }

    const renderizar = matches.map((mat) => {
        return (
            <div className="ajustMachs" key={mat.id}>
                <img src={mat.photo} alt={mat.name} />
                <p>{mat.name}</p>
            </div>
        )
    })
    return (
        <CardList>
            <LimparVoltar>
                <Limpar onClick={() => limparLista(matches)}> <AiOutlineClear /></Limpar>
                <Voltar onClick={props.trocaTela}> <RiUserReceived2Fill /></Voltar>
            </LimparVoltar>
            <Lista>
                {renderizar}
            </Lista>
        </CardList>
    )
}