import { createConnection } from "net";
import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
  // private static TABLE_NAME = "User_Arq";
  async postUserData(user:user): Promise<void> {
    try {
      await BaseDatabase.connection.insert({
          id: user.id,
          email: user.email,
          name: user.name,
          password: user.password
        
        }).into("User_Arq");

    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  async getAllData(){
    try {
      const result = await UserDatabase.connection.select("*").table("User_Arq")
      return result
    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}