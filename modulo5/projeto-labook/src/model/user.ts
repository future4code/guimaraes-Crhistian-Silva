import { EmailError, PasswordError } from "../error/customError";

export class User {
  constructor(
    private name: string,
    private email: string,
    private password: string,
    private _emailRegeX: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    private _passwordRegex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,}$/
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
    const result = this._emailRegeX.test(email);
    if (!result) throw new EmailError();
  }

  public setPassword(password: string) {
    const result = this._passwordRegex.test(password);
    if (!result) throw new PasswordError();
  }
}
