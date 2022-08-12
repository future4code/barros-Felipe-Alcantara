import { useNavigate } from "react-router-dom"

export function HomePage(){

  const navigate = useNavigate();
  
  const goToAbout = () => {
    navigate("/admin")
  }
  
  return(
    <section>
      <h1> Home Page</h1>
      <button onClick={goToAbout}> Admin Home</button>
    </section>
  )
}

