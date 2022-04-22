/*============EXERCICIO DE INTERPRETAÇÃO DE CODIGO============================

 1)

A)o resultado da multiplicação = 10 e 25
B)A função seria executada porém não seria impressa no console

2)

A) A função tem como premissas buscar se há a palavra cenoura digitada pelo usuário. 


B) i. true
   ii. true
   iii.true


===================exerccio de escrita de codigo==============================

1) a)

function sobreMim1() {
  console.log(
    'Eu sou o Felipe, tenho 34 anos, moro em Belém do Pará, sou formado, trabalho e nunca deixe de ser estudante =) '
  )
}
sobreMim1()


==============================================================================

1) B)

let nome = prompt(' Insira seu nome')
let idade = Number(prompt(' Insira sua idade'))
let cidade = prompt(' Insira sua cidade')
let profissao = prompt(' Insira sua profissao')

function sobremim2(fnome, fidade, fcidade, fprofissao) {
  let unificado = `Eu sou ${fnome}, tenho ${fidade} anos, moro em ${fcidade} e sou ${fprofissao}.`

  return unificado
}

console.log(sobremim2(nome, idade, cidade, profissao))

==================================================================================
2) a)

let numero1 = Number(prompt('Digite uma numero'))
let numero2 = Number(prompt('Digite outro numero'))

function soma(fnumero1, fnumero2) {
  let fsoma = fnumero1 + fnumero2
  return fsoma
}

console.log(soma(numero1, numero2))

==================================================================================
2) B)

let numero1 = 10
let numero2 = 20

function upDown(fnumero1, fnumero2) {
  let boolean = fnumero1 >= fnumero2 === true
  return boolean
}

console.log(upDown(numero1, numero2))

==================================================================================
2) c)

let numero1 = Number(prompt('Entre com um numero'))
let numero2 = Number(prompt('Entre com outro numero'))

function numero(n1, n2) {
  let boolen = numero1 % numero2 === 0

  console.log(`O resultado é par? ${boolen}`)
}

numero(numero1, numero2)


==================================================================================
2)D)


let frase = prompt('Escreva aqui sua frase')

function texto(mensagem) {
  let convertido = mensagem.toUpperCase()

  return convertido
}

console.log(texto(frase))
====================================================================================

3)

let numero1 = Number(prompt('Insira um numero para as operações'))

let numero2 = Number(prompt('insira outro numero para as operaçoes'))

function operaoesBasicas(n1, n2) {
  console.log('NUmeros inseridos', n1, 'e', n2)

  let soma = n1 + n2
  console.log('Soma', soma)

  let subtracao = n1 - n2
  console.log('subatração', subtracao)

  let multiplicacao = n1 * n2
  console.log('Multiplicação', multiplicacao)

  let divisao = n1 / n2
  console.log('Divisão', divisao)

  return soma, subtracao, multiplicacao, divisao
}

console.log(operaoesBasicas(numero1, numero2))

*/
