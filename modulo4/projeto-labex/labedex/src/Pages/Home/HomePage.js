import { useNavigate } from "react-router-dom"
import {Container} from "./style"

export function HomePage(){
  const navigate = useNavigate();
  
  const goToAdmin = () => {
    navigate("/admin")
    }
  
    const goToListTripPage = () => {
      navigate("/listadeviagem")
      }

  return(
    <Container>
      <main>
      <h1> LaBex Home</h1>
      <button onClick={goToAdmin}> Áera Administrativa</button>
      <button onClick={goToListTripPage}> Lista de Viagens </button>
      </main>
    </Container>
  )
}

