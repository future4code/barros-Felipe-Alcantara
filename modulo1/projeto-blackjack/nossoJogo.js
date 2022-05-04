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
}
