import {Request, Response} from "express"
import { UserBusiness } from "../2business/UserBusiness";
import { createUserDTO } from "../model/creatUserDTO";

export class UserControler{

postUserController = async (req: Request, res: Response) => {         
        
          try {
              const input: createUserDTO = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
              }

              await new UserBusiness().postUserBusines(input);
           
              res.status(201).send({ message: "Usuário criado!" });
  
          } catch (error:any) {
              res.status(400).send({ error: error.message });
          }
      }

      async getAllController(req: Request, res: Response){
            try {
                const result = await new UserBusiness().getAllBusiness()
                res.status(200).send(result);

            } catch (error:any) {
                res.status(400).send(error.message)
            }
      }

      async deleteController(req: Request, res: Response): Promise<void> {
        try {
            const input = {
                id: req.params.id
            }

            await new UserBusiness().deleteBusiness(input)
            res.status(200).send({message: "Usuario apagado com sucesso!"}) 


        } catch (error:any) {
            res.status(400).send({error: error.message})
        }
      }

}