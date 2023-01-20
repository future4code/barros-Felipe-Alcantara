import {Request, Response} from "express"
import { UserBusiness } from "../2business/UserBusiness";
import { user } from "../types/user";

export class UserControler{

postUserController = async (req: Request, res: Response) => {         
        
          try {
              const input: user = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
              }

              const userBusiness = new UserBusiness()
              await userBusiness.postUserBusines(input);
           

              res.status(201).send({ message: "Usuário criado!" });
  
          } catch (error:any) {
              res.status(400).send({ error: error.message });
          }
      }

      getAllController = async (req: Request, res: Response): Promise<void> => {
            try {
                const result = await new UserBusiness().getAllBusiness()
                res.status(200).send(result);

            } catch (error:any) {
                throw new Error(error.message)
            }
      }

}