import express, { Request, Response } from "express";
import cors from "cors";
import { v4 as generateId } from "uuid";
import { AddressInfo } from "net";
import { users, UserType, user } from "./data";
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
//a) via Params porque não é uma informação sensivel
//b) colocar na documentação quais os types e a forma a serem enviados

app.get("/user/:type", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const typeUser = req.params.type as string;

    if (
      !userAuthorization ||
      userAuthorization.toUpperCase() !== authorization
    ) {
      throw new Error(messages.AUTHORIZATION_NOT_FOUND.message);
    }
    if (!typeUser) {
      throw new Error(messages.MISSING_PARAMETERS.message);
    }
    if (users.length < 0) {
      throw new Error(messages.USERS_NOT_FOUND.message);
    }

    const user = users.find((user) => user.type === typeUser.toUpperCase());

    if (!user) {
      throw new Error(messages.USERS_NOT_FOUND.message);
    }

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

//Exercício 3
//a) QUERY
//b) sempre deixo pronto já

app.get("/user", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const nameUser = req.query.name as string;

    if (
      !userAuthorization ||
      userAuthorization.toUpperCase() !== authorization
    ) {
      throw new Error(messages.AUTHORIZATION_NOT_FOUND.message);
    }
    if (!nameUser) {
      throw new Error(messages.MISSING_PARAMETERS.message);
    }
    if (users.length < 0) {
      throw new Error(messages.USERS_NOT_FOUND.message);
    }

    const user = users.find(
      (user) => user.name.toUpperCase() === nameUser.toUpperCase()
    );

    if (!user) {
      throw new Error(messages.USERS_NOT_FOUND.message);
    }

    res.status(messages.SUCCESS.status).send(user);
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

//Exercício 4
//a) nada, funcionou da mesma forma
//b) acho que não, pois put da a entender modificação de algo que já existe

app.post("/user/create", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const { name, email, type, age } = req.body;
    const typeUpper = type.toUpperCase()

    if ( !userAuthorization || userAuthorization.toUpperCase() !== authorization)
    {
      throw new Error(messages.AUTHORIZATION_NOT_FOUND.message);
    }

    if ( !name || !email || !type || !age || type.toUpperCase() !== UserType.ADMIN && type.toUpperCase() !== UserType.NORMAL)
    {
      throw new Error(messages.MISSING_PARAMETERS.message);
    }

    const user = users.find(
      (user) => user.name.toUpperCase() === name.toUpperCase()
    );

    if (user) {
      throw new Error(messages.USER_EXISTS.message);
    }

    const newUser: user = {
      id: Math.random(),
      name,
      email,
      type:typeUpper,
      age,
    };
    users.push(newUser);

    res.status(messages.CREATED.status).send(newUser);
  } catch (error: any) {
    switch (error.message) {
      case messages.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(messages.AUTHORIZATION_NOT_FOUND.status)
          .send(messages.AUTHORIZATION_NOT_FOUND.message);
        break;
      case messages.MISSING_PARAMETERS.message:
        res
          .status(messages.MISSING_PARAMETERS.status)
          .send(messages.MISSING_PARAMETERS.message);
        break;
      case messages.USER_EXISTS.message:
        res
          .status(messages.USER_EXISTS.status)
          .send(messages.USER_EXISTS.message);
        break;

      default:
        res
          .status(messages.SOME_ERROR.status)
          .send(messages.SOME_ERROR.message);
    }
  }
});

//DESAFIOS
//Exercício 5

