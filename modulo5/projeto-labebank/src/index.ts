import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";
import { usersLabebank, TRANSACTIONS, Account_Info, Users } from "./data";
import { messageStatus } from "./messages";
import { dateVerify } from "./functions/dateVerify";

enum ENUM_TYPE {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

const app = express();
app.use(express.json());
app.use(cors());

//Para poder captar todos os usuários, criei uma variável para fqazer a verificação que obrigatoriamente deve ser enviada no Headers authorization, assim já elimina possibilidades de usuário enviar números

app.post("/user/create", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization;
    const userData: Users = req.body;

    if (
      !userAuthorization ||
      userAuthorization.toString().toUpperCase() !== ENUM_TYPE.NORMAL
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum dado no body da requisição tipada como Users
    if (!userData.name || !userData.cpf || !userData.birthdate) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }
    //Verificação de Maioridade para criar conta
    if (userData.birthdate) {
      const age = dateVerify(userData.birthdate);
      if (age < 18) {
        throw new Error(messageStatus.NOT_ALLOWED.message);
      }
    }
    // Comparação de nome e CPF no cadastro, se qualquer um dos dois paramêtros informados for igual ao que já existe no cadastro informa ao
    const user = usersLabebank.find(
      (user) =>
        user.name.toUpperCase() === String(userData.name).toUpperCase() ||
        user.cpf === userData.cpf
    );
    if (user) {
      throw new Error(messageStatus.USER_EXISTS.message);
    }
    const newUser: Account_Info = {
      id: generateId(),
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

app.get("/users", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    //FAZENDO A VERIFICAÇÃO SE É ADMIN PARA RECEBER TODOS OS USUÁRIOS
    if (
      !userAuthorization ||
      userAuthorization.toUpperCase() !== ENUM_TYPE.ADMIN
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
    const userAuthorization = req.headers.authorization as string;
    const userName = req.params.name as string;
    const userCpf = req.query.cpf as string;

    if (
      !userAuthorization ||
      userAuthorization.toUpperCase() !== ENUM_TYPE.NORMAL
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum enviado nos Parâmetros
    if (!userName || !userCpf) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }

    const user = usersLabebank.find(
      (user) =>
        user.name.toUpperCase() === userName.toUpperCase() &&
        user.cpf === userCpf
    );

    if (!user) {
      throw new Error(messageStatus.USERS_NOT_FOUND.message);
    }

    const balance = user.balance as number;

    const newBalance = balance.toFixed(2).split(".");
    newBalance[0] = newBalance[0].split(/(?=(?:...)*$)/).join(".");
    newBalance.join(",");

    res
      .status(messageStatus.SUCCESS.status)
      .send(`Seu Saldo é de R$ ${newBalance}`);
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

app.patch("/user/balance/credit/:name", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const userData = req.body;
    const newDescription = userData.description.toUpperCase();

    if (
      !userAuthorization ||
      userAuthorization.toUpperCase() !== ENUM_TYPE.NORMAL
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum enviado nos Parâmetros
    if (
      !userData.name ||
      !userData.cpf ||
      !userData.value ||
      !userData.description ||
      newDescription.toUpperCase() !== TRANSACTIONS.CREDIT
    ) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }

    const userFind = usersLabebank.find(
      (user) =>
        user.name.toUpperCase() === userData.name.toUpperCase() &&
        user.cpf === userData.cpf
    );

    if (!userFind) {
      throw new Error(messageStatus.USERS_NOT_FOUND.message);
    }
    //se data não for informada
    const date = new Date();
    const newDate =
      String(date.getDate()).padStart(2, "0") +
      "/" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "/" +
      date.getFullYear();
    usersLabebank.forEach((user: any) => {
      if (user.id === userFind.id) {
        user.balance = user.balance; /* + userData.value; */
        user.extract = [
          ...user.extract,
          { value: userData.value, date: newDate, description: newDescription },
        ];
      }
      return user;
    });

    res
      .status(messageStatus.SUCCESS.status)
      .send(messageStatus.SUCCESS.message);
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

app.put("/user/balance/payment/:name", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const userData = req.body;
    let datePayment: any;

    let newDescription = userData.description.toUpperCase();

    if (
      !userAuthorization ||
      userAuthorization.toUpperCase() !== ENUM_TYPE.NORMAL
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum enviado nos Parâmetros
    if (
      !userData.name ||
      !userData.cpf ||
      !userData.value ||
      !userData.description ||
      newDescription !== TRANSACTIONS.DEBIT
    ) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }

    if (!userData.date) {
      const date = new Date();
      const newDate =
        String(date.getDate()).padStart(2, "0") +
        "/" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "/" +
        date.getFullYear();
      const newDateTransform = newDate.split("/").join("/");
      datePayment = newDateTransform;
    }
    if (userData.date) {
      const date = new Date();
      const newDate =
        String(date.getDate()).padStart(2, "0") +
        "/" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "/" +
        date.getFullYear();
      const newDateTransform = newDate.split("/");

      const datePaymentSplit = userData.date.split("/");

      if (datePaymentSplit[2] < newDateTransform[2]) {
        throw new Error(messageStatus.NOT_MODIFIED.message);
      }
      if (
        datePaymentSplit[0] >= newDateTransform[0] &&
        datePaymentSplit[1] < newDateTransform[1] &&
        datePaymentSplit[2] === newDateTransform[2]
      ) {
        throw new Error(messageStatus.NOT_MODIFIED.message);
      }
      if (
        datePaymentSplit[0] < newDateTransform[0] &&
        datePaymentSplit[1] < newDateTransform[1] &&
        datePaymentSplit[2] < newDateTransform[2]
      ) {
        throw new Error(messageStatus.NOT_MODIFIED.message);
      }
      datePayment = userData.date;
    }

    const userFind = usersLabebank.find(
      (user) =>
        user.name.toUpperCase() === userData.name.toUpperCase() &&
        user.cpf === userData.cpf
    );

    if (!userFind) {
      throw new Error(messageStatus.NOT_FOUND.message);
    }

    if (userFind) {
      if (Number(userFind.balance) - Number(userData.value) < 0) {
        throw new Error(messageStatus.NO_CONTENT.message);
      } else {
        usersLabebank.forEach((user: any) => {
          if (user.id === userFind.id) {
            user.extract = [
              ...user.extract,
              {
                value: userData.value,
                date: datePayment,
                description: newDescription,
              },
            ];
          }
          return user;
        });
        res
          .status(messageStatus.SUCCESS.status)
          .send(messageStatus.SUCCESS.message);
        return;
      }
    }

    res
      .status(messageStatus.SUCCESS.status)
      .send(messageStatus.SUCCESS.message);
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
      case messageStatus.NOT_MODIFIED.message:
        res
          .status(messageStatus.NOT_MODIFIED.status)
          .send(messageStatus.NOT_MODIFIED.message);
        break;
      case messageStatus.NOT_FOUND.message:
        res
          .status(messageStatus.NOT_FOUND.status)
          .send(messageStatus.NOT_FOUND.message);
        break;
      case messageStatus.NO_CONTENT.message:
        res
          .status(messageStatus.NO_CONTENT.status)
          .send(messageStatus.NO_CONTENT.message);
        break;
      default:
        res
          .status(messageStatus.SOME_ERROR.status)
          .send(messageStatus.SOME_ERROR.message);
    }
  }
});

app.post("/user/transfer/:name", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;
    const userDataTransfer = req.body.userTransfer;
    const userDataReceiver = req.body.userReceiver;

    const newDescription = TRANSACTIONS.TRANSFER;

    if (
      !userAuthorization ||
      userAuthorization.toUpperCase() !== ENUM_TYPE.NORMAL
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum enviado nos Parâmetros
    if (
      !userDataTransfer.name ||
      !userDataTransfer.cpf ||
      !userDataTransfer.value ||
      !userDataReceiver.name ||
      !userDataReceiver.cpf
    ) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }

    if (userDataTransfer.date) {
      const date = dateVerify(userDataTransfer.date);
      if (date <= -1) {
        throw new Error(messageStatus.NOT_IMPLEMENTED.message);
      }
    }

    const userTransfer = usersLabebank.find(
      (user) =>
        user.name.toUpperCase() === userDataTransfer.name.toUpperCase() &&
        user.cpf === userDataTransfer.cpf
    );

    const userReceiver = usersLabebank.find(
      (user) =>
        user.name.toUpperCase() === userDataReceiver.name.toUpperCase() &&
        user.cpf === userDataReceiver.cpf
    );

    if (!userTransfer || !userReceiver) {
      throw new Error(messageStatus.NOT_FOUND.message);
    }

    if (userTransfer) {
      if (Number(userTransfer.balance) - Number(userDataTransfer.value) < 0) {
        throw new Error(messageStatus.NO_CONTENT.message);
      } else {
        const date = new Date();
        const newDate =
          String(date.getDate()).padStart(2, "0") +
          "/" +
          String(date.getMonth() + 1).padStart(2, "0") +
          "/" +
          date.getFullYear();
        usersLabebank.forEach((user: any) => {
          if (user.id === userTransfer.id) {
            /* user.balance = user.balance - userDataTransfer.value; */
            user.extract = [
              ...user.extract,
              {
                value: userDataTransfer.value,
                date: newDate,
                description: newDescription,
              },
            ];
            /* userReceiver.balance = userReceiver.balance + userDataTransfer.value; */
            userReceiver.extract = [
              ...userReceiver.extract,
              {
                value: userDataTransfer.value,
                date: newDate,
                description: newDescription,
              },
            ];
          }
          return user;
        });
        res
          .status(messageStatus.SUCCESS.status)
          .send(messageStatus.SUCCESS.message);
        return;
      }
    }

    res
      .status(messageStatus.SUCCESS.status)
      .send(messageStatus.SUCCESS.message);
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
      case messageStatus.NOT_IMPLEMENTED.message:
        res
          .status(messageStatus.NOT_IMPLEMENTED.status)
          .send(messageStatus.NOT_IMPLEMENTED.message);
        break;
      case messageStatus.NOT_FOUND.message:
        res
          .status(messageStatus.NOT_FOUND.status)
          .send(messageStatus.NOT_FOUND.message);
        break;
      case messageStatus.NO_CONTENT.message:
        res
          .status(messageStatus.NO_CONTENT.status)
          .send(messageStatus.NO_CONTENT.message);
        break;
      default:
        res
          .status(messageStatus.SOME_ERROR.status)
          .send(messageStatus.SOME_ERROR.message);
    }
  }
});
//DESAFIO PARA ATUALIZAR O SALDO
app.put("/user/update/balance", (req: Request, res: Response) => {
  try {
    const userAuthorization = req.headers.authorization as string;

    let dateUpdate: any;

    if (
      !userAuthorization ||
      userAuthorization.toString().toUpperCase() !== ENUM_TYPE.NORMAL
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }

    const day = new Date().getDate();
    const year = new Date().getFullYear();

    let newArrayDatas: any = [];

    usersLabebank.forEach((user: any) => {
      for (let index = 0; index < user.extract.length; index++) {
        const element = user.extract[index].date;
        newArrayDatas.push(element);
      }
    });

    const verifyDatePayment = (array: any): any => {
      const date = new Date();
      const newDate =
        String(date.getDate()).padStart(2, "0") +
        "/" +
        String(date.getMonth() + 1).padStart(2, "0") +
        "/" +
        date.getFullYear();
      const newDateTransform = newDate.split("/");
      for (let index = 0; index < array.length; index++) {
        const element = array[index].split("/");
        console.log("element", element);
        if (
          element[1] < newDateTransform[1] ||
          element[2] <= newDateTransform[2]
        ) {
          console.log("funcao funcionando");
        } else {
          console.log("funcao nao funcionando");
        }
      }
    };
    verifyDatePayment(newArrayDatas);
    res
      .status(messageStatus.SUCCESS.status)
      .send(messageStatus.SUCCESS.message);
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
      case messageStatus.NOT_MODIFIED.message:
        res
          .status(messageStatus.NOT_MODIFIED.status)
          .send(messageStatus.NOT_MODIFIED.message);
        break;
      case messageStatus.NOT_FOUND.message:
        res
          .status(messageStatus.NOT_FOUND.status)
          .send(messageStatus.NOT_FOUND.message);
        break;
      case messageStatus.NO_CONTENT.message:
        res
          .status(messageStatus.NO_CONTENT.status)
          .send(messageStatus.NO_CONTENT.message);
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
