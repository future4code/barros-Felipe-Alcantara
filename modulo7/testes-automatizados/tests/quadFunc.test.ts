import { quadFunc } from "../src/funcs/quadFunc";

describe.skip("Teste para função de quadrado",()=>{
    test("quad 3",()=>{
        expect(quadFunc(3)).toBe(9)
        expect(quadFunc(3)).toBeGreaterThan(0)
    });
    test("quad -3",()=>{
        expect(quadFunc(-3)).toBe(9)
        expect(quadFunc(-3)).toBeGreaterThan(0)
        
    })
})