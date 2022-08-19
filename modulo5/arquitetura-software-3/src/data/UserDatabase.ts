import { CustomError } from "../error/CustomError";
import { User } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  public async create(user:User): Promise<void> {
    try {
      const newUser = {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword()
      }
      await UserDatabase.connection
        .insert(newUser)
        .into(UserDatabase.TABLE_NAME);
      } catch (error: any) {
        throw new CustomError(error.status, error.message || error.sqlMessage);
      }
  }

  public async getAll(): Promise<any> {
    try {
      const user = await UserDatabase.connection(
        UserDatabase.TABLE_NAME
      ).select("id", "name", "email");
      return user;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  }
}
