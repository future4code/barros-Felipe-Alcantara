//===============Exercícios de interpretação de código====================

//// 1- O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

//R= O código está fazendo um loop e implementando valores na variavel "i". Esse loop tem o limite condicional até o numero 5 Somando e alocando sua implemntção na variável "valor"
//***********************************************************************************
//2 ) Leia o codigo abaixo

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

//a) O que vai ser impresso no console?
//R= OS numeros maiores que 18.

//b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//R= Para acessar o indice de cada elemento é suficiente o `for...in...` é suficiente

//*********************************************************************************************

//3) Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
//R = 1 as terisco na priema linha, 2 asteriocos na segunda linha e assim sucessivamnete até a 4 quarta linha com 4 asteriscos.

//===================- **Exercícios de escrita de código**===========================================

//QUESTÃO 1

// let quantidade = Number(prompt('Quantos bichinhos de estimação você tem?'))

// let guarde = []

// if (quantidade === 0) {
//   console.log('Que pena, Você pode adotar um Pet')
// } else {
//   for (let pet = 0; pet < quantidade; pet++) {
//     let nomes = prompt(`Digite o nome dos seus ${quantidade} bichinhos`)
//     guarde.push(nomes)
//   }
// }

// console.log(guarde)

//====================================================================================================

//QUESTÃO 2

let arrayOriginal = [7, 38, 5, 40, 13, 100, 103, 65, 50, 20, 2, 6]

//a)
for (let numero of arrayOriginal) {
  console.log(`A) ${numero}`)
}

//B)
for (let div of arrayOriginal) {
  console.log(`B) ${div / 10}`)
}

//C)
let novoArray = []

for (let pares of arrayOriginal) {
  if (pares % 2 === 0) novoArray.push(pares)
}
console.log('C)', novoArray)

//D

for (let i in arrayOriginal) {
  console.log(`D) O elemento index ${i} é:  ${arrayOriginal[i]}`)
}

//E)

let maior = 0
let menor = arrayOriginal[0]
for (let numero of arrayOriginal) {
  if (numero > maior) {
    maior = numero
  } else if (numero < menor) {
    menor = numero
  }
}
console.log('E) - Maior numero do Array = ', maior)
console.log('E) - Menor numero do Array = ', menor)
