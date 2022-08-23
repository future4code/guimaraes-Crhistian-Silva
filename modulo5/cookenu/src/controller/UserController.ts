import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import {
  validateRelationsDTO,
  validateUserInput,
} from "./userControllerSerializer";
import { RelationsPostInput } from "../model/postTypes";
import { CreateUserInput } from "../model/userTypes";

export class UserController {
  private userBusiness: UserBusiness;
  constructor() {
    this.userBusiness = new UserBusiness();
  }
  public signUp = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "SUCESS, USER CREATED";

      const input: CreateUserInput = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      };

      validateUserInput(input);

      const token = await this.userBusiness.signUp(input);

      res.status(201).send({ message, token });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
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

      await this.userBusiness.createFriendship(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
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

      await this.userBusiness.deleteFriendship(input);

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };
}
