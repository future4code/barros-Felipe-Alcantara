import { useNavigate } from "react-router-dom"
import { Container } from "./style"
import { useRequestData } from '../../Hooks/useRequestData';
import { BASE_URL} from "../../Constants";

export function ListTripsPage(){

    const [listaDeViagens, loading, erro] = useRequestData(`${BASE_URL}felipe-alcantara-barros/trips`)

    const navigate = useNavigate()
    const goToHome = () => {
      navigate("/")
    }

    const goToApplicationFormPage = () => { 
      navigate("/paginadeformulario")
    }

    
    const trips = listaDeViagens && listaDeViagens.trips.map((trip)=>{
      return( 
      <div key={trip.id}>
        <li>{trip.name}</li>
        <li>{trip.planet}</li>
        <li>{trip.date}</li>
      </div>
      )
    })
    console.log(listaDeViagens)

  return(
    <Container>
      <h1> Lista de Viagens </h1>
        <section>
          {loading&&<p>Carregando...</p>}
          {!loading&&listaDeViagens&&trips}
          {!loading&&!listaDeViagens&&erro}
          <button onClick={goToHome}> &#129144;  Voltar </button>
          <button onClick={goToApplicationFormPage}> Increver uma Viagem &#9997;</button>
      </section>
    </Container>
  )
}