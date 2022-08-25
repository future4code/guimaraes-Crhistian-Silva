import {
  FollowDTO,
  FollowInput,
  LoginInput,
  UserDTO,
  UserProfile,
} from "./../model/userTypes";
import { HashManager } from "./../services/HashManager";
import { UserDatabase } from "../data/UserDatabase";
import {
  AlreadyExists,
  InvalidPassword,
  NotAllowedFollow,
  UserFollowedNotFound,
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

    

    const user = await this.userDB.getUserByEmail(email);

    if (!user) {
      throw new UserNotFound();
    }
  
    const hashCompare = await this.hashManager.compareHash(
      password,
      user.password
    );
   
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

  public followUser = async (input: FollowInput): Promise<void> => {
    const {idFollowed, token} = input 

    const authentication = this.authenticator.getTokenData(token);

    validateRole(authentication.role);

    //Aqui faço a verificação se o id enviado para seguir é o do próprio usuário, talvez seja redundante, gostaria de opinião sobre isso

if(authentication.id === idFollowed){
  throw new NotAllowedFollow();
}

    //faço a verificação pra ver se o usuário que deseja seguir existe
    const user = await this.userDB.getUserById(idFollowed);

    if (!user) {
      throw new UserFollowedNotFound();
    }
//Faço a verificação pra saber se a relação de seguir algum usuário já existe

    const userRelations = await this.userDB.checkRelations(authentication.id, user.id);

    if(userRelations){
      throw new AlreadyExists();
    }

    const id: string = this.idGenerator.generateId();

    const relations: FollowDTO= {
      id,
      idFollowed,
      idFollower: authentication.id  
    }

    await this.userDB.insertFollow(relations)

  };

}
