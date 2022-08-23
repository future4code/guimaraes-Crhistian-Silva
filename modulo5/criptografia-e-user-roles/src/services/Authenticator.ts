import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../error/customError";
import { AuthenticationData } from "../model/types";


class Authenticator {
  public generateToken = (payload: AuthenticationData): string => {
    const token = jwt.sign(payload, process.env.JWT_KEY as string, {
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

export default new Authenticator();

