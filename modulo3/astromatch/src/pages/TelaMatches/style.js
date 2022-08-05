import styled from "styled-components";

export const CardList = styled.div`
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
export const LimparVoltar = styled.div`
display: flex;
justify-content: space-between;
border-bottom: 1px solid black;
margin-top: 20px;
`
export const Limpar = styled.span`
display: flex;
justify-content: left;
cursor: pointer;
font-size: 1.7rem;
color: blueviolet;
margin-bottom: 7px;
transition: transform 0.3s;
    :hover{
    transform: scale(1.3);}
`
export const Voltar = styled.span`
display: flex;
justify-content: right;
font-size: 1.7rem;
color: blueviolet;
cursor: pointer;
margin-right: 8px;
transition: transform 0.3s;
    :hover{
    transform: scale(1.3);
}
`
export const Lista = styled.div`
font-weight: bold;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
overflow: hidden;
overflow-y: scroll;
height: 70%;
::-webkit-scrollbar {width: 10px;}

::-webkit-scrollbar-thumb {
    background-color: rgb(117, 49, 146);   
    opacity:40%;
    border-radius: 4px;
}
::-webkit-scrollbar-track {background: transparent;}
`