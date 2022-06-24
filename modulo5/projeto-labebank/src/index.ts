import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";
import { usersLabebank, TRANSACTIONS, Account_Info, Users } from "./data";
import { messageStatus } from "./messages";
import { dateVerify } from "./functions/dateVerify";
import { now } from "moment";

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
    // Comparação  CPF no cadastroao
    const user = usersLabebank.find(
      (user) =>
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
    //verificação se falta algum dado enviado nos Parâmetros
    if (
      !userData.name ||
      !userData.cpf ||
      !userData.value ||
      !userData.description ||
      newDescription.toUpperCase() !== TRANSACTIONS.CREDIT
    ) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }

    const userFind = usersLabebank.find((user) =>{
      user.name.toUpperCase() === userData.name.toUpperCase() && user.cpf === userData.cpf
      return user
    });

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
        user.balance = user.balance; 
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
    //verificação se falta algum dado enviado nos Parâmetros
    if (
      !userData.name ||
      !userData.cpf ||
      !userData.value ||
      !userData.description ||
      newDescription !== TRANSACTIONS.DEBIT
    ) {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }

    if (!userData.date){
      const date = new Date()
      const neWDate = String(date.getDate()).padStart(2, "0") +
      "/" +
      String(date.getMonth() + 1).padStart(2, "0") +
      "/" +
      date.getFullYear();
      datePayment = neWDate
     }else if (userData.date){
      const date =  new Date().toISOString()
      const dateSplit = date.split('T')
      const compareDate = dateSplit[0]
      const compareDateSplit = compareDate.split('-')
      const datando = new Date(`${compareDateSplit[0]}-${compareDateSplit[1]}-${compareDateSplit[2]}`)
      const userDate = userData.date
      const [day, month, year] = userDate.split('/')
      const newUserDate = new Date(`${year}-${month}-${day}`)
      if(newUserDate < datando) {
        throw new Error(messageStatus.NOT_MODIFIED.message);
      } else {
       const newDate =  String(newUserDate.getDate()+1).padStart(2, "0") + "/" + String(newUserDate.getMonth() + 1).padStart(2, "0") + "/" + newUserDate.getFullYear();
        datePayment = newDate
      }
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

    const descriptionSent = TRANSACTIONS.TRANSFER_SENT;
    const descriptionReceiver = TRANSACTIONS.TRANSFER_RECEVEID;

    if (
      !userAuthorization ||
      userAuthorization.toUpperCase() !== ENUM_TYPE.NORMAL
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum dado enviado nos Parâmetros
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
            user.extract = [
              ...user.extract,
              {
                value: userDataTransfer.value,
                date: newDate,
                description: descriptionSent,
              },
            ];
            userReceiver.extract = [
              ...userReceiver.extract,
              {
                value: userDataTransfer.value,
                date: newDate,
                description: descriptionReceiver,
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

    if (
      !userAuthorization ||
      userAuthorization.toString().toUpperCase() !== ENUM_TYPE.NORMAL
    ) {
      throw new Error(messageStatus.FORBIDDEN.message);
    }

    let newArrayDatas: any = [];
    let smaller: boolean | undefined;
    
    const verifyDatePayment = (array: any): any => {
      for (let index = 0; index < array.length; index++) {
        const date =  new Date().toISOString()
        const dateSplit = date.split('T')
        const compareDate = dateSplit[0]
        const compareDateSplit = compareDate.split('-')
        const newDateSplit = new Date(`${compareDateSplit[0]}-${compareDateSplit[1]}-${compareDateSplit[2]}`)
        const [day, month, year] = array[index].split('/')
        const newUserDate = new Date(`${year}-${month}-${day}`)
        if(newUserDate < newDateSplit) {
          smaller = true
        } else {
          smaller = false
        }
    };
  }
    usersLabebank.forEach((user: any) => {
      for (let index = 0; index < user.extract.length; index++) {
        const element = user.extract[index].date;
        newArrayDatas.push(element);
        verifyDatePayment(newArrayDatas);
        if(smaller === true && (user.extract[index].description === "PAYMENT" || user.extract[index].description === "TRANSFER SENT")){
          const valuePay:number = user.extract[index].value    
          user.balance = Number(user.balance) - valuePay
        }if(smaller === true && user.extract[index].description === "TRANSFER RECEVEID"){
          const valuePay:number = user.extract[index].value    
          user.balance = Number(user.balance) + valuePay
        }
      }
    });
    res.status(messageStatus.SUCCESS.status).send(messageStatus.SUCCESS.message);
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
