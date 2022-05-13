/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
//1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
// console.log('Bem vindo ao Jogo BlackJack!')

//2 - Envia um confirm, perguntando ao usuário: "Quer iniciar uma nova rodada?".

let mensagem = confirm('Quer iniciar uma nova rodada?')

while (mensagem === true) {
  mensagem = confirm('Aperte OK para uma nova aposta')

  const usuario = comprarCarta()

  const pc = comprarCarta()

  console.log(`Usuário - cartas:  ${usuario.texto}, ${usuario.valor}`)
  console.log(`computador - cartas: ${pc.texto}, ${pc.valor}`)
=======
// 1 )
console.log('Bem vindo ao jogo de Blackjack!')

//2)

const carta1 = comprarCarta()
const carta2 = comprarCarta()
const carta3 = comprarCarta()
const carta4 = comprarCarta()

const totalUsuario = carta1.valor + carta2.valor
const totalComputador = carta3.valor + carta4.valor

const iniciar = confirm('Quer inciar uma nova rodada?')

console.log(
  `Usuário - Cartas: ${carta1.texto} ${carta2.texto} pontuação - > ${totalUsuario}`
)
console.log(
  `Computador - Cartas: ${carta3.texto} ${carta4.texto} pontuação -> ${totalComputador}`
)

if (totalComputador > totalUsuario) {
  console.log('O Computador venceu')
} else if (totalUsuario > totalComputador) {
  console.log('O Usuário Venceu!')
} else if (totalUsuario === totalComputador) {
  console.log('Deu empate!')
} else {
  console.log('O Jogo acabou!')

}
