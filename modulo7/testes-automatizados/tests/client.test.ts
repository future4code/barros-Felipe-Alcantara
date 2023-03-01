import { BaseDataBase } from "../src/data/BaseDataBase";
import { CustomError } from "../src/error/CustomError";
import { creatClient, getAllClient } from "../src/funcClient/funcClient";

class TestClient extends BaseDataBase {
    private clientTable = "Case_Clients";
    async testRemoveClient(id: string) {
        try {
            await TestClient.connection(this.clientTable).where("id", id).del();
        } catch (err: any) {
            throw new CustomError(err.status, err.message);
        } finally {
            TestClient.connection.destroy();
        }
    }
    // async destroyConection() {
    //     TestClient.connection.destroy();
    // }
}
//instancia de teste
const testClient=new TestClient();


describe.skip("Teste para funções do Cliente",()=>{
    const clientTest={
        id:"testId",
        name:"clientFake",
    }
    test("teste de inserir cliente",async()=>{
        const resp= await creatClient(clientTest);
        expect(resp).toBe("Cliente Cadastrado com sucesso!")
    });
    
    test("teste pegar todos os clientes",async()=>{
        const resp= await getAllClient();
        expect(resp).toBeDefined()
        expect(resp).toContainEqual(clientTest)
    });

    afterAll(async ()=>{
        await testClient.testRemoveClient(clientTest.id)
    })
})

//TESTE DE ERROS
describe("Teste para ERROS DE funções do Cliente",()=>{
    const clientTest={
        id:"testId"
        // name:"",
    }
    test("teste de inserir cliente",async()=>{
        expect.assertions(3)
        try{
            const resp= await creatClient(clientTest);
       //     await testClient.testRemoveClient(clientTest.id)
        }catch(err:any){
            expect(err).toBeDefined()
            expect(err).toBeInstanceOf(Error)
            expect(err.message).toBe("Nome Inválido!")
        }
    });
})