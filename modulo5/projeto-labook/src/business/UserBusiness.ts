import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/customError";
import { generateId } from "../services/generateId";
import { User } from "../model/user";
import { UserDTO } from "../model/userDTO";

export class UserBusiness {
  public createUser = async (input: UserDTO): Promise<void> => {
    try {
      const user = new User(input.name, input.email, input.password);

      user.setEmail(input.email);

      user.setPassword(input.password);

      const id: string = generateId();

      const newUser: UserDTO = {
        id,
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
      };

      const userDatabase = new UserDatabase();

      await userDatabase.insertUser(newUser);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
}
