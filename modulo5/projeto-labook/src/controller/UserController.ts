import { UserDTO } from "./../model/userDTO";
import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { validateUserInput } from "./userControllerSerializer";
import { StatusCodes } from "../error/StatusCodes";
import { authenticationData } from "../model/types";

export class UserController {
  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "SUCESS, USER CREATE";

      const input: UserDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      validateUserInput(input, StatusCodes);

      const userBusiness = new UserBusiness();

      await userBusiness.createUser(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public createFriendship = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "SUCESS, FRIENDSHIP CREATE";

      const {id} = req.params as authenticationData

      const userBusiness = new UserBusiness();

      await userBusiness.createFriendship(id);

      res.status(201).send(message);
      
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  }
}
