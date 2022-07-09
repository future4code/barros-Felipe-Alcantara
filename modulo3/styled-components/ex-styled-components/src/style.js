import styled from 'styled-components'

export const Container = styled.div`
  
  height: 95vh;
`

export const Cabecalho = styled.header`
  display: flex;
  height: 70px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-top: gray;

`

export const ColunaEsquerda = styled.div`
  background-color: #FFA500;
  display: flex;
  height: 100%;
  flex: 0.2;
`

export const Centro = styled.main`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 80vh;
  width: 100%;
  
  input {
    align-items: end;
  }
`
export const ColunaDireita = styled.div`
  background-color: #FFA500;
  display: flex;
  flex: 0.2;
  height: 100%;

  justify-content: flex-end;
`

export const Rodape = styled.footer`
  /* width: 100%; */
  /* position: fixed; */
  /* bottom: 0; */
  display: flex;
  justify-content: center;
  background: #e6e6e6;
  height: 50px;
  align-items: center;
  
`
export const DivCard = styled.li`
  display: flex;
  height: 30px;
  width: 50%px;
  padding: 10px;
  background-color: #e9db79;
  list-style: none;
  border-radius: 3px;
  justify-content: space-between;
  margin-top: 20px;
 
 div{
  align-items: center; 
 }
`