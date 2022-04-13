/* 
Atividade de Variáveis.
Auluno : Felipe Moreira de Alcântara

>>>>>>>>>>>>>>>>>>>>>>>>>>>>1º Questão<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

1 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10
let b = 10

console.log(b) ===> ****b imprime 10****

b = 5 ====> ***agora b recebe 5****
console.log(a, b) ====> ***será impresso 10 e 5 respectiviamente) ******



>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>2º questão<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

2 - Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

let a = 10 ===> a recebe 10
let b = 20 ====> b recebe 20
c = a =====> a=10 então c recebe a = 10 , c vale 10
b = c ======> c vale 10, então b rece 10, portanto b vale 10.
a = b ======> b vale 10, portando a rece 10. 

console.log(a, b, c) ===> logo, a o que será impresso será a=10, b=10, c=10.



>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>3º questão<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

3 - Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
let remunera = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${remunera/horasTrabalhadas} por hora`)

*/

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>exercicio de escrita de código<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>          1ª questão          <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// c)  Uncaught SyntaxError: Unexpected identifier

//d) Esse tipo foi impresso porque nao foi atribuído nenhum valor a variável.

//e)

const name = prompt('Qual seu nome?')
const age = prompt('Qual a sua idade?')
console.log(typeof name, typeof age)

//f) Foram impressos os tipos de variaveis atribuidas às variaveis name e age como string.

//g)
console.log(' Olá ', name, ' você tem ', age, ' anos ')

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>         2ª QUESTÃO           <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//alert('Olá, na proxima tela digite SIM ou NAO')
//let roupazul = prompt('voce está usando roupa azul hoje?')
//let peixefrito = prompt('você gosta de peixe frito?')
//let futebol = prompt('você gosta de futebol?')

//console.log(`voce está usando roupa azul hoje? ${roupazul}`)
//console.log(`Voce gosta de Peixe frito ${peixefrito}`)
//console.log(`Voce gosta de Futebol ${futebol}`)

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>       3ª QUESTÃO           <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//let a = 10
//let b = 20
//c = a
//a = b
//b = c

//console.log(`a = ${a} e b= ${b}`)

//console.log(`O novo valor de a é, ${a}`)
//console.log(`O novo valor de b é ${b}`)
