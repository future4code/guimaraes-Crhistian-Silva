import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from "uuid";
import { AddressInfo } from "net";
import { users } from "./data";
import { messages } from "./messages";

const app = express();

app.use(express.json());

app.use(cors());

//PARA FIXAR A LÓGICA DE VERIFICAÇÃO, SEMPRE CRIO UMA VARIÁVEL COMO AUTHORIZATION

const authorization = "AUTHORIZED";

//Exercício 1

//a) GET
//c)"/users"

app.get("/users", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;

    if (
      !userAuthorization ||
      userAuthorization.toUpperCase() !== authorization
    ) {
      throw new Error(messages.AUTHORIZATION_NOT_FOUND.message);
    }
    if (users.length < 0) {
      throw new Error(messages.USERS_NOT_FOUND.message);
    }
    res.status(messages.SUCCESS.status).send(users);
  } catch (error: any) {
    switch (error.message) {
      case messages.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(messages.AUTHORIZATION_NOT_FOUND.status)
          .send(messages.AUTHORIZATION_NOT_FOUND.message);
        break;
      case messages.USERS_NOT_FOUND.message:
        res
          .status(messages.USERS_NOT_FOUND.status)
          .send(messages.USERS_NOT_FOUND.message);
        break;
      default:
        res
          .status(messages.SOME_ERROR.status)
          .send(messages.SOME_ERROR.message);
    }
  }
});

//Exercício 2

app.get("/user", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const typeUser = req.query.type as string;

    console.log("typeuser", typeUser);

    if (!userAuthorization || userAuthorization.toUpperCase() !== authorization) {
        throw new Error(messages.AUTHORIZATION_NOT_FOUND.message);
    }
    if (!typeUser) {
      throw new Error(messages.MISSING_PARAMETERS.message);
    } 
    if (users.length < 0) {
        throw new Error(messages.USERS_NOT_FOUND.message);
    }

    const user = users.find((user) => user.type === typeUser.toUpperCase());

  if (!user){throw new Error(messages.USERS_NOT_FOUND.message)}

    const userFIlter = users.filter((user) => {
      if (user.type === typeUser.toUpperCase()) {
        return user;
      }
    });

    res.status(messages.SUCCESS.status).send(userFIlter);
  } catch (error: any) {
    switch (error.message) {
      case messages.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(messages.AUTHORIZATION_NOT_FOUND.status)
          .send(messages.AUTHORIZATION_NOT_FOUND.message);
        break;
      case messages.USERS_NOT_FOUND.message:
        res
          .status(messages.USERS_NOT_FOUND.status)
          .send(messages.USERS_NOT_FOUND.message);
        break;
      case messages.MISSING_PARAMETERS.message:
        res
          .status(messages.MISSING_PARAMETERS.status)
          .send(messages.MISSING_PARAMETERS.message);
        break;
      default:
        res
          .status(messages.SOME_ERROR.status)
          .send(messages.SOME_ERROR.message);
    }
  }
});






const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(
      `Server is running in Exercicios APIS REST FG in http://localhost:${address.port}`
    );
  } else {
    console.error(`Failure upon starting server.`);
  }
});
