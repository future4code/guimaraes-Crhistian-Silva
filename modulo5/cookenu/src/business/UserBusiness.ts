import {
  LoginInput,
  UserDTO,
  UserProfile,
} from "./../model/userTypes";
import { HashManager } from "./../services/HashManager";
import { RelationsPostInput } from "../model/recipeTypes";
import { UserDatabase } from "../data/UserDatabase";
import {
  AlreadyExists,
  InvalidPassword,
  NotAllowed,
  RelationsNotFound,
  UserNotFound,
} from "../error/customError";
import { User } from "../model/user";
import { CreateUserInput } from "../model/userTypes";
import { IdGenerator } from "../services/IdGenerator";
import { AuthenticationData, Authenticator } from "../services/Authenticator";
import { validateRole } from "../controller/userControllerSerializer";

export class UserBusiness {
  private userDB: UserDatabase;
  private hashManager: HashManager;
  private authenticator: Authenticator;
  private idGenerator: IdGenerator;
  constructor() {
    (this.userDB = new UserDatabase()),
      (this.hashManager = new HashManager()),
      (this.authenticator = new Authenticator()),
      (this.idGenerator = new IdGenerator());
  }
  public signUp = async (input: CreateUserInput): Promise<string> => {
    const { name, email, password, role } = input;

    const user = new User(name, email, password, role);

    const id: string = this.idGenerator.generateId();

    const hashPassword = await this.hashManager.generateHash(password);

    const newUser: UserDTO = {
      id,
      name: user.getName(),
      email: user.getEmail(),
      password: hashPassword,
      role: user.getRole(),
    };

    const payload = {
      id,
      role,
    };

    await this.userDB.insertUser(newUser);
    const token = this.authenticator.generateToken(payload);
    return token;
  };

  public login = async (input: LoginInput): Promise<string> => {
    const { email, password } = input;

    // aqui crio um novo usuário para fazer as verificações de email e senha

    const user = await this.userDB.getUserByEmail(email);

    const hashCompare = await this.hashManager.compareHash(
      password,
      user.password
    );

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

    const token = this.authenticator.generateToken(payload);
    return token;
  };

  public getUser = async (token: string): Promise<UserProfile> => {

    const authentication = this.authenticator.getTokenData(token);

    validateRole(authentication.role);

    /* 
    if (authentication.role !== "NORMAL") {
      throw new NotAllowed();
    }
 */
    const result = await this.userDB.getUserById(authentication.id);

    if (!result) {
      throw new UserNotFound();
    }

    const user:UserProfile = {
      id: result.id,
      email: result.email,
    };
    return user;
  };

 
}
