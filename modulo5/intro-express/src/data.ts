//exercicio 2;
type User = {  
        id: number,
        name: string,
        phone: string,
        email: string,
        website: string,
  }

//Exercicio 3;
export const arrayUsers: User[] = [
  {
    id: 1,
    name: "Pedro",
    phone: "11111111",
    email: "pedro@pedro.com",
    website: "www.pedro.com",
  },

  {
    id: 2,
    name: "Maria",
    phone: "22222222",
    email: "maria@maria.com",
    website: "www.maria.com",

  },

  {
    id: 3,
    name: "Ana",
    phone: "33333333",
    email: "ana@ana.com",
    website: "www.ana.com",
  },

  {
    id: 4,
    name: "José",
    phone: "44444444",
    email: "jose@jose.com",
    website: "www.jose.com",

  }
]


//exercicio 6
type postUser = {  
    userId: number, 
    id: number,
    title: string,
    body: string,  
}


export const arrayUsersPost: postUser[] = [
  {
    userId: 1,
    id: 1,
    title: "Pedro post 1",
    body: "conteudo Pedro 1" 
  },

  {
    userId: 1,
    id: 2,
    title: "Pedro post 2",
    body: "conteudo Pedro 2" 
  },

  {
    userId: 2,
    id: 3,
    title: "Maria post 1",
    body: "conteudo Maria 1" 
  },

  {
    userId: 2,
    id: 4,
    title: "Maria post 2",
    body: "conteudo Maria 2",

  },

  { 
  userId: 3,
    id: 5,
    title: "Ana post 1",
    body: "conteudo Ana 1", 
  },

  {
    userId:3,
    id: 6,
    title: "Ana post 2",
    body: "conteudo Ana 2",
  },

  {
    userId:4,
    id: 7,
    title: "jose post 1",
    body: "conteudo jose 1",
  },

  {
    userId:4,
    id: 8,
    title: "jose post 2",
    body: "conteudo jose 2",
  },

]