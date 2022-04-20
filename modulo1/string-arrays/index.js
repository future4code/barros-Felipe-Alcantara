//===============================================Exercícios de interpretação de código===================================================

//QUESTÃO -01

//let array
// console.log('a. ', array) // undefined

// array = null
// console.log('b. ', array) // null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log(array)
// console.log('c. ', array.length) //  A quantidade de indiex ou tamanho do array

//let i = 0
//console.log('d. ', array[i]) // array nao definido

// array[i + 1] = 19
// console.log('e. ', array) // erro, array nao definido

// const valor = array[i + 6]
// console.log('f. ', valor) //  erro, i nao definido

//=======================================================================================================================================

// QUESTÃO-02

// const frase = prompt('Digite uma frase')

// console.log(frase.toUpperCase().replaceAll('A', 'I'), frase.length)

// R = SUBI NUM ÔNIBUS EM MIRROCOS - 28 CARACTERES

//====================================================Exercícios de escrita de código====================================================

// QUESTÃO-01

// let nome = prompt('Qual seu nome?')
// let email = prompt('Qual seu email?')

// console.log( `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//=======================================================================================================================================

// QUESTÃO 2
//A)

// let minhaComida = ['churrasco', 'sushi', 'camarão', 'sansuiche', 'sorvete']

// //B)

// console.log(`A e B . Essas são as minhas comidas preferidas:
// 0 - churrasco
// 1 - sushi
// 2 - camarão
// 3 - sanduiche
// 4 - sorvete`)

// //C) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

// let comidaUsuario = prompt('Qual a sua comida preferida?')

// console.log(minhaComida.splice(1, 1))
// minhaComida.unshift(comidaUsuario)
// console.log(minhaComida)

//========================================================================================================================================
//QUESTÃO - 3

// //B
// const tarefa0 = prompt(
//   'Cite a primeira tarefa que voce deseja realizar no dia!'
// )

// //B)
// const tarefa1 = prompt('Cite a seguda tarefa que voce deseja realizar no dia!')

// //B)
// const tarefa2 = prompt(
//   'Cite a terceira tarefa que voce deseja realizar no dia!'
// )

// //A)
// const listaDeTarefas = [tarefa0, tarefa1, tarefa2]

// //C)
// console.log(listaDeTarefas)

// let concluida = Number(
//   prompt(`Digite o indice da tafera que voce ja realizou e deseja retirar da lista:

// Indice 0 - ${tarefa0}
// indice 1 - ${tarefa1}
// indice 2 - ${tarefa2}

// `)
// )

// listaDeTarefas.splice(concluida, 1)
// console.log(listaDeTarefas)

//========================================DESAFIO===================================================

// // 1)
// let entrada = prompt('entre com a frase')
// let dividido = entrada.split('')
// console.log(dividido)

// 2)

// let frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa']
// let index = frutas.indexOf('Abacaxi')

// console.log(index, frutas.length)
