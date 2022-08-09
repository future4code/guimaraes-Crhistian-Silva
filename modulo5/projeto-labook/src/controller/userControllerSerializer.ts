import { CustomError } from "../error/customError";
import { RelationsDTO } from "../model/relationsDTO";
import { CreateUserInput } from "../model/types";

export const validateUserInput = (
  input: CreateUserInput,
  status: { [key: string]: { status: number; message: string } }
): void => {
  if (!input.name || !input.email || !input.password) {
    throw new CustomError(
      status.MISSING_PARAMETERS.status,
      status.MISSING_PARAMETERS.message
    );
  }
};

export const validateRelationsDTO = (
  input: RelationsDTO,
  status: { [key: string]: { status: number; message: string } }
): void => {
  if (!input.idSender || !input.idReceiver) {
    throw new CustomError(
      status.MISSING_PARAMETERS.status,
      status.MISSING_PARAMETERS.message
    );
  }
 if(input.idSender === input.idReceiver){
  throw new CustomError(
    status.ID_ERROR.status,
    status.ID_ERROR.message
  );
 }
};
