import { AuthenticationData } from './../services/Authenticator';
import { CustomError } from "../error/customError";
import { User } from "../model/user";
import { EditUserInput, user } from "../model/userTypes";
import { BaseDatabase } from "./BaseDatabase";

const userTableName = "Auth_users";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into(userTableName);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public editUser = async (user: EditUserInput): Promise<void> => {
    try {
      await UserDatabase.connection
        .update({ name: user.name, nickname: user.nickname })
        .where({ id: user.id })
        .into(userTableName);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getUserByEmail = async (email: string): Promise<user> => {
    try {
      const user: user[] = await UserDatabase.connection
        .select("*")
        .from(userTableName)
        .where({ email });
      return user[0];
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getUserById = async (id: AuthenticationData): Promise<user> => {
    try {
      const user: user[] = await UserDatabase.connection
        .select("*")
        .from(userTableName)
        .where({ id });
      return user[0];
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
}
