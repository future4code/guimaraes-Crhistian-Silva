import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";

// Exercicio 1
//a) raw devolve um array de 2 posições, sendo a  1º o valor requisitado, e o 2º informações pertinentes ao banco de dados

//b)

const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `);

  return result[0][0];
};

searchActor("Tony Ramos")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//c)

const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
  `);

  const count = result[0][0].count;
  return count;
};

countActors("female")
  .then((result) => {
    console.log("resultado é ", result);
  })
  .catch((err) => {
    console.log(err);
  });

// Exercicio 2
//a)

const updateSalary = async (salary: number, id: string): Promise<void> => {
  await connection("Actor").update({ salary: salary }).where("id", id);
  console.log("atualização funcionou");
};

updateSalary(2000000, "004");

//b)

const delActor = async (id: string): Promise<void> => {
  await connection("Actor").delete().where("id", id);
  console.log("Ator(Atriz) Deletado(a) com Sucesso");
};

delActor("003");

//c)

const avgSalaryByGender = async (gender: string): Promise<any> => {
  const result: any = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  const newResult = result[0].average.toFixed(2).split(".");
  newResult[0] = newResult[0].split(/(?=(?:...)*$)/).join(".");
  newResult.join(",");

  console.log(`A média salarial do gênero ${gender} é R$ ${newResult}`);
  return result[0].average;
};

avgSalaryByGender("male");

// Exercicio 3

//a)
app.get("/actor/:id", async (req: Request, res: Response): Promise<any> => {
  try {
    const id = req.params.id;
    const actor = await connection("Actor").select("*").where("id", id);
    res.status(200).send(actor);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//b)
app.get("/actor", async (req: Request, res: Response): Promise<any> => {
  try {
    const gender = req.query.gender;
    const quantity = await connection("Actor")
      .count("*", { as: "count" })
      .where("gender", `${gender}`);
    console.log(" A quantidade é ", quantity[0].count);
    res.status(200).send(gender);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

//Exercício 4
const createActor = async (
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: "007",
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
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//DESAFIOS
//EXERCICIO 5

const createMovie = async (
  title: string,
  synopsis: number,
  release_date: Date,
  rating: number,
  playing_limit_date: Date

): Promise<void> => {
  await connection
    .insert({
      id: "010",
      title: title,
      synopsis: synopsis,
      release_date: release_date,
      rating: rating,
      playing_limit_date: playing_limit_date,
    })
    .into("Movies");
};


app.post("/movie", async (req: Request, res: Response) => {
  try {
   await createMovie(
      req.body.title,
      req.body.synopsis,
      req.body.release_date,
      req.body.rating,
      req.body.playing_limit_date
    );
    res.status(200).send("Filme Criado com Sucesso");
  } catch (error: any) {
    res.status(500).send({
      message: error.message,
    });
  }
});

type Movie = {
  id: number,
  title: string,
  synopsis: string,
  release_date: Date,
  rating: number,
  playing_limit_date: Date
};
 const createMovie2 = async (body: Movie): Promise<void> => {
  await connection
    .insert(
      body
    )
    .into("Movies");
}; 

//================================================//
//MÉTODO TIPADO //
app.post("/movie/tipado", async (req: Request, res: Response) => {
  try {
    const {title,synopsis,release_date, rating,  playing_limit_date } = req.body

   await createMovie2({
    id: Math.random(),
    title,
    synopsis,
    release_date,
    rating,  
    playing_limit_date
  });
    res.status(200).send("Filme Criado com Sucesso");
  } catch (error: any) {
    res.status(500).send({
      message: error.message,
    });
  }
});

//Exercicio 6

app.get("/movie/all", async (req: Request, res: Response): Promise<any> => {
  try {
    const movies = await connection("Movies")
      .select("*") 
      .limit (15)
    res.status(200).send(movies);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});

//Exercicio 7

app.get("/movie/search", async (req: Request, res: Response): Promise<any> => {
  try {
    const searchString = String(req.query.search)
    
    const movies = await connection("Movies")
    .select("*")
    .whereILike("title", `%${searchString}%`)
    .orWhereILike("synopsis",  `%${searchString}%`)
    .orderBy("release_date", "asc")

    res.status(200).send(movies);
  } catch (error: any) {
    res.status(400).send({
      message: error.message,
    });
  }
});