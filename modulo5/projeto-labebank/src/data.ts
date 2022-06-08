import { AccountInfo } from "." 
import { v4 as generateId } from 'uuid';


export const usersLabebank: AccountInfo[]= [
    {
        userId: generateId(),
        name: "crhistian silva",
        cpf: "007.797.249-09",
        birthdate: "19/06/1983",
        balance: 0,
        extract: []
      },
      {
        userId: generateId(),
        name: "maria silva",
        cpf: "007.797.249-10",
        birthdate: "19/06/1984",
        balance: 0,
        extract: []
      },
      {
        userId: generateId(),
        name: "paulo silva",
        cpf: "007.797.249-11",
        birthdate: "19/06/1985",
        balance: 0,
        extract: []
      },
      {
        userId: generateId(),
        name: "joao silva",
        cpf: "007.797.249-12",
        birthdate: "19/06/1986",
        balance: 0,
        extract: []
      },
      {
        userId: generateId(),
        name: "patricia silva",
        cpf: "007.797.249-13",
        birthdate: "19/06/1987",
        balance: 0,
        extract: []
      },
]