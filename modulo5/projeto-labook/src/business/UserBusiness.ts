import { RelationsPostInput } from "../model/postTypes";
import { UserDatabase } from "../data/UserDatabase";
import {
  AlreadyExists,
  RelationsNotFound,
  UserNotFound,
} from "../error/customError";
import { generateId } from "../services/generateId";
import { User } from "../model/user";
import { UserDTO } from "../model/userDTO";
import { RelationsDTO } from "../model/relationsDTO";
import { CreateUserInput } from "../model/userTypes";

export class UserBusiness {
  public createUser = async (input: CreateUserInput): Promise<void> => {
    const user = new User(input.name, input.email, input.password);

    user.setEmail(input.email);

    user.setPassword(input.password);

    const id: string = generateId();

    const newUser: UserDTO = {
      id,
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
    };

    const userDB = new UserDatabase();

    await userDB.insertUser(newUser);
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

    const id = generateId();

    const relations: RelationsDTO = {
      id,
      friend_sender_id: idsInput.idSender,
      friend_receiver_id: idsInput.idReceiver,
    };

    const id2 = generateId();

    const relations2: RelationsDTO = {
      id: id2,
      friend_sender_id: idsInput.idReceiver,
      friend_receiver_id: idsInput.idSender,
    };

    const createRelations = new UserDatabase();

    await createRelations.insertRelations(relations, relations2);
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
    const deleteRelations = new UserDatabase();

    await deleteRelations.deleteFriendship({ id });
  };
}
