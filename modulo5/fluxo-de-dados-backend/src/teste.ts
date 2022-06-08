import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";
import { products } from "./data";
import { errors, successMessages } from "./messages";

const app = express();

app.use(express.json());
app.use(cors());

//Exercício 1
app.get("/test", (req: Request, res: Response) => {
  res.status(successMessages.success.status).send("Api Produtos funcionando");
});

//Exercício 2
const arrayProducts = products;

//Exercício 3

app.post("/product/create", (req: Request, res: Response) => {
  try {
    const idProduct = req.headers.authorization;
    const { name, price } = req.body;

    if (!idProduct) {
      throw new Error(errors.AUTHORIZATION_NOT_FOUND.message);
    }

    if (!name || !price) {
      throw new Error(errors.MISSING_PARAMETERS.message);
    }

    const productName = products.find((prod) => {
      if (prod.name === name) {
        throw new Error(errors.PRODUCT_EXISTS.message);
      }
    });

    if (productName) {
      throw new Error(errors.PRODUCT_EXISTS.message);
    }
    products.push({
      id: generateId(),
      name,
      price,
    });
    res.status(successMessages.created.status).send(successMessages.created.message);
  } catch (error: any) {
    switch (error.message) {
      case errors.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(errors.AUTHORIZATION_NOT_FOUND.status)
          .send(errors.AUTHORIZATION_NOT_FOUND.message);
        break;
      case errors.MISSING_PARAMETERS.message:
        res
          .status(errors.MISSING_PARAMETERS.status)
          .send(errors.MISSING_PARAMETERS.message);
        break;
      case errors.PRODUCT_EXISTS.message:
        res
          .status(errors.PRODUCT_EXISTS.status)
          .send(errors.PRODUCT_EXISTS.message);
        break;
      default:
      res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
    }
  }
});

//Exercício 4
app.get("/products", (req: Request, res: Response) => {
  try {
    //como nao tem nenhuma chave, não vi a necessidade de pedir algum parâmetro
    if(!products){
     throw new Error(errors.SOME_ERROR.message)
    }
    res.status(successMessages.success.status).send(products)


  } catch (error) {
    res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
  }
});

//Exercício 5
app.put("/product/edit/:id", ( req: Request, res: Response)=>{
  try{
    const idProduct = req.params.id

    const {price } = req.body;

    if (!idProduct) {
      throw new Error(errors.AUTHORIZATION_NOT_FOUND.message);
    }

    if (!price) {
      throw new Error(errors.MISSING_PARAMETERS.message);
    }

    const product = products.find(prod=> prod.id === idProduct)

    if (!product) {
      throw new Error(errors.AUTHORIZATION_NOT_FOUND.message)
      }

     products.forEach((prod)=>{
        if(prod.id === idProduct){
               prod.price = price
        }
        return prod
      }
    )
    
res.status(201).send(products)

  }catch (error: any) {
    switch (error.message) {
      case errors.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(errors.AUTHORIZATION_NOT_FOUND.status)
          .send(errors.AUTHORIZATION_NOT_FOUND.message);
        break;
      case errors.MISSING_PARAMETERS.message:
        res
          .status(errors.MISSING_PARAMETERS.status)
          .send(errors.MISSING_PARAMETERS.message);
        break;
      default:
      res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
    }
  }
})

//Exercício 6

app.delete('/product/:id', (req: Request, res: Response) => {
  try {

    const idProduct = req.params.id

products.forEach((product)=>{
  product.map((prod:any)=>{
    if()
  })
})
      res.status(200).send(products)

  }
  catch (error) {
      res.status(400).end("Playlist não encontrada, por favor verifique o id")
  }
})





const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(
      `Server is running in fluxo-de-dados  http://localhost:${address.port}`
    );
  } else {
    console.error(`Failure upon starting server.`);
  }
});
