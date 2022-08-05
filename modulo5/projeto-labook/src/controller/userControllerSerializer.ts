import { CustomError } from "../error/customError";
import { UserDTO } from "../model/userDTO";

 export const validateUserInput = (
    input: UserDTO,
    status: {[key: string]: { status: number; message: string }}): void => {
    if (!input.name || !input.email || !input.password) {
      throw new CustomError(
        status.MISSING_PARAMETERS.status,
        status.MISSING_PARAMETERS.message
      );
    }
  };