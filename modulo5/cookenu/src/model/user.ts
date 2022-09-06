import {
  InvalidEmail,
  InvalidPassword,
  InvalidRole,
} from "../error/customError";
import { ROLE_TYPE } from "./userTypes";

export class User {
  private _emailRegeX: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  private _passwordRegex: RegExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?([^\w\s]|[_])).{8,20}$/;

  constructor(
    private name: string,
    private email: string,
    private password: string,
    private role: ROLE_TYPE = ROLE_TYPE.NORMAL
  ) {
    this.setEmail(email);
    this.setPassword(password);
    this.setRole(role);
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  public getRole() {
    return this.role;
  }

  public setEmail(email: string) {
    const result = this._emailRegeX.test(email);
    if (!result) throw new InvalidEmail();
  }

  public setPassword(password: string) {
    const result = this._passwordRegex.test(password);
    if (!result) throw new InvalidPassword();
  }

  public setRole(role: ROLE_TYPE) {
    if (role.toLowerCase() === ROLE_TYPE.NORMAL) {
      this.role = ROLE_TYPE.NORMAL;
    } else if (role.toLowerCase() === ROLE_TYPE.ADMIN) {
      this.role = ROLE_TYPE.ADMIN;
    } else if (
      role.toLowerCase() !== ROLE_TYPE.NORMAL &&
      role.toLowerCase() !== ROLE_TYPE.ADMIN
    ) {
      throw new InvalidRole();
    }
  }
}
