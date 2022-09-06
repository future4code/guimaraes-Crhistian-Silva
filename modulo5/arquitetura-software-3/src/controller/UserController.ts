import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/userDTO";

export class UserController {
  public async create(req: Request, res: Response): Promise<void> {
    try {

      const  message = "SUCESS, USER CREATE" 

      const input:UserInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }

      const userBusiness = new UserBusiness();
      
      await userBusiness.create(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  }

  public async getAll(req: Request, res: Response): Promise<void> {
    try {
      const userBusiness = new UserBusiness();

      const users = await userBusiness.getAll();
      res.status(200).send({users});
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  }
}
