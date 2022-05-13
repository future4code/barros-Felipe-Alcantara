//===========================Exercícios de interpretação de código=================================

//QUESTÃO -01

// Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.**

//Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// let array
// console.log('a. ', array) // undefined

// array = null
// console.log('b. ', array) // null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log(array)
// console.log('c. ', array.length) //  A quantidade de indiex ou tamanho do array

// let i = 0
// console.log('d. ', array[i]) // A resposta é 3, pois está sendo impresso o inice [0] do array que é o 3

// array[i + 1] = 19
// console.log('e. ', array) // o i receberá o valor = 19 e irá ocupar o indice [1] do array anterior

// const valor = array[i + 6]
// console.log('f. ', valor)//  o i retorna o indice 6 que é o número 9

//*************************************************************************************************

// QUESTÃO-02 - leia o codigo abaixo com atenção:

// const frase = prompt('Entre com uma frase')
// console.log(frase.toUpperCase().replaceAll('A', 'i'), frase.length)
// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
//R = SUBI NUM ÔNIBUS EM MIRROCOS - 28 CARACTERES

//===================================Exercícios de escrita de código================================

// QUESTÃO-01 - 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// let nome = prompt('Qual seu nome?')
// let email = prompt('Qual seu email?')

// console.log( `O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

//*********************************************************************************************

// QUESTÃO 2 - 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// a) Imprima no console o array completo

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

// let minhaComida = ['churrasco', 'sushi', 'camarão', 'sansuiche', 'sorvete']
//console.log(minhaComida)

// console.log(`Essas são as minhas comidas preferidas
// ${array[0]}
// ${array[1]}
// ${array[2]}
// ${array[3]}
// ${array[4]}`)

// let comidaUsuario = prompt('Qual a sua comida preferida?')

// console.log(minhaComida.splice(1, 1, comidaUsuario))
// console.log(minhaComida)
//************************************************************************************************************

//QUESTÃO - 3. Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array no console

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no console

// let listaDeTarefas = []

// listaDeTarefas.push(prompt('Digite a tarefa 1'))
// listaDeTarefas.push(prompt('Digite a tarefa 2'))
// listaDeTarefas.push(prompt('Digite a tarefa 3'))

// console.log(listaDeTarefas)
// let tarefaRealizada = prompt(`Digite a sua tarefa realizada que deseja retirar
// 0 - ${listaDeTarefas[0]}
// 1 - ${listaDeTarefas[1]}
// 2 - ${listaDeTarefas[2]}`)

// listaDeTarefas.splice(tarefaRealizada, 1)
// console.log(listaDeTarefas)

//========================================DESAFIO===================================================

//1) Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços
// let entrada = prompt('entre com a frase')
// let dividido = entrada.split('')
// console.log(dividido)

// 2) - Dado o array ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"], faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

// let frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa']
// let index = frutas.indexOf('Abacaxi')

// console.log(index, frutas.length)
