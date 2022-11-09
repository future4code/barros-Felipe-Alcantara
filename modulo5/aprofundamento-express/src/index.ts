import express, {Request, Response}  from 'express';
import cors from 'cors'
import {arrayAfazeres} from './data'

 const app = express();

 app.use(express.json())

 app.use(cors())


 //Exercicio 1
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("Pong")
})

//Exercicio 4
app.get("/afazeres/status", (req: Request, res: Response)=>{
    const tarefas = req.query.status
    let statusTarefa 
    
    if(!tarefas){
       res.status(400).send("Erro: Informe true ou false")
    } else if(tarefas==="true"){
        statusTarefa = arrayAfazeres.filter((item)=>{
          return item.completed===true
      })
    }else if(tarefas==="false"){
      statusTarefa = arrayAfazeres.filter((item)=>{
        return item.completed===false
    })

    }
    res.status(200).send(statusTarefa)
})

//Exercicio 5
app.post("/afazeres",(req: Request, res: Response)=>{
    const afazeresAdicionados= req.headers.authorization
    const {title, completed} = req.body

    if(!afazeresAdicionados || !title || !completed ){
      res.status(400).send("Erro: Informe os parametros")

    }
    const addTarefas = arrayAfazeres.push({
    userId: Number(afazeresAdicionados),
    id: Math.random()*10,
    title,
    completed,
    })

    res.status(200).send(arrayAfazeres)
})

  //exercicio 6 
  app.put("/afazeres/:id", (req: Request, res: Response) => {
    const editarTardefas = req.params.id
    if(!editarTardefas)
    res.status(400).send("Erro:  Informe um id de tarefa.")
    
    for(let i=0; i<arrayAfazeres.length; i++){
      if(arrayAfazeres[i].id === Number(editarTardefas)) {
        
        arrayAfazeres[i].completed = !arrayAfazeres[i].completed
      }
    }
    res.status(200).send(arrayAfazeres)
})

//exercicio 7
 app.delete("/deletar/:id", (req: Request, res:Response)=>{
    const del = req.params.id
    if(!del){
      res.status(404).send("Erro ao deletar")
    }
    const delTarefas = arrayAfazeres.filter((tarefa)=>{
      return tarefa.id !== Number(del)
    }) 
    res.status(200).send(delTarefas)
 })

//Exercicio8
 app.get("/afazerUsuario/:userId", (req: Request, res: Response)=>{
    const afazerUsuario= req.params.userId
    if(!afazerUsuario){
    res.status(404).send("Deu erro")
  }
  const afazer = arrayAfazeres.filter((item)=>{
      return item.userId === Number(afazerUsuario)
  })
    res.status(200).send(afazer)
 })
 
 app.listen(3003, () =>{
   console.log("Servidor rodando em http://localhost:3003")
 })


 //  Exercicio 9 

 // ->> https://documenter.getpostman.com/view/22376814/2s8YKGjMBZ