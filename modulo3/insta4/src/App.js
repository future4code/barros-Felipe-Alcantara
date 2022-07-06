import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {

  const postagem = [
    {nome: "Paulinha", imagem: "https://picsum.photos/50/55", pic: "https://picsum.photos/40/55" },
    {nome: "Antonio", imagem: "https://picsum.photos/50/55", pic: "https://picsum.photos/210/55" },
    {nome: "Jose", imagem: "https://picsum.photos/9/50", pic: "https://picsum.photos/206/55" },
  ]

    const postagemMap=postagem.map( (item)=> {return <Post nomes={item.nome} foto={item.imagem} pic={item.pic}/>})

return(
  <div>
      {postagemMap}
  </div>
)

}


export default App;
