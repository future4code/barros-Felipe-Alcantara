import { useNavigate } from "react-router-dom"
import { Container } from "./style"
import { useRequestData } from '../../Hooks/useRequestData';
import { GET_TRIPS } from "../../Constants";
export function ListTripsPage(){
    const navigate = useNavigate()

    const goToHome = () => {
      navigate("/")
    }

    const goToApplicationFormPage = () => { 
      navigate("/paginadeformulario")
    }

    const [listaDeViagens, loading, erro] = useRequestData(GET_TRIPS)
    const trips = listaDeViagens && listaDeViagens.map((trip)=>{
      return <li>{trip.trips}</li>
      
    })

  return(
    <Container>
      <h1> Lista de Viagens </h1>
        <section>
          {trips}
          <button onClick={goToHome}> &#129144;  Voltar </button>
          <button onClick={goToApplicationFormPage}> Increver uma Viagem &#9997;</button>
      </section>
    </Container>
  )
}