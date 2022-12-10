import { BaseDatabase } from "./BaseDatabase"

export class ProductDataBase extends BaseDatabase{

  public static TABLE_PRODUCTS = "Labe_Products"

  public createProduct = async( id: string, name: string, price: number)=>{
    const newProduct = {id, name, price}
    await BaseDatabase.connection(ProductDataBase.TABLE_PRODUCTS).insert(newProduct)
  }
  
  public getAllProduct = async () =>{
    const result  = await BaseDatabase.connection(ProductDataBase.TABLE_PRODUCTS).select()
    return result
  }

}