import {Container} from "./style"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export function AdminHomePage(){

  const [form, onChange] = useForm({email: '', password: '',})



  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }
  
  const fazerlogin = (event) => {
    event.preventDefault()
    axios.post(`${BASE_URL}/felipe-alcantara-login}`, form)
    .then((res) => {
      console.log(res.data);
      localStorage.setItem('token', res.data.token);
      goToUserPage(navigate)
    })
    .catch((err) => {console.log(err.mensage);});
  }

  return(
      <Container>
      <h1> Área Administrativa </h1>
        
        <form onSubmit={fazerlogin}>

          <label htmlFor='email' >Login</label>
            <input 
              id='email'
              name='email'
              type="email" 
              placeholder="E-mail"
              value={form.email}
              onChange={onChange}
              required
              />
          

          <label> Senha </label>
          <input type="password" name="password"/>

          
          <button> Entrar </button>
          <button onClick={goToHome}> Voltar </button>
        
        </form>

      
      </Container>
    
  )
}