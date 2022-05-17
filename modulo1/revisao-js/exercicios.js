// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
// Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
  // return array.length
}

// EXERCÍCIO 02
// Escreva uma função que recebe um array como parâmetro e retorne este array invertido.
// Exemplo: Para o array [8, 23, 16, 10] dado como entrada, retorne [10, 16, 23, 8]
function retornaArrayInvertido(array) {
  // return array.reverse()
}

// EXERCÍCIO 03
// Escreva uma função que recebe um array de números e retorne o array com os números em ordem crescente.
// Exemplo: [3, 2, 1, 4, 7] retorna [1, 2, 3, 4, 7]
function retornaArrayOrdenado(array) {
  // return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
// Escreva uma função que receba um array de números e retorne um novo array com apenas os números pares desse array de entrada.
// exemplo: [1, 2, 3, 4, 5, 6] deve retornar [2, 4, 6]
function retornaNumerosPares(array) {
  // const numeroPar = array.filter(par => {
  //   if (par % 2 === 0) {
  //     return numeroPar
  //   }
  // })
}
// EXERCÍCIO 05
// Escreva uma função que recebe um array de números e retorna um array com os números pares elevados a 2.
// exemplo: [1, 2, 3, 4, 5, 6] deve retornar [4, 16, 36]
function retornaNumerosParesElevadosADois(array) {
  // let par = array.filter((item, indece, array) => {
  //   return item % 2 === 0
  // })
  // let potencia2 = par.map((item, indice, array) => {
  //   return Math.pow(item, 2)
  // })
  // return potencia2
}

// EXERCÍCIO 06
// Escreva uma função que receba um array de números e retorne o maior número dele.
// [1, 5, 3, 7, 5, 2] deve retornar 7
function retornaMaiorNumero(array) {
  // let maior = 0
  // for (let numero of array) {
  //   if (numero > maior) {
  //     maior = numero
  //   }
  //   return maior
  // }
}

// EXERCÍCIO 07
// Escreva uma função que, dados dois números, retorne um objeto com as seguintes propriedades:

// - `maiorNumero` → contém o maior número
// - `maiorDivisivelPorMenor` → booleano indicando se o maior é divisível pelo menor
// - `diferenca` → contém a diferença entre eles (deve ser um **número positivo** sempre)

//  Obs: para os testes funcionarem, as propriedades do objeto devem possuir os exatos nomes acima

function retornaObjetoEntreDoisNumeros(num1, num2) {
  // let numero
  // let diferenca
  // let restoDivisao
  // if (num1 > num2) {
  //   numero = num1
  //   diferenca = num1 - num2
  //   restoDivisao = num1 % num2 === 0
  // } else {
  //   numero = num2
  //   diferenca = num2 - num1
  //   restoDivisao = num2 % num1 === 0
  // }
  // doisNumeros = {
  //   maiorNumero: numero,
  //   maiorDivisivelPorMenor: restoDivisao,
  //   diferenca: diferenca
  // }
  // return doisNumeros
}

// EXERCÍCIO 08
// Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares
// Exemplo: - `3` retorna `[0, 2, 4]`
// exemplo: - `5` retorna `[0, 2, 4, 6, 8]`
function retornaNPrimeirosPares(n) {
  // let primeirosPares = []
  // for (i = 0; primeirosPares.length < n; i++) {
  //   if (i % 2 === 0) {
  //     primeirosPares.push(i)
  //   }
  // }
  // return primeirosPares
}

// EXERCÍCIO 09
//Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: ladoA, ladoB, ladoC e retorne se ele é equilátero, isósceles ou escaleno (não é necessário validar se os lados fecham um triângulo).

// - Se um triângulo possuir os **três lados iguais**, ele é chamado de "Equilátero".
// - Se possuir apenas **dois lados iguais**, diz-se que ele é "Isósceles".
// - Se os **três lados tiverem medidas diferentes**, ele é "Escaleno".
function classificaTriangulo(ladoA, ladoB, ladoC) {
  // if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
  //   return 'Equilátero'
  // } else if (
  //   (ladoA === ladoB && ladoC != ladoA) ||
  //   (ladoB === ladoC && ladoC != ladoA) ||
  //   (ladoC === ladoA && ladoA != ladoB)
  // ) {
  //   return 'Isósceles'
  // } else if (ladoA != ladoB && ladoB != ladoC && ladoC != ladoA) {
  //   return 'Escaleno'
  // }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  // let arr2 = []
  // const crescente = array.sort((item, index, array) => {
  //   return item - index
  // })
  // let segundoMaior = crescente[crescente.length - 2]
  // let segundoMenor = crescente[1]
  // array.push(segundoMaior, segundoMenor)
  // return arr2
}

// EXERCÍCIO 11
//Crie uma função que receba um objeto representando um filme com nome, ano, diretor e elenco. Ela deve retornar uma chamada para assistir a esse filme, seguindo a estrutura do exemplo abaixo:
function retornaChamadaDeFilme(filme) {
  // filme = {
  //   nome: 'O diabo veste prada',
  //   ano: 2006,
  //   diretor: 'David Frankel',
  //   atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  // }
  // return 'Venha assistir ao filme O Diabo Veste Prada, de 2006, dirigido por David Frankel e estrelado por Meryl Streep, Anne Hathaway, Emily Blunt, Stanley Tucci.'
}

// EXERCÍCIO 12
// Crie uma função que recebe um objeto com as propriedades nome, idade, endereco e email  e retorne um novo objeto com as mesmas propriedades, mas com o valor "ANÔNIMO" para a propriedade nome.
function retornaPessoaAnonimizada(pessoa) {
  // pessoa = {
  //   nome: pessoa.nome,
  //   idade: pessoa.idade,
  //   email: pessoa.email,
  //   endereco: pessoa.endereco
  // }
  // let pessoaAnonima = {
  //   ...pessoa,
  //   nome: 'ANÔNIMO'
  // }
  // return pessoaAnonima
}

// EXERCÍCIO 13A
// Imagine que você trabalhe num parque de diversões, como pessoa desenvolvedora. As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. As regras para entrar na montanha russa do terror são:

//Ter, no mínimo, 1.5m de altura;
//Ser mais velho do que 14 anos e
//Ser mais novo do que 60 anos.

// Dados esses requisitos, escreva:

// A) uma **função** que receba um array e devolva outro contendo as pessoas que **tem permissão para entrar** no brinquedo
function retornaPessoasAutorizadas(pessoas) {
  // let entradaPermitida = pessoas.filter((item, indice, array) => {
  //   if (item.altura >= 1.5 && item.idade > 14 && item.idade < 60) {
  //     return item
  //   }
  // })
  // return entradaPermitida
}

// EXERCÍCIO 13B
// B) uma função que receba um array e devolva outro contendo as pessoas que não tem permissão para entrar no brinquedo
function retornaPessoasNaoAutorizadas(pessoas) {
  // let naoPermitido = pessoas.filter((item, indice, array) => {
  //   if (item.altura < 1.5 || item.idade <= 14 || item.idade >= 60) {
  //     return item
  //   }
  // })
  // return naoPermitido
}

// EXERCÍCIO 14
// Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente.

// A sua tarefa é: faça uma função que receba um array com os objetos do tipo acima como parâmetro e atualize o saldo total individual de cada um, sem criar um novo array. Retorne o array original.

function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
// Você foi contratado por um escritório médico para organizar a agenda de consultas
// A sua tarefa é criar uma função que receba o array acima como parâmetro e retorne um array de consultas ordenado pelos nomes dos pacientes (em ordem alfabética)
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  const ordenado = consultas.sort((item, index) => {
    return item.nome > index.nome ? 1 : index.nome > item.nome ? -1 : 0
  })
  return ordenado
}

// EXERCÍCIO 15B
// A sua segunda tarefa é criar uma função que receba o array acima como parâmetro e retorne um array de consultas ordenado pelas datas das consultas(da menor para a maior)
function retornaArrayOrdenadoPorData(consultas) {}
