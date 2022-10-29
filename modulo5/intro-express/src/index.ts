import express, {application, Request, Response} from 'express';
import cors  from 'cors'
import { arrayUsers, arrayUsersPost } from './data';
import { resolve } from 'path';

const app = express()

app.use(express.json())

app.use(cors())

//Exercicio 1
app.get("/", (req: Request, res: Response)=>{
  res.send("Hello from express")
})

//Exercicio 4
app.get("/users", (req: Request, res: Response)=>{
  const userData = arrayUsers
  res.status(200).send(userData)
})

app.get("/post", (req: Request, res: Response)=>{
  const userPost = arrayUsersPost
  res.status(200).send(userPost)
})

//exercicio 8
app.get("/post/:id", (req: Request, res: Response)=>{
  const userPostId = req.params.id
  const userid= arrayUsersPost.filter((user)=>{
    return user.userId === Number(userPostId)
  })
  if( !userPostId || !userid || userid.length===0 ){
    res.status(404).send("Erro: Informe um ID")
  }
  res.status(200).send(userid) 
})

app.listen(3003, ()=> {
  console.log("servidor rodando na porta 3003")
});