app.put("/user/:id", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const  nameUser  = req.body.name as string
    const idUser = Number(req.params.id)

    if ( !userAuthorization || userAuthorization.toUpperCase() !== authorization)
    {
      throw new Error(messages.AUTHORIZATION_NOT_FOUND.message);
    }

    if (!nameUser || !idUser)
    {
      throw new Error(messages.MISSING_PARAMETERS.message);
    }

    const user = users.find((user) => user.id === idUser)

    if (!user) {
      throw new Error(messages.USERS_NOT_FOUND.message);
    }

    users.forEach((user)=>{
      if(user.name === nameUser){
        throw new Error(messages.USER_EXISTS.message)
      }
      if(user.id === idUser){
        user.name = nameUser
      }
      return user
    }
  )

    res.status(messages.CREATED.status).end()
  } catch (error: any) {
    switch (error.message) {
      case messages.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(messages.AUTHORIZATION_NOT_FOUND.status)
          .send(messages.AUTHORIZATION_NOT_FOUND.message);
        break;
      case messages.MISSING_PARAMETERS.message:
        res
          .status(messages.MISSING_PARAMETERS.status)
          .send(messages.MISSING_PARAMETERS.message);
        break;
        case messages.USERS_NOT_FOUND.message:
          res
            .status(messages.USERS_NOT_FOUND.status)
            .send(messages.USERS_NOT_FOUND.message);
          break;
      case messages.USER_EXISTS.message:
        res
          .status(messages.USER_EXISTS.status)
          .send(messages.USER_EXISTS.message);
        break;

      default:
        res
          .status(messages.SOME_ERROR.status)
          .send(messages.SOME_ERROR.message);
    }
  }
});

//Exercício 6

app.patch("/user/:id", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const  nameUser  = req.body.name as string
    const idUser = Number(req.params.id)

    if ( !userAuthorization || userAuthorization.toUpperCase() !== authorization)
    {
      throw new Error(messages.AUTHORIZATION_NOT_FOUND.message);
    }

    if (!nameUser || !idUser)
    {
      throw new Error(messages.MISSING_PARAMETERS.message);
    }

    const user = users.find((user) => user.id === idUser)

    if (!user) {
      throw new Error(messages.USERS_NOT_FOUND.message);
    }

    users.forEach((user)=>{
      if(user.name === nameUser){
        throw new Error(messages.USER_EXISTS.message)
      }
      if(user.id === idUser){
        user.name = nameUser
      }
      return user
    }
  )

    res.status(messages.CREATED.status).end()
  } catch (error: any) {
    switch (error.message) {
      case messages.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(messages.AUTHORIZATION_NOT_FOUND.status)
          .send(messages.AUTHORIZATION_NOT_FOUND.message);
        break;
      case messages.MISSING_PARAMETERS.message:
        res
          .status(messages.MISSING_PARAMETERS.status)
          .send(messages.MISSING_PARAMETERS.message);
        break;
        case messages.USERS_NOT_FOUND.message:
          res
            .status(messages.USERS_NOT_FOUND.status)
            .send(messages.USERS_NOT_FOUND.message);
          break;
      case messages.USER_EXISTS.message:
        res
          .status(messages.USER_EXISTS.status)
          .send(messages.USER_EXISTS.message);
        break;

      default:
        res
          .status(messages.SOME_ERROR.status)
          .send(messages.SOME_ERROR.message);
    }
  }
});

//Exercicio 7 
app.patch("/user/:id", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const  nameUser  = req.body.name as string
    const idUser = Number(req.params.id)

    if ( !userAuthorization || userAuthorization.toUpperCase() !== authorization)
    {
      throw new Error(messages.AUTHORIZATION_NOT_FOUND.message);
    }

    if (!nameUser || !idUser)
    {
      throw new Error(messages.MISSING_PARAMETERS.message);
    }

    const user = users.find((user) => user.id === idUser)

    if (!user) {
      throw new Error(messages.USERS_NOT_FOUND.message);
    }

    users.forEach((user)=>{
      if(user.name === nameUser){
        throw new Error(messages.USER_EXISTS.message)
      }
      if(user.id === idUser){
        user.name = nameUser
      }
      return user
    }
  )

    res.status(messages.CREATED.status).end()
  } catch (error: any) {
    switch (error.message) {
      case messages.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(messages.AUTHORIZATION_NOT_FOUND.status)
          .send(messages.AUTHORIZATION_NOT_FOUND.message);
        break;
      case messages.MISSING_PARAMETERS.message:
        res
          .status(messages.MISSING_PARAMETERS.status)
          .send(messages.MISSING_PARAMETERS.message);
        break;
        case messages.USERS_NOT_FOUND.message:
          res
            .status(messages.USERS_NOT_FOUND.status)
            .send(messages.USERS_NOT_FOUND.message);
          break;
      case messages.USER_EXISTS.message:
        res
          .status(messages.USER_EXISTS.status)
          .send(messages.USER_EXISTS.message);
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
      `Server is running in Exercicios APIS REST in http://localhost:${address.port}`
    );
  } else {
    console.error(`Failure upon starting server.`);
  }
});
