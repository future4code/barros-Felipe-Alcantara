import { validateCharacter } from "../func/validateCharacter"

describe("Testes automatizados", () => {
  
  // a)Crie um teste que verifique o comportamento da função com um personagem com o nome vazio, isto é, "". 
  test("should return false for empty name", ()=>{
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense:500,
    })
    expect(result).toBe(false)
  })

  //b) Crie um teste que verifique o comportamento da função com um personagem com a vida igual a zero. 
  test("should return false for life 0", ()=>{
    const result = validateCharacter({
      name: "Scorpion",
      life: 0,
      strength: 300,
      defense: 500,
    })
    expect(result).toBe(false)
  })

//c) Crie um teste que verifique o comportamento da função com um personagem com a força igual a zero. 
  test("Should return false strength for 0", ()=>{
    const result = validateCharacter({
      name: "Scorpion",
      life: 300,
      strength: 0,
      defense: 500, 
    })
  expect(result).toBe(false)
  })
  //d) Crie um teste que verifique o comportamento da função com um personagem com a defesa igual a zero. 
  test("Should return false defense for 0", ()=>{
    const result = validateCharacter({
      name: "Scorpion",
      life: 300,
      strength: 300,
      defense: 0, 
    })
    expect(result).toBe(false)
  })


  // e) e. Crie um teste que verifique o comportamento da função com um personagem com a vida ou a força ou a defesa com um valor negativo
  test("Should return false or life, or strength, or defense for negative values", ()=>{
    const result = validateCharacter({
     name: "Scorpion", 
     life:-1,
     strength: -2,  
     defense: -3
    })
    expect(result).toBe(false)
  })


  //f. Crie um teste que verifique o comportamento da função com um personagem com as informações validas
  test("Should return true for all valid input", ()=>{
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    })
    expect (result).toBe(true) 
  })

})
