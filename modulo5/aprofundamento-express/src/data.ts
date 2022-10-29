import { privateDecrypt } from "crypto"

//Exercicio 2
type afazer = 
  {
    "userId": number
    "id": number,
    "title": string
    "completed": boolean
  }

  // Exercicio 2
  export const arrayAfazeres: afazer[] = [
  {
    userId: 1,
    id: 1,
    title: "pintar parede",
    completed: false,
  },

  {
    userId: 1,
    id: 2,
    title: "lavar carro",
    completed: true,
  },

  {
    userId: 2,
    id: 3,
    title: "varrer a casa",
    completed: false,
  },

  {
    userId: 2,
    id: 4,
    title: "capinar",
    completed: true,
  }
]