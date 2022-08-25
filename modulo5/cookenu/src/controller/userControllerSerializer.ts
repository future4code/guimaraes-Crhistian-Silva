import {
  InvalidRole,
  MissingParameters,
  MissingParametersLogin,
  MissingParametersToken,
} from "../error/customError";
import {
  CreateUserInput,
  FollowInput,
  LoginInput,
  ROLE_TYPE,
} from "../model/userTypes";

export const validateUserInput = (input: CreateUserInput): void => {
  if (!input.name || !input.email || !input.password) {
    throw new MissingParameters();
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

export const validateFollowInput = (input: FollowInput): void => {
  if (!input.idFollowed) {
    throw new MissingParameters();
  } else if (!input.token) {
    throw new MissingParametersToken();
  }
};
