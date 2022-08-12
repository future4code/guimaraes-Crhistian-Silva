import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import {
  validateRelationsDTO,
  validateUserInput,
} from "./userControllerSerializer";
import { RelationsPostInput } from "../model/postTypes";
import { CreateUserInput } from "../model/userTypes";

export class UserController {
  public createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "SUCESS, USER CREATED";

      const input: CreateUserInput = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      validateUserInput(input);

      const userBusiness = new UserBusiness();

      await userBusiness.createUser(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public createFriendship = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const message = "SUCCESS, FRIENDSHIP CREATED";

      const input: RelationsPostInput = {
        idSender: req.body.idSender,
        idReceiver: req.body.idReceiver,
      };
      validateRelationsDTO(input);

      const userBusiness = new UserBusiness();

      await userBusiness.createFriendship(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public deleteFriendship = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const message = "SUCCESS, FRIENDSHIP DELETED";

      const input: RelationsPostInput = {
        idSender: req.body.idSender,
        idReceiver: req.body.idReceiver,
      };
      validateRelationsDTO(input);

      const userBusiness = new UserBusiness();

      await userBusiness.deleteFriendship(input);

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };
}
