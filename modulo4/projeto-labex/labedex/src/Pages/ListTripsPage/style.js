import styled from "styled-components";

export const Container= styled.div`
height: 100px;
text-align: center ;
line-height: 100px ;
font-size: 24px;

button{
  margin: 50px 20px 84px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: filter 0.2s;

  :hover{
    filter: brightness(0.9)
  }
  
}

`