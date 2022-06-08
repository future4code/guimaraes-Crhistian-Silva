import express, { Request, Response }  from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { v4 as generateId } from 'uuid';
import { usersLabebank } from "./data";
import { messageStatus } from "./messages";
import {birthVerify} from "./birthVerify"

const app = express();
app.use(express.json());
app.use(cors())

//Para poder captar todos os usuários, criei uma variável para fqazer a verificação que obrigatoriamente deve ser enviada no Headers authorization, assim já elimina possibilidades de usuário enviar números 
const authorization = "userAllowed"

type Users = {
  name: string,
  cpf: string | number
  birthdate: string | number
}

type Transactions = {
  value: number,
  date: string,
  description: string
}

type Account = {
  userId: string,
  balance: number,
  extract: Transactions []
}

export type AccountInfo = Users & Account 

app.get("/users", (req: Request, res: Response) => {
    
 try {
   const userAuthorization = req.headers.authorization

   if(!userAuthorization || userAuthorization.toString().toLocaleLowerCase() !== authorization.toLowerCase()){
     throw new Error(messageStatus.FORBIDDEN.message)
   }

 if(usersLabebank.length <= 0){
    throw new Error(messageStatus.NOT_FOUND.message)
  }
   res.status(messageStatus.SUCCESS.status).send(usersLabebank)

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
      res.status(messageStatus.SOME_ERROR.status).send(messageStatus.SOME_ERROR.message)
    }
  }
});
//criado um objeto que recebe os dados

app.post("/users/create", (req: Request, res: Response)=>{
    
  try {
    const userAuthorization = req.headers.authorization
    const UsersData:Users = req.body

    console.log("user recebido via body", UsersData)
 
    if(!userAuthorization || userAuthorization.toString().toLocaleLowerCase() !== authorization.toLowerCase()){
      throw new Error(messageStatus.FORBIDDEN.message)
    }
 //verificação se falta algum dado no body da requisição tipada como Users
    if(!UsersData.name|| !UsersData.cpf|| !UsersData.birthdate){
      throw new Error(messageStatus.MISSING_PARAMETERS.message)
    }


    res.status(messageStatus.CREATED.status).send(messageStatus.CREATED.message)
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
       default:
       res.status(messageStatus.SOME_ERROR.status).send(messageStatus.SOME_ERROR.message)
     }
   }
 });

 console.log(birthVerify('31/12/1970'));

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running OK in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;