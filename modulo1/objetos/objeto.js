// ======================Exercícios de interpretação de código===========================================
// 1)
// a) O que vai ser impresso no console?

// R= console.log(filme.elenco[0]) -> 	Matheus Nachtergaele
// R=console.log(filme.elenco[filme.elenco.length - 1]) -> Virginia Cavendish
// R= console.log(filme.transmissoesHoje[2]) -> canal: 'Globo', horario: '14h'

// 2)
// A) Nomes Juca, Juba, Jubo
// b) A copia de um Objeto ou Array inteiro.

// 3)
// a)
// false
// indefinido

// b) O valo para a altura está indefinido poque a altura nao foi definido como atributo do obejto.

// //=========================Exercícios de escrita de código=================

// 1) A)

// const pessoa = {
//   nome: 'Felipe',
//   apelido: ['Lipe', 'fe', 'fefe']
// }

// function eu(meuApelido) {
//   return `Eu sou o ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]}, ${pessoa.apelido[2]}`
// }

// console.log(eu(pessoa))

// //=============================================================================

// //B)

// const pessoa2 = {
//   ...pessoa,
//   apelidos: ['felipão', 'pepeu', 'tripa seca']
// }

// console.log(pessoa2)
//================================================================================

// 2) A)

// const dados1 = {
//   nome: 'joao',
//   idade: '30',
//   profissao: 'carpinteiro'
// }

// const dados2 = {
//   nome: 'pedro',
//   idade: '35',
//   profissao: 'pescador'
// }

// function dados(inserir1, inserir2) {
//   let array = [
//     dados1.nome,
//     dados1.nome.length,
//     dados1.idade,
//     dados1.profissao,
//     dados2.nome,
//     dados2.nome.length,
//     dados2.idade,
//     dados2.profissao
//   ]

//   return array
// }
// console.log(dados(dados1, dados2))
// //

//===========================================================================

// let carrinho = []

// let fruta1 = {
//   nome: 'laranja',
//   disponibilidade: true
// }

// let fruta2 = {
//   nome: 'manga',
//   disponibilidade: true
// }

// let fruta3 = {
//   nome: 'uva',
//   disponibilidade: true
// }

// function sacolao(fruta) {
//   carrinho.push(fruta)

//   return fruta
// }

// console.log(sacolao(fruta1))
// console.log(sacolao(fruta2))
// console.log(sacolao(fruta3))

// console.log(carrinho)

// //3 desafio
