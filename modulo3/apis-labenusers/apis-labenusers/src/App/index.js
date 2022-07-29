import axios from "axios";
import React, { useState, useEffect} from "react";


function App() {

  const [itens, setItens] = useState([])

  const itensNaLista = itens.map((item, index) => {
    return (
      <ul>
        <li>{item.nome}</li>
        <li>{item.email}</li>
      </ul>
    )
  })
  
  const [inputName, setInputName]=useState("")
  const [inputEmail, setInputEmail]=useState("")

  const handleInputName = (e) => {
    setInputName(e.target.value)
    
  }

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value)
    
  }
  
//   const adicionar = (e) => {
//     e.preventDefault()

//     const itensAtualizados=[...itens, {nome: inputName, email: inputEmail}]
//     setItens(itensAtualizados);
// }


  useEffect(() => {
    getAllUser();
  }, []);

  //---------- Axios -----------
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
  const myHeaders = {
    headers: {
      Authorization: "felipe-alcantara-barros"
    }
  };

//GET
const getAllUser = () => {
  axios
    .get(url, myHeaders)
    .then((response) => {
      //console.log(response.data.result.list);
      setInputName(response.data.list);
    })
    .catch((erro) => {
      console.log(erro.response);
    });
};
//POST
const body = {
  name: inputEmail
};

const adicionar = (event) => {
  event.preventDefault();
  axios
    .post(url, body, myHeaders)
    .then(() => {
      alert("PlayList adicionada com sucesso!");
      getAllUser();
    })
    .catch((erro) => {
      alert("Ops! Algo deu errado!");
      //console.log(erro.response);
    });
  setInputName("");
};
  return(
  <>
   <h1>Exercicios LabUsers</h1>
    <div>
    <button> Trocar Tela </button>
    
   <div> 
    <input
   
    type="text"
    placeholder="Nome"
    onChange={handleInputName}
    value={inputName}
    />
    
    <input 
    type="text"
    placeholder="e-mail"
    onChange={handleInputEmail}
    value={inputEmail}
    />
    </div>
    <button onClick = {adicionar} >Criar Usuário</button>
    </div>
    <ul>{itensNaLista}</ul>

  </>
  
  )

}
export default App;
