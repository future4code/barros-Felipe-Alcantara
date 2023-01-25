import { UserDatabase } from "../3data/UserDatabase"
import { invalidEmail, invalidPassword } from "../CustomError/UserErros";
import { createUserDTO } from "../model/creatUserDTO";
import { generateID } from "../Services/generateID";

export class UserBusiness{

async postUserBusines (input:createUserDTO): Promise<void>{
  
          try{
  
              const {email,name, password} = input

              if(!name || !email || !password ){
                  throw new Error("Please fill all the fields");
              }
  
              if(email.indexOf("@") === -1){
                  throw new invalidEmail()
              }
  
              if(password.length < 6){
                  throw new invalidPassword()
              }
  
              const id = generateID()

              await new UserDatabase().postUserData({id, email, name, password});
              
          }catch(error:any){
              throw new Error( error.message || "Error creating user. Please check your system administrator.");
          }
      }


async getAllBusiness(){
    const result = await new UserDatabase().getAllData()
    return result 
     
    }

async deleteBusiness(input: {id: string}){
    
    if (!input.id){
        throw new Error("Insira um ID");
    }
    return await new UserDatabase().deleteData(input.id)
}
}