import React from "react";
import styled from "styled-components";

const Card = styled.div`
display: flex;
box-shadow: 0 2px 10px 0 rgba(117,117,117,0.77);
position: relative;
border-radius: 5px;
overflow: hidden;
transition: 0.5s;
height: 400px;
align-items: center;
width: 100%;

img{
max-width: 100%;
display: flex;
z-index: 1;
max-height: 100%;
margin: auto;
}
`
const Info = styled.div`

position: absolute;
bottom: 0;
width: 100%;
background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
color: white;
display: flex;
flex-direction: column;
padding: 15px;
z-index: 2;
justify-content: end;
text-align: start;
height: 80%;
padding: 5px;
`
const Title = styled.div`
display: flex;

`
const Nome = styled.div`
font-weight: bold;
font-size: 24px;
`
const Idade = styled.div`
margin-left: 10px;
font-size: 20px;
`
const Descriacao = styled.p`
margin-top: 5px;
`

export default function CardPerfil(props) {

    return (
        <Card>
            <img src={props.perfil.photo}></img>
            <Info>
                <Title>
                    <Nome>{props.perfil.name}</Nome>
                    <Idade>{props.perfil.age}</Idade>
                </Title>
                <Descriacao>{props.perfil.bio}</Descriacao>
            </Info>
        </Card>
    )
}