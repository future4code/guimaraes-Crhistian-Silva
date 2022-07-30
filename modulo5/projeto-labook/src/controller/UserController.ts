import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { user } from "../types/types";

export class UserController {
  public createUser = async (req: Request, res: Response) => {
    try {
      let message = "Success! User Create";

      const input: user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);

      res.status(201).send({ message });
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlmessage);
    }
  };
}
