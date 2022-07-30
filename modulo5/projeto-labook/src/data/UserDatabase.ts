import { BaseDatabase } from "./BaseDatabase";
import { user } from "../types/types";

export class UserDatabase extends BaseDatabase {
  private userTable = "labook_users"

  public insertUser = async (user: user):Promise<void> => {
    try {
      await BaseDatabase.connection
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      })
      .into(this.userTable);
    } catch (error:any) {
      throw new Error(error.message)     
    }  
  };
}
