import { UserDatabase } from "../data/UserDatabase";
import { StatusCodes } from "../error/StatusCOdes";
import { CustomError } from "../error/customError";
import { generateId } from "../services/generateId";
import { User } from "../model/user";
import { UserDTO } from "../model/userDTO";

export class UserBusiness {
  public createUser = async (input: UserDTO): Promise<void> => {
    try {
  
      const newUser = new User(input.name, input.email, input.password)

/* 
      //IMPLANTAÇÃO DE VERIFICAÇÃO DE INPUT

      validateInputUserDTO(input, StatusCodes);
      //IMPLANTAÇÃO DE VERIFICAÇÃO DE INPUT

      //IMPLANTAÇÃO DE VERIFICAÇÃO DE EMAIL

      if (!validateEmail(email)) {
        throw new CustomError(405, StatusCodes.EMAIL_ERROR.message);
      }

      //IMPLANTAÇÃO DE VERIFICAÇÃO DE PASSWORD

      //Instruções de Password enviado no Body
      // deve conter ao menos um dígito
      // deve conter ao menos uma letra minúscula
      // deve conter ao menos uma letra maiúscula
      // deve conter ao menos um caractere especial
      // deve conter ao menos 8 e no Máximo 20 dos caracteres mencionado

      if (!validatePassword(password)) {
        throw new CustomError(405, StatusCodes.PASSWORD_ERROR.message);
      } */

      const id: string = generateId();

      const newUserObject: UserDTO ={
        id,
        name: newUser.getName(),
        email: newUser.getEmail(),
        password: newUser.getPassword()

      }

      const userDatabase = new UserDatabase();

      await userDatabase.insertUser(newUserObject);
   } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
}
