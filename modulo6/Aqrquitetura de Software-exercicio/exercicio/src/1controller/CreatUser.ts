import {Request, Response} from "express"
import { UserBusiness } from "../2business/UserBusiness";

export class UserControler{

createUser = async (req: Request, res: Response) : Promise<void> => {
  
          
          try {
              const user = {
                  email: req.body.email,
                  name: req.body.name,
                  password: req.body.password
              }
  
              const userBusiness = new UserBusiness()

              await userBusiness.createUser(user);
  
              res.status(201).send({ message: "Usuário criado!" });
  
          } catch (error:any) {
              res.status(400).send({ error: error.message });
          }
      }

}