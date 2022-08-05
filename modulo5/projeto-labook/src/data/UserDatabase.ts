import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/user";
import { CustomError } from "../error/customError";
import { UserDTO } from "../model/userDTO";

export class UserDatabase extends BaseDatabase {
  private userTable = "labook_users";

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

  public getIdUser = async (userId: string): Promise<any[]> => {
    try {
      const result: any[] = await BaseDatabase.connection(this.userTable)
        .select("*")
        .where("id", userId);
      return result;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
}
