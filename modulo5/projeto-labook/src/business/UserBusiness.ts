import { UserDatabase } from "../data/UserDatabase"
import { v4  as generateId} from "uuid";

export class UserBusiness {
  public createUser = async (input: any):Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new Error(
          "MISSING PARAMETERS, PLEASE VERIFY DATA´S SENT "
        );
      }

      const id: string = generateId()
      
      const userDatabase = new UserDatabase()
      await userDatabase.insertUser({
        id,
        name,
        email,
        password
      });
    } catch (error: any) {
      throw new Error(error.message || error.sqlmessage) ;
    }
  };
}
