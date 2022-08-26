import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { BusinessFeedInput, FeedDTO, FollowDTO, UserDTO } from "../model/userTypes";
import { UserFeedDTO } from "../model/recipeTypes";

export class UserDatabase extends BaseDatabase {
  private userTable = "cookenu_users";
  private relationsTable = "cookenu_users_relations";
  private recipesTable = "cookenu_recipes"

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
            id_user_followd: inputRelations.idFollowd,
          },
    )
        .into(this.relationsTable);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public checkRelations = async (idFollower: string, idFollowd:string): Promise<FollowDTO[]> => {
    try {
      const result = await BaseDatabase.connection(this.relationsTable)
        .select("*")
        .whereLike("id_user_follower", idFollower)
        .andWhereLike("id_user_followd", idFollowd);
      return result[0];
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public unFollowUser = async (
    idUserUnfollow: string
  ): Promise<void> => {
    try {
      await BaseDatabase.connection
        .from(this.relationsTable)
        .where("id_user_followed", idUserUnfollow)
        .del();
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };


  public getFeed = async (input: FeedDTO): Promise<UserFeedDTO[]> => {
    try {
      const {idFollowd, offset, limit} =  input
      const result: UserFeedDTO[] = await BaseDatabase.connection("cookenu_users as u")
        .select("r.id", "r.title", "r.description", "r.creation_date as creationDate", " u.id as userId" , "u.name as userName",)
        .join("cookenu_recipes as r", "r.author_id", "u.id" )
        .join("cookenu_users_relations as rel", "rel.id_user_followd", "u.id")
        .where("r.author_id", idFollowd)
        .orderBy("creation_date", "DESC")
        .limit(limit)
        .offset(offset);
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public delAccount = async (
    idUser: string
  ): Promise<void> => {
    try {
      await BaseDatabase.connection
        .from(this.userTable)
        .where("id", idUser)
        .del();
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

}
