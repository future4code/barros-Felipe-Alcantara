import { UserDatabase } from "../3data/UserDatabase"
import { user } from "../types/user";

export class UserBusiness{

   postUserBusines = async (input:any): Promise<void> => {
  
          try{
  
              const {email,name, password} = input

              if(!name || !email || !password ){
                  throw new Error("Please fill all the fields");
              }
  
              if(email.indexOf("@") === -1){
                  throw new Error("Invalid Email");
              }
  
              if(password.length < 6){
                  throw new Error("Password must have at least 6 characters");
              }
  
              const id = Date.now().toString();
              
              const userDatabase = new UserDatabase()
              await userDatabase.postUserData({id, email, name, password});
              
          }catch(error:any){
              throw new Error( error.message || "Error creating user. Please check your system administrator.");
          }
      }


    getAllBusiness = async () => {
     const result = await new UserDatabase().getAllData()
     return result
    }


}