import { MissingEmail } from './../error/customError';
import { UserBusiness } from "../business/UserBusiness";
import { Request, Response } from "express";
import {
  validateAccount,
  validateFollowInput,
  validateLoginInput,
  validateToken,
  validateUnFollowInput,
  validateUserInput,
} from "./userControllerSerializer";
import { AccountInput, BusinessFeedInput, CreateUserInput, FeedInput, FollowInput, LoginInput, PasswordInput, UnFollowInput } from "../model/userTypes";
import { validateRecipeFeedInput } from "./RecipeControllerSerializer";

export class UserController {
  constructor( private userBusiness: UserBusiness) {
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
        token: req.headers.authorization as string
      };

      validateLoginInput(input);

      const newToken = await this.userBusiness.login(input);

      res.status(200).send({ message: "Login Sucessfull !!", newToken });
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
      const message = "Followed successfully";

      const input: FollowInput = {
        token: req.headers.authorization as string,
        idFollowd: req.body.idFollowd   
      }

      validateFollowInput(input);
      
      await this.userBusiness.followUser(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getUserById = async (req: Request, res: Response) => {
    try {
      const input: FollowInput = {
        idFollowd: req.params.id as string,
        token: req.headers.authorization as string
      }
      validateFollowInput(input)
      
      const user = await this.userBusiness.getUserById(input)

      res.status(200).send(user);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public unfollowUser  = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "Unfollowed successfully";

      const input: UnFollowInput = {
        token: req.headers.authorization as string,
        userUnfollowId: req.body.userUnfollowId   
      }

      validateUnFollowInput(input);
      
      await this.userBusiness.unfollowUser(input);

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getFeed = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: FeedInput = {
        idFollowd: req.body.idFollowd as string,
        token: req.headers.authorization as string,
      };

      validateRecipeFeedInput(input);

      let limit: number = 5;

      let page = Number(req.query.page) ? Number(req.query.page) : 1;

      let offset = limit * (page - 1);

      const feed: BusinessFeedInput = {
        idFollowd: input.idFollowd,
        offset,
        limit,
        token: input.token,
      };

      const recipes = await this.userBusiness.getFeed(feed);

      res.status(200).send({recipes});
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public delAccount  = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "Account Deleted successfully";

      const input: AccountInput  = {
        token: req.headers.authorization as string,
        email: req.body.email,
        password: req.body.password,
      };
      // validar todos os itens to input
      validateAccount(input)
   
      await this.userBusiness.delAccount(input);

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  }; 

  public forgotPassword  = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "REQUEST SUCCESFULL, PLEASE VERIFY YOUR EMAIL";

      const email: string  =  req.body.email 

      if(!email){
        throw new MissingEmail();
      }

      await this.userBusiness.forgotPassword(email);

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public updatePassword  = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "Request Successfull";

      const input:PasswordInput  = {
        token: req.params.token,
        id: req.params.id,
        password: req.body.password
      };

      await this.userBusiness.updatePassword(input);

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };
}
