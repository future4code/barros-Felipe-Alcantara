import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import CardPerfil from "../../components/CardPerfil";
import { BsFillChatRightFill } from "react-icons/bs";
import { IoCloseCircle } from "react-icons/io5";
import { FaHeart } from "react-icons/fa"


const Container = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
width: 100%;

`
const Matches = styled.span`
display: flex;
justify-content: right;
font-size: 1.7rem;
margin-top: 20px;
border-bottom: 1px solid black;
:hover{
    font-size: 1.3rem;
}

span{
cursor: pointer;
margin-right: 8px;
}
`
const ContainerBotton = styled.div`
display: flex;
justify-content: center;
gap:50px;
font-size: 3rem;

`
const Deslike = styled.span`
cursor: pointer;
color: red;
transition:background-color 1s ;
font-size: 2.5rem;
transition: transform 0.3s;

:hover{
    transform: scale(1.5);
}
`
const Like = styled.span`
cursor: pointer;
color: burlywood;
font-size: 2.5rem;
transition: all .1s ;

    :hover {
        font-size:1.2em;
        color:  blueviolet;
        text-decoration: none;
        -webkit-text-stroke: 2px darkgreen; 
        transition-timing-function: ease-in-out;}
        
`


export default function TelaInicial(props) {
    const [perfil, setPerfil] = useState({})
    const [atualiza, setAtualiza] = useState(false)

    useEffect(() => {
        pegaPerfil()
    }, [atualiza])


    const pegaPerfil = () => {
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-alcantara-barros/person")
            .then(response => {
                setPerfil(response.data.profile)
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    const escolherPessoa = (id) => {
        const body = {
            id: id,
            choice: true
        }
        axios.post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/felipe-alcantara-barros/choose-person`,
         body)
            .then(response => {
                setAtualiza(!atualiza);
            })
            .catch(erro => {
                console.log(erro);
            })
    }

    return (
        <Container>
            <Matches>
                <span onClick={props.trocaTela}><BsFillChatRightFill/></span>
            </Matches>
            <CardPerfil perfil={perfil} />
            <ContainerBotton>
                <Deslike onClick={pegaPerfil}>
                     <IoCloseCircle /> 
                </Deslike>
                <Like onClick={() => {escolherPessoa(perfil.id) }}>
                    <FaHeart />
                </Like>
            </ContainerBotton>
        </Container>

    )
}