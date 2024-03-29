import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { UserDTO } from "../model/userDTO";
import { authenticationData } from "../model/postTypes";
import { RelationsDTO } from "../model/relationsDTO";

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
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getUserById = async (userId: string): Promise<UserDTO[]> => {
    try {
      const result: any[] = await BaseDatabase.connection(this.userTable)
        .select("*")
        .where("id", userId);
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public insertRelations = async (
    inputRelations: RelationsDTO,
    inputRelations2: RelationsDTO
  ): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert([
          {
            id: inputRelations.id,
            friend_sender_id: inputRelations.friend_sender_id,
            friend_receiver_id: inputRelations.friend_receiver_id,
          },
          {
            id: inputRelations2.id,
            friend_sender_id: inputRelations2.friend_sender_id,
            friend_receiver_id: inputRelations2.friend_receiver_id,
          },
        ])
        .into(this.relationsTable);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public checkRelations = async (userId: string): Promise<RelationsDTO[]> => {
    try {
      const result: any[] = await BaseDatabase.connection(this.relationsTable)
        .select("friend_sender_id", "friend_receiver_id")
        .whereLike("friend_sender_id", userId)
        .orWhereLike("friend_receiver_id", userId);
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
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
      throw new CustomError(500, error.sqlMessage);
    }
  };
}
