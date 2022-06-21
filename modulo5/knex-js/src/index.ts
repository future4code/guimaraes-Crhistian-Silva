import connection from "./connection";
import app from "./app"
import { Request, Response } from "express";

// Exercicio 1
//a) raw devolve um array de 2 posições, sendo a  1º o valor requisitado, e o 2º informações pertinentes ao banco de dados

//b) 

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `)

    return result [0][0]
}

searchActor("Tony Ramos")
.then(result => {
  console.log(result)
})
.catch(err => {
  console.log(err)
});

//c) 

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
  `);

    const count = result[0][0].count;
    return count
}

countActors("female")
.then(result => {
  console.log("resultado é ", result)
})
.catch(err => {
  console.log(err)
});

// Exercicio 2
//a)

const updateSalary = async (salary:number, id:string):Promise<void> =>{
await connection ("Actor")
.update({salary: salary,})
.where("id", id)
console.log("atualização funcionou")
};

updateSalary(2000000, "004")

//b) 

const delActor = async (id:string):Promise<void>=> {

  await connection("Actor")
  .delete()
  .where("id", id)
  console.log("Ator(Atriz) Deletado(a) com Sucesso")
}

delActor("003")

//c)

const avgSalaryByGender =  async(gender:string): Promise<any> =>{
  const result =  await connection("Actor")
  .avg("salary as average")
  .where({gender})
  console.log(`A média salarial do gênero ${gender} é ${result[0].average}`)
  return result[0].average  
}

avgSalaryByGender("male")

// Exercicio 3

//a) 
app.get("/actor/:id", async (req: Request, res: Response) :Promise<any> => {
  try {
    const id = req.params.id;
    const actor = await connection("Actor")
    .select("*") 
    .where("id", id)
    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//b)
app.get("/actor", async (req: Request, res: Response):Promise<any> => {
  try {
    const gender = req.query.gender
    const quantity = await connection ("Actor")
    .count("*", {as: "count"}) 
    .where("gender", `"${gender}"`)
    res.status(200).send(gender)
    
  } catch (error:any) {
    res.status(400).send({
      message: error.message,
    });
  }
})

//Exercício 4
const createActor = async (
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id:"007",
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into("Actor");
};

//a)
app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.gender
      
    );
    res.status(200).send("Ator Criado com Sucesso");
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

