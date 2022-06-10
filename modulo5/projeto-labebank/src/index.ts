import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";
import { usersLabebank, TRANSACTIONS } from "./data";
import { messageStatus } from "./messages";
import { birthVerify } from "./birthVerify";

const app = express();
app.use(express.json());
app.use(cors());

//Para poder captar todos os usuários, criei uma variável para fqazer a verificação que obrigatoriamente deve ser enviada no Headers authorization, assim já elimina possibilidades de usuário enviar números
const authorization = "USERALLOWED";

type Users = {
  name: string;
  cpf: string | number;
  birthdate: string | number;
};

type Transactions = {
  value: number;
  date: string;
  description: TRANSACTIONS;
};

type Account = {
  userId: string;
  balance: string | number;
  extract: Transactions[];
};

export type AccountInfo = Users & Account;

app.post("/user/create", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization;
    const userData: Users = req.body;

    if (
      !userAuthorization ||
      userAuthorization.toString().toLocaleLowerCase() !==
        authorization.toLowerCase()
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum dado no body da requisição tipada como Users
    if (!userData.name || !userData.cpf || !userData.birthdate) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }
    //Verificação de Maioridade para criar conta
    if (userData.birthdate) {
      const age = birthVerify(userData.birthdate);
      if (age < 18) {
        throw new Error(messageStatus.NOT_ALLOWED.message);
      }
    }
    // Comparação de nome e CPF no cadastro, se qualquer um dos dois param~etros informados for igual ao que já existe no cadastro informa ao
    const user = usersLabebank.find(
      (user) =>
        user.name.toUpperCase() === String(userData.name).toUpperCase() ||
        user.cpf === userData.cpf
    );
    if (user) {
      throw new Error(messageStatus.USER_EXISTS.message);
    }
    const newUser: AccountInfo = {
      userId: generateId(),
      name: userData.name,
      cpf: userData.cpf,
      birthdate: userData.birthdate,
      balance: 0,
      extract: [],
    };
    usersLabebank.push(newUser);

    res
      .status(messageStatus.CREATED.status)
      .send(messageStatus.CREATED.message);
  } catch (error: any) {
    switch (error.message) {
      case messageStatus.FORBIDDEN.message:
        res
          .status(messageStatus.FORBIDDEN.status)
          .send(messageStatus.FORBIDDEN.message);
        break;
      case messageStatus.MISSING_PARAMETERS.message:
        res
          .status(messageStatus.MISSING_PARAMETERS.status)
          .send(messageStatus.MISSING_PARAMETERS.message);
        break;
      case messageStatus.NOT_ALLOWED.message:
        res
          .status(messageStatus.NOT_ALLOWED.status)
          .send(messageStatus.NOT_ALLOWED.message);
        break;
      case messageStatus.USER_EXISTS.message:
        res
          .status(messageStatus.USER_EXISTS.status)
          .send(messageStatus.USER_EXISTS.message);
        break;
      default:
        res
          .status(messageStatus.SOME_ERROR.status)
          .send(messageStatus.SOME_ERROR.message);
    }
  }
});

//criado um Array que recebe os dados
app.get("/users", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;

    if (
      !userAuthorization ||
      userAuthorization.toString().toUpperCase() !== authorization.toUpperCase()
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }

    if (usersLabebank.length <= 0) {
      throw new Error(messageStatus.NOT_FOUND.message);
    }
    res.status(messageStatus.SUCCESS.status).send(usersLabebank);
  } catch (error: any) {
    switch (error.message) {
      case messageStatus.FORBIDDEN.message:
        res
          .status(messageStatus.FORBIDDEN.status)
          .send(messageStatus.FORBIDDEN.message);
        break;
      case messageStatus.NOT_FOUND.message:
        res
          .status(messageStatus.NOT_FOUND.status)
          .send(messageStatus.NOT_FOUND.message);
        break;
      default:
        res
          .status(messageStatus.SOME_ERROR.status)
          .send(messageStatus.SOME_ERROR.message);
    }
  }
});

app.get("/user/balance/:name", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string
    const userName = req.params.name as string
    const userCpf = req.query.cpf as string

    if (!userAuthorization || userAuthorization.toUpperCase() !== authorization.toUpperCase()) 
    {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum dado no body da requisição tipada como Users
    if (!userName || !userCpf) 
    {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }

    const user = usersLabebank.find((user)=> user.name.toUpperCase() === userName.toUpperCase() && user.cpf === userCpf)

    if (!user) {
      throw new Error(messageStatus.USERS_NOT_FOUND.message);
    } 
    
    const  balance = user.balance as number
    
    const newBalance = balance.toFixed(2).split(".")
    newBalance[0] = newBalance[0].split(/(?=(?:...)*$)/).join(".")
    newBalance.join(",")
    
    res.status(messageStatus.SUCCESS.status).send(`Seu Saldo é de R$ ${newBalance}`)

  } catch (error: any) {
    switch (error.message) {
      case messageStatus.FORBIDDEN.message:
        res
          .status(messageStatus.FORBIDDEN.status)
          .send(messageStatus.FORBIDDEN.message);
        break;
        case messageStatus.MISSING_PARAMETERS.message:
          res
            .status(messageStatus.MISSING_PARAMETERS.status)
            .send(messageStatus.MISSING_PARAMETERS.message);
          break;
      case messageStatus.NOT_FOUND.message:
        res
          .status(messageStatus.NOT_FOUND.status)
          .send(messageStatus.NOT_FOUND.message);
        break;
      default:
        res
          .status(messageStatus.SOME_ERROR.status)
          .send(messageStatus.SOME_ERROR.message);
    }
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running OK in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
