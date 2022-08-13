import { useNavigate } from "react-router-dom"


export function ApplicationFormPage(){
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }


  return(
    <section>
      <h1> AplicationFormPage </h1>
      <button onClick={goToHome}> Home </button>
    </section>
  )
}