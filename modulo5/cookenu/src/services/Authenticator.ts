import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../error/customError";

export type AuthenticationData = {
  id: string;
};

export class Authenticator {
  public generateToken = ({ id }: AuthenticationData): string => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_DURATION,
    });
    return token;
  };

  public getTokenData = (token: string): AuthenticationData => {
    try {
      const payload = jwt.verify(
        token,
        process.env.JWT_KEY as string
      ) as AuthenticationData;

      return payload;
    } catch (error: any) {
      throw new Unauthorized();
    }
  };
}
