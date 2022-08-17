import styled from "styled-components"

export const Container = styled.section`
height: 100px;
text-align: center ;
line-height: 100px ;
font-size: 24px;


button {
  
  margin: 20px 20px 84px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: filter 0.2s;

      :hover{ filter: brightness(0.9) }
    }

      form{
      display: flex;
      flex-direction: column;
      max-width: 400px ;
      margin: auto;
      padding: 10px ;
    }

    input, select{
      margin: 10px;
      padding:5px;
      border: 1px solid #ccc;
      border-radius: 4px ;
    }

    h1{
      font-family: Arial, Helvetica, sans-serif;
    }

`