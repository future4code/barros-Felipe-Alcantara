

function palavra(palavra: string){
  
  let anagrama: number = palavra.length

    for (let i = 1; i < palavra.length; i++) {
        anagrama = anagrama * i
    }
    return anagrama
}

console.log(palavra("pa"))