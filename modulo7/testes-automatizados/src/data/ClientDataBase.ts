import { CustomError } from '../error/CustomError';
import { Client } from '../models/Client';
import { BaseDataBase } from './BaseDataBase';
export class ClientDatabase extends BaseDataBase {
    private clientTable="Case_Clients";
    //criar
    async createClient(client: Client) {
        try {
           // ClientDatabase.connection.initialize();
            await ClientDatabase.connection(this.clientTable).insert(client);
        }catch(err:any){
            throw new CustomError(err.status,err.message);
        }
        // finally{
        //     ClientDatabase.connection.destroy();
        // }
    }
    //retornal todos
    async getAllClient() {
        try {
            const clients:Client[] = await ClientDatabase.connection.select('*').from(this.clientTable);
            return clients;
        }catch(err:any){
            throw new CustomError(err.status,err.message);
        }
    }
}