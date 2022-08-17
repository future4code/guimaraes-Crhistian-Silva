import { InvalidEmail, InvalidPassword,  } from "../error/customError";


export class User {
  private _emailRegeX: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
  private _passwordRegex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{6,}$/

  constructor(
    private name: string,
    private nickname: string,
    private email: string,
    private password: string,
  ) {
    this.setEmail(email)
    this.setPassword(password)
  }

  public getName() {
    return this.name;
  }
  public getNickname() {
   return this.nickname;
 }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public setEmail(email: string) {
    const result = this._emailRegeX.test(email);
    if (!result) throw new InvalidEmail();
  }

  public setPassword(password: string) {
    const result = this._passwordRegex.test(password);
    if (!result) throw new InvalidPassword();
  }
}
