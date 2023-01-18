import { UserDatabase } from "../3data/UserDatabase"
export class UserBusiness{

  createUser= async (user:any): Promise<void> => {
  
          try{
  
              const {email,name, password} = user

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
              await userDatabase.createUser({id, email, name, password});
             
           
              
          }catch(error:any){
              throw new Error( error.message || "Error creating user. Please check your system administrator.");
          }
      }

}