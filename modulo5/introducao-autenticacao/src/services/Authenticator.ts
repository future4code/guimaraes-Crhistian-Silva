import * as jwt from "jsonwebtoken";

export type AuthenticationData = {
    id:string
}

export class Authenticator {
  public generateToken = ({id}: AuthenticationData): string => {
    const token = jwt.sign({ id }, process.env.JWT_KEY as string, 
        {expiresIn: process.env.JWT_DURATION,
    });
    return token;
  };
  public getTokenData = (token:string):AuthenticationData =>{
    const payload = jwt.verify(token , process.env.JWT_KEY as string) as AuthenticationData
    return payload
  }
}

//Exercício 2
//a) tranforma a propriedade em uma string 