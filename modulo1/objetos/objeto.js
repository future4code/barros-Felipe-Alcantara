// ======================Exercícios de interpretação de código===========================================
// 1) Leia o codigo abaixo:

// const filme = {
// 	nome: "Auto da Compadecida",
// 	ano: 2000,
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga",
// 		"Virginia Cavendish"
// 		],
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"},
// 		{canal: "Canal Brasil", horario: "19h"},
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

// R= console.log(filme.elenco[0]) -> 	Matheus Nachtergaele
// R=console.log(filme.elenco[filme.elenco.length - 1]) -> Virginia Cavendish
// R= console.log(filme.transmissoesHoje[2]) -> canal: 'Globo', horario: '14h'

// ********************************************************************************************************************

// 2) Leia o codigo abaixo:

// const cachorro = {
// 	nome: "Juca",
// 	idade: 3,
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// a) O que vai ser impresso no console?
//> Juca
//> juba
//> jubo

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// R = A copia de um Objeto ou Array inteiro.
//*****************************************************************************************************************

// 3) Leia o código abaixo:

// const pessoa = {
//   nome: "Caio",
//   idade: 23,
//   backender: false
// }

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// R=false

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// indefinido

// b) O valo para a altura está indefinido poque a altura nao foi definido como atributo do obejto.

// //=========================Exercícios de escrita de código=================

// 1)

//A) 1. Resolva os passos a seguir:

//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**

// const pessoa = {
//   nome: 'Felipe',
//   apelido: ['Lipe', 'fe', 'fefe']
// }

// function eu(meuApelido) {
//   return `Eu sou o ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]}, ${pessoa.apelido[2]}`
// }

// console.log(eu(pessoa))

//*********************************************************************************************************

// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const pessoa2 = {
//   ...pessoa,
//   apelidos: ['felipão', 'pepeu', 'tripa seca']
// }

// console.log(pessoa2)
//*********************************************************************************************************

// 2)  Resolva os passos a seguir:

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `pro  fissão`

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

//*********************************************************************************************************

// 3. Resolva os passos a seguir:

//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.

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

//==================================Desafio==================================================================

//1 Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

// let nome = prompt('Seu nome')
// let idade = prompt('Idade')
// let profissao = prompt('profissao')

// function eu(nome, idade, profissao) {
//   return { nome, idade, profissao }
// }

// console.log(eu(nome, idade, profissao))

//**********************************************************************************************************

// 3) Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

// O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true

// let filme1 = {
//   nome: 'De Volta para o Futuro',
//   ano: 1986
// }

// let filme2 = {
//   nome: 'top gun',
//   ano: 1985
// }

// function filme(filme1, filme2) {
//   return { filme1, filme2 }
// }

// let resultado1 = filme1.ano < filme2.ano === true
// let resultado2 = (filme1.ano === filme2.ano) === true

// console.log(filme(filme1, filme2))
// console.log(`O primeiro filme foi lançado antes do segundo? ${resultado1}`)
// console.log(
//   `O primeiro filme foi lançado no mesmo ano do segundo? ${resultado2}`
// )
