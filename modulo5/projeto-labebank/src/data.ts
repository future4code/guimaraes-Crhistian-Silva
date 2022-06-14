import { v4 as generateId } from 'uuid';

export enum TRANSACTIONS {
  DEBIT = "PAYMENT",
  CREDIT = "DEPOSIT MONEY",
  TRANSFER_SENT ="TRANSFER SENT",
  TRANSFER_RECEVEID = "TRANSFER RECEVEID"
}


export type Users = {
  name: string;
  cpf: string | number;
  birthdate: string | number;
};

type Transactions = {
  value: number;
  date: string;
  description: TRANSACTIONS 
}

type Account = {
  id: string;
  balance: string | number;
  extract: Transactions[];
};

export type Account_Info = Users & Account;

export const usersLabebank: Account_Info[]= [
    {
        id: generateId(),
        name: "crhistian silva",
        cpf: "007.797.249-09",
        birthdate: "19/06/1983",
        balance: 10000.00,
        extract:[
          {
          value: 200,
          date: "02/03/2022",
          description: TRANSACTIONS.CREDIT
        },{
          
        value: 1000,
        date: "02/05/2022",
        description: TRANSACTIONS.TRANSFER_SENT,
      },        
    ]
    },
      {
        id: generateId(),
        name: "maria silva",
        cpf: "007.797.249-10",
        birthdate: "19/06/1984",
        balance: 2000,
        extract:[
          {
          value: 110,
          date: "15/01/2021",
          description: TRANSACTIONS.DEBIT
        },{
          value: 5000,
          date: "02/05/2022",
          description: TRANSACTIONS.CREDIT
        },{      
        value: 1000,
        date: "02/05/2022",
        description: TRANSACTIONS.TRANSFER_RECEVEID,
      },        
    ]
      },
      {
        id: generateId(),
        name: "paulo silva",
        cpf: "007.797.249-11",
        birthdate: "19/06/1985",
        balance: - 1500,
        extract:[
          {
          value: 180,
          date: "19/02/2022",
          description: TRANSACTIONS.DEBIT
        },{
          value: 200,
          date: "07/05/2022",
          description: TRANSACTIONS.DEBIT
        },{
          
        value: 3780,
        date: "14/04/2022",
        description: TRANSACTIONS.DEBIT,
      },        
    ]
      },
      {
        id: generateId(),
        name: "joao silva",
        cpf: "007.797.249-12",
        birthdate: "19/06/1986",
        balance: 300,
        extract: [
          {
            value: 110,
            date: "07/05/2022",
            description: TRANSACTIONS.DEBIT
          },{
            
          value: 222,
          date: "14/03/2022",
          description: TRANSACTIONS.DEBIT,
        }, 
        ]
      },
      {
        id: generateId(),
        name: "patricia silva",
        cpf: "007.797.249-13",
        birthdate: "19/06/1987",
        balance: 1,
        extract: [
          {
            value: 179,
            date: "07/05/2022",
            description: TRANSACTIONS.CREDIT
          },{
            
          value: 178,
          date: "08/05/2022",
          description: TRANSACTIONS.DEBIT,
        }, 
        ]
      },
]