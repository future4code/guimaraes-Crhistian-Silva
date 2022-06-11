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
    //verificação se falta algum enviado nos Parâmetros
    if (!userName || !userCpf) 
    {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }

    const user = usersLabebank.find((user)=> user.name.toUpperCase() === userName.toUpperCase() && user.cpf === userCpf)

    if (!user) {
      throw new Error(messageStatus.USERS_NOT_FOUND.message);
    } 
    
    const balance = user.balance as number
    
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

app.patch("/user/balance/credit/:name", (req:Request, res:Response) =>{

  try {

    const userAuthorization = req.headers.authorization as string
    const userData = req.body
    let newDescription = userData.description.toUpperCase()


    if (!userAuthorization || userAuthorization.toUpperCase() !== authorization.toUpperCase() ) 
    {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum enviado nos Parâmetros
    if (!userData.name || !userData.cpf || !userData.value || ! userData.description || newDescription !== TRANSACTIONS.CREDIT ) 
    {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }
    
    const userFind = usersLabebank.find((user)=> user.name.toUpperCase() === userData.name.toUpperCase() && user.cpf === userData.cpf)

    if (!userFind) {
      throw new Error(messageStatus.USERS_NOT_FOUND.message);
    } 
const date = new Date();
const  newDate = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear(); 
usersLabebank.forEach((user:any)=>{
  if(user.userId === userFind.userId ){
    user.balance = user.balance + userData.value
    user.extract = [... user.extract, {value: userData.value,
    date: newDate,
  description: newDescription} ]
  }
  return user
})
 
res.status(messageStatus.SUCCESS.status).send(messageStatus.SUCCESS.message)
    
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

app.put("/user/balance/debit/:name", (req:Request, res:Response) =>{

  try {

    const userAuthorization = req.headers.authorization as string
    const userData = req.body
    let newDescription = userData.description.toUpperCase()

    if (!userAuthorization || userAuthorization.toUpperCase() !== authorization.toUpperCase() ) 
    {
      throw new Error(messageStatus.FORBIDDEN.message);
    }
    //verificação se falta algum enviado nos Parâmetros
    if (!userData.name || !userData.cpf || !userData.value || ! userData.description || newDescription !== TRANSACTIONS.DEBIT ) 
    {
      throw new Error(messageStatus.MISSING_PARAMETERS.message);
    }
    
    const userFind = usersLabebank.find((user)=> user.name.toUpperCase() === userData.name.toUpperCase() && user.cpf === userData.cpf)

    if (!userFind) 
    {
      throw new Error(messageStatus.NOT_FOUND.message);
    }

    if(userFind){
      if((Number(userFind.balance)- Number(userData.value)) < 0){

         throw new Error(messageStatus.NO_CONTENT.message);
      }else{
        const date = new Date();
        const  newDate = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear(); 
        usersLabebank.forEach((user:any)=>{
          if(user.userId === userFind.userId ){
            user.balance = user.balance - userData.value
            user.extract = [... user.extract, {value: userData.value,
            date: newDate,
          description: newDescription} ]
          }
          return user
        })        
        res.status(messageStatus.SUCCESS.status).send(messageStatus.SUCCESS.message)
        return
      }
    } 

 
res.status(messageStatus.SUCCESS.status).send(messageStatus.SUCCESS.message)
    
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
