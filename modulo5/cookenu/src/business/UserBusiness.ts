import { ROLE_TYPE } from './../model/userTypes';
import { HashManager } from './../services/HashManager';
import { RelationsPostInput } from "../model/postTypes";
import { UserDatabase } from "../data/UserDatabase";
import {
  AlreadyExists,
  RelationsNotFound,
  UserNotFound,
} from "../error/customError";
import { User } from "../model/user";
import { UserDTO } from "../model/userDTO";
import { RelationsDTO } from "../model/relationsDTO";
import { CreateUserInput } from "../model/userTypes";
import { IdGenerator } from '../services/IdGenerator';
import { Authenticator } from '../services/Authenticator';


export class UserBusiness {
  private userDB: UserDatabase
  private hashManager: HashManager
  private authenticator: Authenticator
  private idGenerator: IdGenerator
  constructor(){
    this.userDB = new UserDatabase(),
    this.hashManager = new HashManager(),
    this.authenticator = new Authenticator(),
    this.idGenerator = new IdGenerator()
      }
  public signUp = async (input: CreateUserInput): Promise<string> => {

    const { name, email, password} = input;

    let role = input.role // nao da pra transformar em string senao perde as comparações

    if(role?.toUpperCase() === ROLE_TYPE.NORMAL ){
      role = ROLE_TYPE.NORMAL ;
    }
    if(role?.toUpperCase() === ROLE_TYPE.ADMIN ){
      role = ROLE_TYPE.ADMIN ;
    }
    if (!role || role?.toUpperCase() !== ROLE_TYPE.NORMAL && role?.toUpperCase() !== ROLE_TYPE.ADMIN) {
      role = ROLE_TYPE.NORMAL ;
    }

    // aqui crio um novo usuário para fazer as verificações de email e senha com regex

    const user = new User(name, email, password, role);

    const id: string = this.idGenerator.generateId()

    const hashPassword = await this.hashManager.generateHash(password)

    const newUser: UserDTO = {
      id,
      name: user.getName(),
      email: user.getEmail(),
      password: hashPassword,
      role: user.getRole()
    };

    const payload = {
      id,
      role
    }

    await this.userDB.insertUser(newUser);
    const token = this.authenticator.generateToken(payload)
    return token
  };

  public createFriendship = async (
    idsInput: RelationsPostInput
  ): Promise<void> => {
    const userDB = new UserDatabase();

    //CONSULTA AO BANCO PRA VER SE O ID ENVIADO RETORNA ALGUM USUÁRIO VÁLIDO
    const friendSender = await userDB.getUserById(idsInput.idSender);

    const friendReceiver = await userDB.getUserById(idsInput.idReceiver);

    if (!friendSender.length || !friendReceiver.length) {
      throw new UserNotFound();
    }

    //CONSULTA AO BANCO PRA VER SE  A RELAÇÃO DE AMIZADE JÁ EXISTE ENTRE QUEM ENVIA O PEDIDO E QUEM RECEBE, SE JÁ EXISTIR UMA RELAÇÃO ENVIA ERRO,
    const userRelations = await userDB.checkRelations(idsInput.idSender);

    if (
      userRelations.length &&
      (userRelations[0].friend_sender_id === idsInput.idSender ||
        userRelations[0].friend_receiver_id === idsInput.idSender)
    ) {
      throw new AlreadyExists();
    }

    if (
      userRelations.length &&
      (userRelations[0].friend_sender_id === idsInput.idSender ||
        userRelations[0].friend_receiver_id === idsInput.idSender)
    ) {
      throw new AlreadyExists();
    }

    const id: string = this.idGenerator.generateId()

    const relations: RelationsDTO = {
      id,
      friend_sender_id: idsInput.idSender,
      friend_receiver_id: idsInput.idReceiver,
    };

    const id2: string = this.idGenerator.generateId()

    const relations2: RelationsDTO = {
      id: id2,
      friend_sender_id: idsInput.idReceiver,
      friend_receiver_id: idsInput.idSender,
    };

    await  this.userDB.insertRelations(relations, relations2);
  };

  public deleteFriendship = async (
    idsInput: RelationsPostInput
  ): Promise<void> => {
    const userDB = new UserDatabase();

    //CONSULTA AO BANCO PRA VER SE O ID ENVIADO RETORNA ALGUM USUÁRIO VÁLIDO
    const friendSender = await userDB.getUserById(idsInput.idSender);

    const friendReceiver = await userDB.getUserById(idsInput.idReceiver);

    if (!friendSender.length || !friendReceiver.length) {
      throw new UserNotFound();
    }

    //CONSULTA AO BANCO PRA VER SE A RELAÇÃO DE AMIZADE JÁ EXISTE ENTRE QUEM ENVIA O PEDIDO E QUEM RECEBE, SE JÁ EXISTIR UMA RELAÇÃO ENVIA ERRO,
    const userRelations = await userDB.checkRelations(idsInput.idSender);
    if (
      userRelations.length &&
      (userRelations[0].friend_sender_id === idsInput.idSender ||
        userRelations[0].friend_receiver_id === idsInput.idSender)
    ) {
    } else {
      throw new RelationsNotFound();
    }

    const id = idsInput.idSender;

    await  this.userDB.deleteFriendship({ id });
  };
}
