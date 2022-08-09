import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/user";
import { CustomError } from "../error/customError";
import { UserDTO } from "../model/userDTO";
import { authenticationData, idsAuthenticationData } from "../model/types";

export class UserDatabase extends BaseDatabase {
  private userTable = "labook_users";
  private relationsTable = "labook_relations";

  public insertUser = async (user: UserDTO): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into(this.userTable);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public getUserById = async (userId: string): Promise<any[]> => {
    try {
      const result: any[] = await BaseDatabase.connection(this.userTable)
        .select("*")
        .where("id", userId);
      return result;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public insertRelations = async (
    inputRelations: idsAuthenticationData
  ): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: inputRelations.id,
          friend_sender_id: inputRelations.idSender,
          friend_receiver_id: inputRelations.idReceiver,
        })
        .into(this.relationsTable);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public checkRelations = async (userId: string): Promise<any[]> => {
    try {
      const result: any[] = await BaseDatabase.connection(this.relationsTable)
        .select("friend_sender_id", "friend_receiver_id")
        .whereLike("friend_sender_id", userId)
        .orWhereLike("friend_receiver_id", userId);
      return result;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public deleteFriendship = async (
    idUser: authenticationData
  ): Promise<void> => {
    const { id } = idUser;

    try {
      await BaseDatabase.connection
        .from(this.relationsTable)
        .where("friend_sender_id", id)
        .orWhere("friend_receiver_id", id)
        .del();
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
}
