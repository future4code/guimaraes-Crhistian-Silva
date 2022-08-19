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
    };

    const userDatabase = new UserDatabase();
    await userDatabase.insertUser(newUser);

    const token = authenticator.generateToken({ id });
    return token;
  };

  public login = async (input: LoginInput): Promise<string> => {

    const {email, password } = input;

    // aqui crio um novo usuário para fazer as verificações de email e senha com regex

    const userDB = new UserDatabase();
    const user = await userDB.getUserByEmail(email)

    const hashCompare = await hashManager.compareHash(password, user.password)

    if(!user){
      throw new UserNotFound();
    }
    if(!hashCompare){
      throw new InvalidPassword();
    }

    const id = user.id

    const token = authenticator.generateToken({id});
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
    const userDatabase = new UserDatabase();
    await userDatabase.editUser(editUserInput);
  };

  public getUserByEmail = async (email: string): Promise<user> => {
    const userDB = new UserDatabase();

    const user = await userDB.getUserByEmail(email);

    if (!user) {
      throw new UserNotFound();
    }
    return user;
  };

  public getUser = async (token: string): Promise<UserResult> => {
    const userDB = new UserDatabase();

    const {id} = authenticator.getTokenData(token)

    const result = await userDB.getUserById({id});

    if (!result) {
      throw new UserNotFound();
    }

    const user = {
      id: result.id,
      email: result.email
    }
    return user;
  };
}
