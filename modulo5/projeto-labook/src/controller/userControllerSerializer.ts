import { MissingParameters, SameIdError } from "../error/customError";
import { RelationsPostInput } from "../model/postTypes";
import { CreateUserInput } from "../model/userTypes";

export const validateUserInput = (input: CreateUserInput): void => {
  if (!input.name || !input.email || !input.password) {
    throw new MissingParameters();
  }
};

export const validateRelationsDTO = (input: RelationsPostInput): void => {
  if (!input.idSender || !input.idReceiver) {
    throw new MissingParameters();
  }
  if (input.idSender === input.idReceiver) {
    throw new SameIdError();
  }
};
