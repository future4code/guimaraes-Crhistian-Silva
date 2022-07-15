// EXERCíCIO 1
export interface Client {
  name: string;
  // Refere-se ao nome do cliente

  registrationNumber: number;
  // Refere-se ao número de cadastro do cliente na concessionária
  // como se fosse um id

  consumedEnergy: number;
  // Refere-se à energia consumida pelo cliente no mês

  calculateBill(): number;
  // Retorna o valor da conta em reais
}
const client1: Client = {
  name: "Teste Interface",
  registrationNumber: Math.random(),
  consumedEnergy: 200,
  calculateBill: () => {
    return 2;
  },
};

console.log(client1);
//a) imprimir 3 propriedades, não foi possivel imprimir calculateBill

// EXERCíCIO 2
export abstract class Place {
  constructor(protected cep: string) {}

  public getCep(): string {
    return this.cep;
  }
}

// const newPlace = new Place(" 85869-520")
// console.log("newPlace =>" newPlace)

// EXERCíCIO 3
export class Residence extends Place {
  constructor(
    protected residentsQuantity: number,
    // Refere-se ao número de moradores da casa

    cep: string
  ) {
    super(cep);
  }
  public getResidents(): number {
    return this.residentsQuantity;
  }
}
export class Commerce extends Place {
  constructor(
    protected floorsQuantity: number,
    // Refere-se à quantidade de andares do lugar

    cep: string
  ) {
    super(cep);
  }
  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }
}

export class Industry extends Place {
  constructor(
    protected machinesQuantity: number,
    // Refere-se à quantidade de máquinas do local
    cep: string
  ) {
    super(cep);
  }
  public getMachines(): number {
    return this.machinesQuantity;
  }
}
// ########## LEMBRAR  --->  para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última. ##########

const residence1 = new Residence(2, "85851-000");
const commerce1 = new Commerce(4, "85855-210");
const industry1 = new Industry(10, "85853-970");

console.log(" cep residence1 =>", residence1.getCep());
console.log(" cep commerce1 =>", commerce1.getCep());
console.log(" cep industry1 =>", industry1.getCep());

console.log(" cep residence1 =>", residence1.getResidents());

// EXERCíCIO 4

export class ResidentialClient extends Residence implements Client {
  constructor(
    private cpf: string,
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    cep: string,
    residentsQuantity: number
  ) {
    super(residentsQuantity, cep);
  }
  public getCpf(): string {
    return this.cpf;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}
const residencicalClient1 = new ResidentialClient(
  " 015.249.245-10",
  "ResidentialClient teste",
  100,
  200,
  "01510-970",
  3
);
1;
console.table(residencicalClient1);

// EXERCíCIO 5

export class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
  public getCnpj(): string {
    return this.cnpj;
  }
}
const commercialClient1 = new CommercialClient("CommercialClient Teste", 1005, 200, "001.155.290/0003-15", 10, "02385-870")
console.table(commercialClient1)
// a) as propriedas name, registrationNumber, consumedEnergy, cep e a funcao calculateBill estão presentes nas duas classes

//b) 

// EXERCíCIO 6

export class IndustrialClient extends Industry implements Client{
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryRegister: string,
        machinesQuantity: number,
        cep: string

      ) {
        super(machinesQuantity, cep);
      }
      public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.machinesQuantity * 100
      }
      public getIndustryRegister(): string{
        return this.industryRegister
      }
}

const industrialClient1 = new IndustrialClient("IndustrialClient Teste", 200105, 400, "001.105.102/0001-25", 10, "01524-970")
console.table(industrialClient1)
