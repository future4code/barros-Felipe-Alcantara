import {Container} from "./style"
import { useNavigate } from "react-router-dom"


export function AdminHomePage(){
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }
  
  return(
      <Container>
      <h1> Área Administrativa </h1>
        
        <form>
          <label>Login</label>
          <input type="text" name="login"/>

          <label> Senha </label>
          <input type="password" name="password"/>

          
          <button> Entrar </button>
          <button onClick={goToHome}> Voltar </button>
        
        </form>

      
      </Container>
    
  )
}