//EXERCÍCIO 1
class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(id: string, email: string, name: string, password: string) {
    console.log("Chamando o construtor da classe User");
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }
  //add exercício 4 e 5
  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia !`;
  }
}

const user1 = new User(
  `${Math.random()}`,
  "testeuser@live.com",
  "teste usuário",
  "123456"
);

//console.log(user1)
//a) apenas se fosse criado um novo método getPassword() dentro da classe User .

//b) uma vez

//EXERCÍCIO 2

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  //criada método para pegar o purchaseTotal
  public getPurchase(): number {
    return this.purchaseTotal;
  }
  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customer1 = new Customer(
  `${Math.random()}`,
  "testecustomer@live.com",
  "Teste Customer",
  "654321",
  " 5544-2545-9686-8795"
);
//console.log(customer1)

//a) uma vez

//b) duas vezes, porque a classe customer herda todas as informações da classe que foi desiginada como pai, no caso a classe user

//EXERCÍCIO 3
// crio um objeto para receber informações do customer

const dataInfoCustomer = {
  id: customer1.getId(),
  email: customer1.getEmail(),
  name: customer1.getName(),
  purchaseTotal: customer1.getPurchase(),
  creditCard: customer1.getCreditCard(),
};
console.log("infos customer1 ==>", dataInfoCustomer);

// não, porque na classe pai, ainda não existe um método para obter o password

console.log("message ==>", customer1.introduceYourself());

//DESAFIOS

//EXERCÍCIO 6
class Employee extends User {
  protected admissionDate: string;
  protected baseSalary: number;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissionDate: string,
    baseSalary: number
  ) {
    super(id, email, name, password);
    (this.admissionDate = admissionDate), (this.baseSalary = baseSalary);
  }
  getAdmissionDate(): string {
    return this.admissionDate;
  }
  getBaseSalary(): number {
    return this.baseSalary;
  } //Exercicio 7
  calculateTotalSalary(): number {
    return this.baseSalary + 400;
  }
}

const employee1 = new Employee(
  `${Math.random()}`,
  "employeeteste@live.com",
  " Employee Teste",
  " 152045",
  "05/08/2013",
  1085.0
);
console.log("employee1 ==>", employee1);

//EXERCÍCIO 7

//EXERCÍCIO 8

class Seller extends Employee{
  //Exercicio 9
  private salesQuantity:number = 0

  public getSalesQuantity(): number {
		return this.salesQuantity
	}

  public setSalesQuantity(newSale:number):void{
    this.salesQuantity += newSale
  } 
  
}

//a) id, email, name, password, admissiondate e basesalary

const seller1 = new Seller( `${Math.random()}`, "seller1@live.com" , "Seller1 Teste", " 0123seller", "14/08/2000", 1100 )
console.log(" id seller==> ", seller1.getId())
console.log(" email seller==> ", seller1.getEmail())
console.log(" name seller==> ", seller1.getName())
console.log(" admissionDate seller==> ", seller1.getAdmissionDate())
console.log(" salary seller==> ", seller1.getBaseSalary())

//b) id, email, name, password, admissiondate e basesalary.  ???


//EXERCÍCIO 9

//a)  
seller1.setSalesQuantity(2)
console.log("seller1 =>", seller1)

//EXERCÍCIO 10