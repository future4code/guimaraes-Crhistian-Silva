import { CustomError } from "../error/customError";
import { User } from "../model/user";
import { AuthenticationData, EditUserInput, user } from "../model/types";
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
          role: user.role
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

  public getUserById = async (id: string): Promise<user> => {
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
