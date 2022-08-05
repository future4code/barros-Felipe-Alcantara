import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction: column;
gap: 40px;
width: 100%;

`
export const Matches = styled.span`
display: flex;
justify-content: right;
font-size: 1.7rem;
margin-top: 20px;
border-bottom: 1px solid black;
color:blueviolet ;
transition: transform 0.3s;


    span{
    cursor: pointer;
    margin-right: 8px;
    transition: transform 0.3s;
    :hover{
    transform: scale(1.3);}
    }
    `
export const ContainerBotton = styled.div`
display: flex;
justify-content: space-evenly;
font-size: 2rem;

`
export const Deslike = styled.span`
cursor: pointer;
color: red;
transition:background-color 1s ;
font-size: 2.5rem;
transition: transform 0.3s;

    :hover{
    transform: scale(1.5);
}
`
export const Like = styled.span`
cursor: pointer;
color: blueviolet;
font-size: 2.5rem;
transition: transform 0.3s;

    :hover {
        transform: scale(1.5)}
        
`