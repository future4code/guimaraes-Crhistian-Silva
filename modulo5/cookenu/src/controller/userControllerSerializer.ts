import {
  InvalidRole,
  MissingParameters,
  MissingParametersLogin,
  MissingParametersToken,
  SameIdError,
} from "../error/customError";
import { RelationsPostInput } from "../model/postTypes";
import { CreateUserInput, LoginInput, ROLE_TYPE } from "../model/userTypes";

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

export const validateLoginInput = (input: LoginInput): void => {
  if (!input.email || !input.password) {
    throw new MissingParametersLogin();
  }
};

export const validateToken = (token: string): void => {
  if (!token) {
    throw new MissingParametersToken();
  }
};

export const validateRole = (role: ROLE_TYPE): void => {
  if (role !== ROLE_TYPE.NORMAL && role !== ROLE_TYPE.ADMIN) {
    throw new InvalidRole();
  }
};
