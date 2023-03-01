import { ClientDatabase } from "../data/ClientDataBase";
import { Client } from "../models/Client";
import {InvalidName} from "../error/ClientError" 
import { CustomError } from "../error/CustomError";
export const creatClient=async(client:any)=>{
    if (!client.name){
        throw new InvalidName()
    }
    try{
        const clientDataBase=new ClientDatabase()
       
        await clientDataBase.createClient(client);
        return "Cliente Cadastrado com sucesso!"
    }catch(err:any){
        return (err)
    }
}
export const getAllClient=async()=>{
    try{
        const clientDataBase=new ClientDatabase()

        const allClients=await clientDataBase.getAllClient();
        return allClients
    }catch(err:any){
        throw new CustomError(400,err.message);
    }
}