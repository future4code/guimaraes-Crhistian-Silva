import express, { Request, Response }  from "express";
import cors from "cors"
import { v4 as generateId } from 'uuid';
import { usersLabebank } from "./data";


import { AddressInfo } from "net";

const app = express();

app.use(express.json());
app.use(cors())


type Users = {
  name: string,
  cpf: string | number
  birthdayDate: string | number
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
  res.status(200).send(usersLabebank)
})


console.log("hello world")





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running OK in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;