import { Request, Response } from "express"
import connection from "../database/connection"
import { ProductDataBase } from "../database/Productdatabase"
import { TABLE_PRODUCTS } from "../database/tableNames"

export const getProducts = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        
        const getProducts = new ProductDataBase()
        const result = await getProducts.getAllProduct()
        
        // const result = await connection(TABLE_PRODUCTS).select()
        res.status(200).send({ products: result })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}