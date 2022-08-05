import { CustomError } from "../error/customError";
import { StatusCodes } from "../error/StatusCodes";

export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private _emailRegex: RegExp = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/,
    private _passwordRegex: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])(?:([0-9a-zA-Z$*&@#])(?!\1)){8,20}$/
  ) {}

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public setEmail(email: string) {
    const result = this._emailRegex.test(email);
    if (!result) throw new CustomError(405, StatusCodes.EMAIL_ERROR.message);
  }

  public setPassword(password: string) {
    const result = this._passwordRegex.test(password);
    if (!result) throw new CustomError(405, StatusCodes.PASSWORD_ERROR.message);
  }
}
