// exercicio 1
type Person = {
   id: string | number,
   name: string,
   email: string,
   password: string | number, // OU
   role: Role
} 

type AdminAccount = {
   account: string,
   permission: boolean
} 

type NormalAccount = {
   account: string,
   permission: boolean
}

// exercicio 2
//1
enum Role {
   ADMIN = "Admin",
   NORMAL = "Normal"
}
//2
type AdminInfo = Person & AdminAccount // AND
type NormalInfo = Person & NormalAccount
//3
type Users = AdminInfo[] & NormalInfo[]
//4
const userA: AdminInfo = {
   id: "123",
   name: "Tayanne", 
   email: "tayh@labenu.com.br", 
   password: "123", 
   role: Role.ADMIN,
   account: "nahanha",
   permission: true
}

const userB: NormalInfo = {
   id: "4567",
   name: "Karine", 
   email: "karine@labenu.com.br", 
   password: "456", 
   role: Role.NORMAL,
   account: "ga",
   permission: false
}

const users: Users = []
users.push(userA, userB)
console.log(users)


// PESQUISA COMPLEMENTAR:
// https://www.alura.com.br/artigos/javascript-ou-typescript
// LER DOCUMENTAÇAO TS
// PARADIGMAS DE PROGRAMAÇAO
   // ORIENTAÇAO A OBJETOS

