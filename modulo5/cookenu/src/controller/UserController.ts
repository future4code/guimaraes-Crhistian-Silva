import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import {
  validateFollowInput,
  validateLoginInput,
  validateToken,
  validateUserInput,
} from "./userControllerSerializer";
import { CreateUserInput, FollowInput, LoginInput } from "../model/userTypes";

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
        role: req.body.role,
      };

      validateUserInput(input);

      const token = await this.userBusiness.signUp(input);

      res.status(201).send({ message, token });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: LoginInput = {
        email: req.body.email,
        password: req.body.password,
      };

      validateLoginInput(input);

      const token = await this.userBusiness.login(input);

      res.status(200).send({ message: "Login Sucessfull !!", token });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getUser = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string

      validateToken(token)

      const user = await this.userBusiness.getUser(token)

      res.status(200).send(user);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public followUser  = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "REQUEST SUCESSFULL";

      const input: FollowInput = {
        token: req.headers.authorization as string,
        idFollowed: req.body.idFollowed   
      }

      validateFollowInput(input);
      
      await this.userBusiness.followUser(input);

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };






}
