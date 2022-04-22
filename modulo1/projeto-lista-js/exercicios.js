// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

  let height = Number(prompt('Entre com o valor da altura'))
  let width = Number(prompt('Entre com o valor da largura'))
  let area = height * width
  console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let currentYear = Number(prompt('Digite o ano atual em que estamos'))
  let birthYear = Number(prompt('Qual o ano do seu nascimento'))

  let age = currentYear - birthYear
  console.log(age)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  let weight = Number(prompt('entre com seu peso'))
  let heigh = Number(prompt('Entre com sua altura'))

  let imc = weight / (heigh * heigh)
  return imc

  //console.log(imc.toFixed(2))
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let name = prompt('Digite seu nome')
  let age = prompt('Digite sua idade')
  let email = prompt('Qual seu e-mail?')

  console.log(
    `Meu nome é ${name}, tenho ${age} anos, e o meu email é ${email}.`
  )
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt('Escreva sua primeira cor favorita')
  let cor2 = prompt('Escreva sua segunda cor favorita')
  let cor3 = prompt('Escreva sua terceira cor favorita')
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  let letra = prompt('Escreva uma palavra')

  return letra.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  let custoTotal = prompt('custo de um espetáculo de teatro')
  let Ingresso = prompt('valor de cada ingresso')

  return custoTotal / Ingresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let str1 = prompt('Digite uma palavra')
  let str2 = prompt('Digite uma string ')
  return str1.length == str2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let primeiraPosicao = array[0]
  let ultimaPosicao = array[array.length - 1]

  console.log(primeiraPosicao)
  console.log(ultimaPosicao)

  array.pop() // retira um elemento do final do array
  array.shift() // retira um elemento do começo do array
  array.push(primeiraPosicao) // adiciona um elemento no final do array
  array.unshift(ultimaPosicao) // adiciona um elemento no começo do array,

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let string01 = prompt('Digite uma palavra')
  let string02 = prompt('Digite uma string ')
  return string01.length == string02.length
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt('Digite o ano atual')
  let anoNascimento = prompt('digite seu ano de nascimento')
  let emissaoId = prompt('Digite o ano da emissão de sua identidade')

  let idade = anoAtual - anoNascimento
  let tempoId = anoAtual - emissaoId

  console.log(idade)

  if (idade <= 20 && tempoId <= 5) {
    console.log(true)
  } else if (idade >= 20 && idade <= 50 && tempoId < 10) {
    console.log(true)
  } else if (idade > 50 && tempoId < 15) {
    console.log(true)
  } else console.log(false)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
