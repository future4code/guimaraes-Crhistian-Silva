import { validatePassword } from "./../services/functions";
import { UserDatabase } from "../data/UserDatabase";
import { UserInputDTO } from "../model/userDTO";
import { User } from "../model/user";
import { generateId } from "../services/generateId";
import { CustomError } from "../error/CustomError";
import { StatusCodes } from "../error/StatusCodes";
import { validateEmail, validateInputUserDTO } from "../services/functions";

export class UserBusiness {
  public async create(input: UserInputDTO): Promise<void> {
    try {
      const dataUser: UserInputDTO = {
        name: input.name,
        email: input.email,
        password: input.password,
      };

      //IMPLANTAÇÃO DE VERIFICAÇÃO DE INPUT

      validateInputUserDTO(dataUser, StatusCodes);

      //IMPLANTAÇÃO DE VERIFICAÇÃO DE EMAIL

      if (!validateEmail(dataUser.email)) {
        throw new CustomError(405, StatusCodes.EMAIL_ERROR.message);
      }

      //IMPLANTAÇÃO DE VERIFICAÇÃO DE PASSWORD

      //Instruções de Password enviado no Body
      // deve conter ao menos um dígito
      //deve conter ao menos uma letra minúscula
      // deve conter ao menos uma letra maiúscula
      // deve conter ao menos um caractere especial
      // deve conter ao menos 8 e no Máximo 20 dos caracteres mencionado
      
      if (!validatePassword(dataUser.password)) {
        throw new CustomError(405, StatusCodes.PASSWORD_ERROR.message);
      }

      const id = generateId();

      const user: User = new User(
        id,
        dataUser.name,
        dataUser.email,
        dataUser.password
      );

      const userDatabase = new UserDatabase();

      await userDatabase.create(user);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  }

  public async getAll(): Promise<any> {
    try {
      const userDatabase = new UserDatabase();
      const user = await userDatabase.getAll();

      return user;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  }
}
