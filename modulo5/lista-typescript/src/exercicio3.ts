enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme = {nome: string, ano: number , genero: GENERO, pontos?:number}

function infoFilme(nome: string, ano: number, genero: GENERO, pontos?:number): filme {
  let info1 = {nome: nome, ano: ano, genero: genero, pontuacao:pontos} 
  let info2 = {nome: nome, ano: ano, genero: genero} 
  
  if (typeof pontos === "number"){
    return info1
  } else{
    return info2
  } 
}
console.log(infoFilme("x-man", 2000, GENERO.ACAO, 80))
console.log(infoFilme("x-man", 2000, GENERO.ACAO))

