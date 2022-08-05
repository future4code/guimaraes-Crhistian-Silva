import { CustomError } from "../error/customError";



export const validateEmail = (email: string): boolean => {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
};

export const validatePassword = (password: string): boolean => {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,20}$/.test(
    password
  );
};
