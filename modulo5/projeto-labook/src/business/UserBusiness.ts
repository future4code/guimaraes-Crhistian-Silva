import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/customError";
import { generateId } from "../services/generateId";
import { User } from "../model/user";
import { UserDTO } from "../model/userDTO";
import { authenticationData, idsAuthenticationData } from "../model/types";
import { StatusCodes } from "../error/StatusCodes";
import { RelationsDTO } from "../model/relationsDTO";

export class UserBusiness {
  public createUser = async (input: UserDTO): Promise<void> => {
    try {
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

      const userDatabase = new UserDatabase();

      await userDatabase.insertUser(newUser);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public createFriendship = async (idsInput: RelationsDTO): Promise<void> => {
    try {
      const userDatabase = new UserDatabase();

      //CONSULTA AO BANCO PRA VER SE O ID ENVIADO RETORNA ALGUM USUÁRIO VÁLIDO
      const friend = await userDatabase.getUserById(idsInput.idSender);

      if (!friend[0]) {
        throw new CustomError(
          StatusCodes.NOT_FOUND.status,
          StatusCodes.NOT_FOUND.message
        );
      }
      //CONSULTA AO BANCO PRA VER SE A RELAÇÃO DE AMIZADE JÁ EXISTE ENTRE QUEM ENVIA O PEDIDO E QUEM RECEBE, SE JÁ EXISTIR UMA RELAÇÃO ENVIA ERRO, 
      const userRelations = await userDatabase.checkRelations(
        idsInput.idSender
      );
      
      if (
        userRelations.length &&
        (userRelations[0].friend_sender_id === idsInput.idSender ||
          userRelations[0].friend_receiver_id === idsInput.idSender)
      ) {
        throw new CustomError(
          StatusCodes.ALREADY_EXISTS.status,
          StatusCodes.ALREADY_EXISTS.message
        );
      }

      const id = generateId();

      const relations = {
        id,
        idSender: idsInput.idSender,
        idReceiver: idsInput.idReceiver,
      };

      const createRelations = new UserDatabase();

      await createRelations.insertRelations(relations);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
}
