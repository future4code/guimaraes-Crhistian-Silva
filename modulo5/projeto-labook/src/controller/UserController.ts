import { UserDTO } from "./../model/userDTO";
import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import { validateRelationsDTO, validateUserInput } from "./userControllerSerializer";
import { StatusCodes } from "../error/StatusCodes";
import { authenticationData, idsAuthenticationData } from "../model/types";
import { RelationsDTO } from "../model/relationsDTO";

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
      const message = "SUCCESS, FRIENDSHIP CREATE";

      const input: RelationsDTO = {
        idSender: req.body.idSender,
        idReceiver: req.body.idReceiver
      }
      validateRelationsDTO(input, StatusCodes);

      const userBusiness = new UserBusiness();

      await userBusiness.createFriendship(input);

      res.status(201).send(message);
      
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  }
}
