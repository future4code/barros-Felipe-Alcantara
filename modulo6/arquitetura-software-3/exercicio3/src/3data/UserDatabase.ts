import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

  async postUserData({id, name, email, password}: any ) {
    try {
      await UserDatabase.connection
       .insert({
        id,
        email,
        name,
        password
      }).into("User_Arq");

    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

   async getAllData(){
    try {
      const result = await UserDatabase.connection.select("*").from("User_Arq")
      return result
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  async deleteData(id: string): Promise<void> {
    try {
      await UserDatabase.connection("User_Arq")
      .where({id: id})
      .del() 


    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}