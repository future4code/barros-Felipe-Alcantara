// ==================interpretação de codigo===============================================
// QUESTÃO 1

/*
const usuarios = [
  { nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo" }
]

const novoArrayA = usuarios.map((item, index, array) => {
   console.log(item, index, array)
})

a) O que vai ser impresso no console?
R= Será impresso no console todos os itens em forma de objetos, os index do array, e o total de arrays.

********************************************************************************************

QUESTÃO 2

const usuarios = [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]

const novoArrayB = usuarios.map((item, index, array) => {
  return item.nome
})

console.log(novoArrayB)

//a) O que vai ser impresso no console?
//R= Os itens do array com os nomes dos objetos. 

*************************************************************************************************

QUESTÃO 3

const usuarios = [
  { nome: 'Amanda Rangel', apelido: 'Mandi' },
  { nome: 'Laís Petra', apelido: 'Laura' },
  { nome: 'Letícia Chijo', apelido: 'Chijo' }
]

const novoArrayC = usuarios.filter((item, index, array) => {
  return item.apelido !== 'Chijo'
})

console.log(novoArrayC)

// a) O que vai ser impresso no console?
//R = somente os objetos do array Mandi e laura com a negação (exclusão) de Chijo


===============================Exercícios de escrita de código===================================
//Questão 1

//Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

//A) Crie um novo array que contenha apenas o nome dos doguinhos

const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' }
]

const arrayPets = pets.map((item, indice, array) => {
  return item.nome
})
console.log(arrayPets)

//*****************************************************************************************************

//B)  Crie um novo array apenas com os cachorros salsicha

const arrayPets2 = pets.filter(dog => {
  if (dog.raca === 'Salsicha') {
    return dog.raca
  }
})

console.log(arrayPets2)

//****************************************************************************************************

// C)



const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' }
]

const petsDesconto = pets.map(dog => {
  if (dog.raca === 'Poodle') {
    console.log(
      `Você ganhou um cupom de desconto de 10% para tosar o ${dog.raca} ${dog.nome} `
    )
  }
})

//**************************************************************************************************

//QUESTÃO 2 

Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:



// A) a) Crie um novo array que contenha apenas o nome de cada item
const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 }
]

const nomeItens = produtos.map(nomeItem => {
  return nomeItem.nome
})
console.log(nomeItens)

********************************************************************************************************

b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
*/

const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 }
]

const desconto5 = produtos.map(produto => {
  const desconto = produto.preco * 0.05
})

// irei terminar, o tempo foi curto hoje entre o dia de trabalho e tarefas.
