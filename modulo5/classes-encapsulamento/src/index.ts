

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getCpf = ():string =>{
        return this.cpf
    }
    public getName = ():string =>{
        return this.name
    }
    public getAge = ():number =>{
        return this.age
    }
    public getTransactions = ():Transaction[] =>{
        return this.transactions
    }
    public setTransactions = (transaction:Transaction ):void => {
        this.transactions.push(transaction)
    }
  }

//a) Construtor é o que inicializa uma classe, chamar ===> constructor(){}

//b) 
const userAccount = new UserAccount("007.797.249-09", "crhistian silva", 39) //Foi impressa 1 vez 

//c) Deve-se criar métodos para conseguir acessar os atributos

//EXERCÍCIO 2


class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor( description: string, value: number, date:string){
        this.description = description,
        this.value = value,
        this.date = date
    }
    private getDescription = ():string =>{
        return this.description
    }
    public getValue = ():number =>{
        return this.value
    }
    public getDate = ():string =>{
        return this.date
    }
}

  const deposit = new Transaction("deposit", 1000, "12/07/2022")

  const payment = new Transaction("payment", 500, "12/07/2022")
  

  userAccount.setTransactions(deposit)
  userAccount.setTransactions(payment)

  //NÃO SEI PORQUE ESTÁ INDO O OBJETO Transaction INTEIRO PRA DENTRO DO PUSH, vou esperar a correção, não peguei bem esse conteúdo

console.log(userAccount.getTransactions())

  
  //EXERCÍCIO 3

  class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]){ 
        this.accounts = accounts}
  }

