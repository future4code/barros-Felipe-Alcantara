import { funcDistToPoints } from './../src/funcs/funcdistToPoints';

describe.skip("Teste para função de distancia de 2 pontos",()=>{
    test("test (6,2)",()=>{
        expect(funcDistToPoints(6,2)).toBe(4);
        expect(funcDistToPoints(6,2)).not.toBe(-4);
        expect(funcDistToPoints(6,2)).toBeGreaterThan(2);
    });
    test("test (2,6)",()=>{
        expect(funcDistToPoints(2,6)).toBe(4)
        expect(funcDistToPoints(2,6)).toBeLessThan(5)
    });
    test("test (2,2)",()=>{
        expect(funcDistToPoints(2,2)).toBeGreaterThanOrEqual(0)
    });
})