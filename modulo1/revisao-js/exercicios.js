// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  // return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  // return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  // return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  // const numeroPar = array.filter(par => {
  //   if (par % 2 === 0) {
  //     return numeroPar
  //   }
  // })
}
// EXERCÍCIO 05
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
function retornaMaiorNumero(array) {
  let MaiorNumero
}

// EXERCÍCIO 07
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
  // const crescente = array.sort((item, index) => {
  //   return item - index
  // })
  // let segundoMaior = crescente[crescente.length - 2]
  // let segundoMenor = crescente[1]
  // array.push(segundoMaior, segundoMenor)
  // return arr2
}

// EXERCÍCIO 11
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
function retornaPessoasAutorizadas(pessoas) {
  // let entradaPermitida = pessoas.filter((item, indice, array) => {
  //   if (item.altura >= 1.5 && item.idade > 14 && item.idade < 60) {
  //     return item
  //   }
  // })
  // return entradaPermitida
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let naoPermitido = pessoas.filter((item, indice, array) => {
    if (item.altura < 1.5 || item.idade <= 14 || item.idade >= 60) {
      return item
    }
  })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
