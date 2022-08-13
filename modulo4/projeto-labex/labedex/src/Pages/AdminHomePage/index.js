import { useNavigate } from "react-router-dom"


export function AdminHomePage(){
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }
  
  return(
    <section>
      <h1> AdminHomePage </h1>
      <button onClick={goToHome}> Voltar </button>
    </section>
  )
}