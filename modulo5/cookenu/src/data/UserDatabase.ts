import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { FollowDTO, UserDTO } from "../model/userTypes";

export class UserDatabase extends BaseDatabase {
  private userTable = "cookenu_users";
  private relationsTable = "cookenu_users_relations";

  public insertUser = async (user: UserDTO): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into(this.userTable);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getUserByEmail = async (email: string): Promise<UserDTO> => {
    try {
      const user: UserDTO[] = await UserDatabase.connection
        .select("*")
        .from(this.userTable)
        .where({ email });

       
      return user[0];
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getUserById = async (userId: string): Promise<UserDTO> => {
    try {
      const result: UserDTO[] = await BaseDatabase.connection(this.userTable)
        .select("*")
        .where("id", userId);
      return result[0];
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public insertFollow = async (
    inputRelations: FollowDTO,
  ): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert(
          {
            id: inputRelations.id,
            id_user_follower: inputRelations.idFollower,
            id_user_followed: inputRelations.idFollowed,
          },
    )
        .into(this.relationsTable);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public checkRelations = async (idFollower: string, idFollowed:string): Promise<FollowDTO> => {
    try {
      const result: any[] = await BaseDatabase.connection(this.relationsTable)
        .select("*")
        .whereLike("id_user_follower", idFollower)
        .andWhereLike("id_user_followed", idFollowed);
      return result[0];
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public deleteFriendship = async (
    idUser: string
  ): Promise<void> => {
    try {
      await BaseDatabase.connection
        .from(this.relationsTable)
        .where("friend_sender_id", idUser)
        .orWhere("friend_receiver_id", idUser)
        .del();
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
}
