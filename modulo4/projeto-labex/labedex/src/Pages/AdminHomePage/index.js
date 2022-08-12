import { useNavigate } from "react-router-dom"


export function AdminHomePage(){
  const navigate = useNavigate()

  const goToback = () => {
    navigate("/")
  }
  
  return(
    <section>
      <h1> AdminHomePage </h1>
      <button onClick={goToback}> Voltar </button>
    </section>
  )
}