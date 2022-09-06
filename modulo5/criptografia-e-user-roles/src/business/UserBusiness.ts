import { AuthenticationData } from './../services/Authenticator';

import { IdGenerator } from "./../services/IdGenerator";
import { UserDatabase } from "../data/UserDatabase";
import {
  InvalidName,
  InvalidPassword,
  MissingParameters,
  UserNotFound,
} from "../error/customError";
import {
  UserInputDTO,
  user,
  EditUserInputDTO,
  EditUserInput,
  LoginInput,
  UserResult,
} from "../model/types";
import { User } from "../model/user";
import { HashManager } from "../services/HashManager";
import Authenticator from "../services/Authenticator";

const idGenerator = new IdGenerator();

const hashManager = new HashManager();

export class UserBusiness {
  private userDB: UserDatabase;
  constructor() {
    this.userDB = new UserDatabase();
  }
  public signUp = async (input: UserInputDTO): Promise<string> => {
    const { name, nickname, email, password } = input;

    let role = String(input.role).toUpperCase();

    if (role !== "NORMAL" && role !== "ADMIN") {
      role = "NORMAL";
    }

=======
} from "../model/userTypes";
import { Authenticator } from "../services/Authenticator";
import { User } from "../model/user";
import { HashManager } from '../services/HashManager';

const idGenerator = new IdGenerator();

const authenticator = new Authenticator();

const hashManager = new HashManager

export class UserBusiness {
  public signUp = async (input: UserInputDTO): Promise<string> => {
    const { name, nickname, email, password } = input;

    // aqui crio um novo usuário para fazer as verificações de email e senha com regex
    const user = new User(name, nickname, email, password);

    const id: string = idGenerator.generateId();

    const hashPassword = await hashManager.generateHash(password)
    const newUser: user = {
      id,
      name: user.getName(),
      nickname: user.getNickname(),
      email: user.getEmail(),
      password: hashPassword,
      role,
    };

    await this.userDB.insertUser(newUser);

    const token = Authenticator.generateToken({ id, role });

    return token;
  };

  public login = async (input: LoginInput): Promise<string> => {

    const { email, password } = input;

    // aqui crio um novo usuário para fazer as verificações de email e senha com regex

    const user = await this.userDB.getUserByEmail(email);

    const hashCompare = await hashManager.compareHash(password, user.password);

    if (!user) {
      throw new UserNotFound();
    }
    if (!hashCompare) {
      throw new InvalidPassword();
    }

    const payload: AuthenticationData = {
      id: user.id,
      role: user.role,
    };

    const token = Authenticator.generateToken(payload);
    return token;
  };

  public editUser = async (input: EditUserInputDTO) => {
    const { name, nickname, id } = input;

    if (!name || !nickname || !id) {
      throw new MissingParameters();
    }
    if (name.length < 4) {
      throw new InvalidName();
    }
    const editUserInput: EditUserInput = {
      id,
      name,
      nickname,
    };

    await this.userDB.editUser(editUserInput);
  };

  public getUserByEmail = async (email: string): Promise<user> => {
    const user = await this.userDB.getUserByEmail(email);


    if (!user) {
      throw new UserNotFound();
    }
    return user;
  };

  public getUser = async (token: string): Promise<UserResult> => {

    const authentication = Authenticator.getTokenData(token)

    if(authentication.role !== "NORMAL"){
      throw new UserUnauthorized();
    }

    const result = await this.userDB.getUserById(authentication.id);

    if (!result) {
      throw new UserNotFound();
    }

    const user = {
      id: result.id,
      email: result.email,
    };

    return user;
  };
}
