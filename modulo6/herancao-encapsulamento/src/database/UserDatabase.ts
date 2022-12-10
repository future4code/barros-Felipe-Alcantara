import { BaseDatabase } from "./BaseDatabase"

export class UserDatabase extends BaseDatabase {
  public static TABLE_USERS = "Labe_Users"
   
    public getAllUsers = async() => { 
      const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select();
      return result
    }

    public creatUser = async(id: string, email: string, password: string) => {
        const newUser = {id, email, password}
        await BaseDatabase.connection(UserDatabase.TABLE_USERS).insert(newUser)
    }

    public getUserById = async (id: string)=> {
      const result = await BaseDatabase.connection(UserDatabase.TABLE_USERS).select().where({id})
      return result
    }

  }