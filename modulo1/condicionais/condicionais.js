//============================- **Exercícios de interpretação de código**=========================

// 1) A)  Explique o que o código faz. Qual o teste que ele realiza?
// R= O código está dividindo o resto da divisão por 2. O teste que o códig realiza é pra saber se o número e par ou impar.

//B) Para que tipos de números ele imprime no console "Passou no teste"?
// R= Para os números Pares - Para os números cujo resultado do resto da sua divisão por 2 é igual a zero.

//c) c) Para que tipos de números a mensagem é "Não passou no teste"?
// R=Para os numeros impares -  Para os números cujo resultado do resto da sua divisão por 2 é igual a 1 representando um número impar

//*************************************************************************************

//2)

// a) Para que serve o código acima? */
// R= Serve para criar uma lista de frutas a ser escolhida pelo usuário.

//b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// R = será impresso o valor da mçã, 2.25.

//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// R= Seria impresso normalmente o preço da pêra (5.5), pois o item 'Pêra' é o ultimo da lista não pasando para um proximo item já que nao tem.

//***************************************************************************************

//3)

// a) O que a primeira linha está fazendo?
// R = Está recebendo um número digitado pelo usuário em forma de "string" e a propriedade Number (ao lado do prompt) está transformando o valor de entrada de "string" para um número.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// R = Digitou o numero 10 -> 'Esse número passou no teste'
// R = se fosse o número -10? - > Não acontecerá nada pois não há condicionais para determinar caminhos diferentes para valores menores que 0.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// R = Sim, haverá erro.
// R= A variavel "mensagem" não foi definida. A variável recebeu apenas uma estring e está sendo impressa no console log vagamente sem função nenhuma.

//=========================Exercícios de escrita de código=========================

// 1) Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// let age = Number(prompt('Qual a sua idade'))

// if (age >= 18) {
//   console.log('Voce pode dirigir')
// } else {
//   console.log('Você não pode dirigir')
// }

//*********************************************************************************

//2) Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// let turno =
//   prompt(`Digite o turno que voce estuda seguindo as orientações abaixo:

// M - Matutino
// V - Vespertinom
// N - Noturno`).toUpperCase()

// if (turno == 'M') {
//   console.log('Bom dia!')
// } else if (turno == 'V') {
//   console.log('Boa Tarde!')
// } else if (turno == 'N') {
//   console.log('Boa Noite!')
// } else {
//   console.log('Valor inválido!')
// }

//*********************************************************************************

// 3) Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// let shift =
//   prompt(`Digite o turno que voce estuda seguindo as orientações abaixo:

// M - Matutino
// V - Vespertino
// N - Noturno`).toUpperCase()

// switch (shift) {
//   case 'M':
//     console.log('Bom Dia!')
//     break

//   case 'V':
//     console.log('Boa Tarde!')
//     break

//   case 'N':
//     console.log('Boa Noite')
//     break

//   default:
//     console.log('Voce digitou um valor diferente')
//     break
// }
//******************************************************************************
//4 )Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let genero = prompt('Qual o Genero do filme?').toLowerCase()
// let valor = Number(prompt('Qual o valor do infresso do filme?'))

// if (genero == 'fantasia' && valor < 15) {
//   console.log('Bom filme!')
// } else {
//   console.log('Escolha outro filme :(')
// }

//======================================DESAFIO=================================

// 1)

// let genero = prompt('Qual o Genero do filme?').toLowerCase()
// let valor = Number(prompt('Qual o valor do ingresso do filme?'))
// let lanche = prompt('Qual lanche voce vai comprar? ')

// if (genero == 'fantasia' && valor < 15) {
//   console.log(`Bom filme! Aproveite o/a seu/suas ${lanche}`)
// } else {
//   console.log('Escolha outro filme :(')
// }

//*****************************************************************************

//2 ) em andamento ...

// let nomeCompleto = prompt('Digite seu nome completo')

// let tipoJogo = prompt(`Tipo de jogo:

// Digite IN - para Jogo INternacional
// Digite DO - para jogo Domestico`)

// let etapaJogo = prompt(`Agora digite a Etapa do jogo:

// SF - Para Semi Final
// DT - Decisão do Trceiro Lugar
// FI - FInal`)

// let categoria = prompt(`Escolha as opções de categoria 1 , 2, 3 ou 4`)

// let quantidadeIngressos = prompt('Digite a Quantidade de Ingressos')

// console.log (`
// ------Dados da Compra------
// Nome do Cliente: ${nomeCompleto}
// Tipo de Jogo: ${tipoJogo}
// Etapa Do Jogo: ${etapaJogo}
// Categoria: ${categoria}
// Quantidade de Ingressos: ${quantidadeIngressos}

// ------Valores-----

// `)
