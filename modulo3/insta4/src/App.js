import React, { useState } from 'react';
import Post from './components/Post/Post';
import {MainContainer} from './style.js'


function App() {
  

  const [arrayPost, setArrayPost] = useState([
    
    {nomeUsuario: 'jose', fotoUsuario: 'https://picsum.photos/50/50', pic: "https://picsum.photos/200/150"},
    {nomeUsuario: 'Pedro', fotoUsuario: 'https://picsum.photos/50/52', ic: "https://picsum.photos/200/151"},
    {nomeUsuario: 'Maria', fotoUsuario: 'https://picsum.photos/50/52', pic: "https://picsum.photos/200/152"}
  ])
  
  const arrayMap = arrayPost.map((item, index) => {
    return <Post 
            key={index} nomeUsuario={item.nomeUsuario} fotoUsuario={item.fotoUsuario} fotoPost={item.pic} 
            />
            
  });
    console.log(arrayPost)
    
    const[inputNome, setInputNome]= useState('')
    const[inputTexto, setInputTexto] = useState('')
    const[input, setInput] = useState('')
    
    const addNome = (e)=>{
      setInputNome(e.target.value)
    }    
    
    const addText=(e) => {
      setInputTexto(e.target.value)
    }

    const addInput = (e) => {
      setInput(e.target.value)
    }


    const addClick = (e)=> {
    e.preventDefault()

    const arrayNovo=[...arrayPost, {nomeUsuario:inputNome, fotoUsuario: 'https://picsum.photos/50/50', pic:"https://picsum.photos/200/150"}]
    
    setArrayPost(arrayNovo)

    console.log("clicked")

    setInputNome('')
    setInputTexto('')
    setInput('')


  }
    return(
   

  <MainContainer>
    {console.log(arrayPost)}
    {arrayMap}

      <form> 
        <input type='text' required placeholder='nome...' valeu={inputNome} onChange={addNome}/>
        <input type='text' required placeholder='msg... ' value={inputTexto} onChange={addText}/>
        <input type='text' required placeholder='msg... ' value={input} onchange={addInput}/>
        <button type="submit" onClick={addClick}> Adicionar </button>
      </form>

  </MainContainer>
  
)

    }


export default App;
