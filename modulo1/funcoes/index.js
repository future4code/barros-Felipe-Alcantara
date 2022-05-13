/*============EXERCICIO DE INTERPRETAÇÃO DE CODIGO============================

 1) Leia o código abaixo

 function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

a) O que vai ser impresso no console?
R= será impresso no console o resultado da multiplicação que igual a  = 10 e 25


b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
R = A função seria executada porém não seria impressa no console

**********************************************************************************************************************

2) Leia o código abaixo:

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a) Explique o que essa função faz e qual é sua utilidade: 
R = A função tem como premissas buscar se há a palavra cenoura digitada pelo usuário. 


b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   Eu gosto de cenoura
     ii.  CENOURA é bom pra vista
     iii. Cenouras crescem na terra

      i. true
      ii. true
      iii.true


===================exerccio de escrita de codigo==============================

1) Escreva as funções explicadas abaixo:

a)  A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

function sobreMim1() {
  console.log(
    'Eu sou o Felipe, tenho 34 anos, moro em Belém do Pará, sou formado, trabalho e nunca deixe de ser estudante =) '
  )
}
sobreMim1()

***************************************************************************************************
b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template: Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

let nome = prompt(' Insira seu nome')
let idade = Number(prompt(' Insira sua idade'))
let cidade = prompt(' Insira sua cidade')
let profissao = prompt(' Insira sua profissao')

function sobremim2(fnome, fidade, fcidade, fprofissao) {
  let unificado = `Eu sou ${fnome}, tenho ${fidade} anos, moro em ${fcidade} e sou ${fprofissao}.`

  return unificado
}

console.log(sobremim2(nome, idade, cidade, profissao))

================================================================================================================
2) 

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

let numero1 = Number(prompt('Digite uma numero'))
let numero2 = Number(prompt('Digite outro numero'))

function soma(fnumero1, fnumero2) {
  let fsoma = fnumero1 + fnumero2
  return fsoma
}

console.log(soma(numero1, numero2))

*****************************************************************************************************************

b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo. 

let numero1 = 10
let numero2 = 20

function upDown(fnumero1, fnumero2) {
  let boolean = fnumero1 >= fnumero2 === true
  return boolean
}

console.log(upDown(numero1, numero2))

******************************************************************************************************************

c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

let numero1 = Number(prompt('Entre com um numero'))
let numero2 = Number(prompt('Entre com outro numero'))

function numero(n1, n2) {
  let boolen = numero1 % numero2 === 0

  console.log(`O resultado é par? ${boolen}`)
}

numero(numero1, numero2)


*******************************************************************************************************************

d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.


let frase = prompt('Escreva aqui sua frase')

function texto(frase) {
  let convertido = frase.toUpperCase()

  return convertido
}

console.log(texto(frase))
===================================================================================================================

3) Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

let numero1 = Number(prompt('Insira um numero para as operações'))

let numero2 = Number(prompt('insira outro numero para as operaçoes'))

function operaoesBasicas(n1, n2) {
  console.log('Números inseridos', n1, 'e', n2)

  let soma = n1 + n2
  console.log('Soma', soma)

  let subtracao = n1 - n2
  console.log('subatração', subtracao)

  let multiplicacao = n1 * n2
  console.log('Multiplicação', multiplicacao)

  let divisao = n1 / n2
  console.log('Divisão', divisao)
}

operaoesBasicas(numero1, numero2)



//==============================================DESAFIO=============================================================

1 ) 1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
    
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

let entrada1 = 'olá mundo'

let arrow = entrada => {
  return entrada
}
console.log(arrow(entrada1))

let entrada2 = 2
let entrada3 = 2

let arrow2 = (num1, num2) => {
  let soma = num1 + num2
  return soma
}

console.log(arrow(entrada2, entrada3))

*/
