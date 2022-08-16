import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { EditUserInputDTO, UserInputDTO } from "../model/user";

export class UserController {

      public createUser = async (req: Request, res: Response) => {
        try {
          const { name, nickname, email, password } = req.body;
    
          const input: UserInputDTO = {
            name,
            nickname,
            email,
            password,
          };
          const userBusiness = new UserBusiness()
          userBusiness.createUser(input);
    
          res.status(201).send({ message: "Usuário criado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public editUser = async (req: Request, res: Response) => {
        try {
          
          const input: EditUserInputDTO = {
            name: req.body.name,
            nickname: req.body.nickname,
            id: req.params.id
          };

          const userBusiness = new UserBusiness()
          userBusiness.editUser(input);
    
          res.status(201).send({ message: "Usuário alterado!" });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      }; 
 



}
