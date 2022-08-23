import { InvalidEmail, MissingParametersToken } from './../error/customError';
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InvalidName, MissingParameters, MissingParametersLogin } from "../error/customError";
import { EditUserInputDTO, LoginInput, UserInputDTO } from "../model/types";

export class UserController {
  private userBusiness: UserBusiness
  constructor(){
    this.userBusiness = new UserBusiness()
  }
  public signUp = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email, password, role} = req.body;
      if (!name || !nickname || !email || !password || !role) {
        throw new MissingParameters();
      }

      if (name.length < 4) {
        throw new InvalidName();
      }

      const input: UserInputDTO = {
        name,
        nickname,
        email,
        password,
        role
      };

      const token = await this.userBusiness.signUp(input);

      res.status(201).send({ message: "Usuário criado!", token });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public editUser = async (req: Request, res: Response) => {
    try {
      const input: EditUserInputDTO = {
        name: req.body.name,
        nickname: req.body.nickname,
        id: req.params.id,
      };

      await this.userBusiness.editUser(input);

      res.status(201).send({ message: "Usuário alterado!" });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getUser = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string

      if(!token){
        throw new MissingParametersToken()
      }

      const user = await this.userBusiness.getUser(token)

      res.status(200).send(user);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new MissingParametersLogin();
      }
      if(!email.includes("@")){
        throw new InvalidEmail()
      }

      const input: LoginInput = {
        email,
        password,
      };
      const token = await this.userBusiness.login(input);

      res.status(200).send({ message: "Usuário Logado com Sucesso!", token });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };
}
