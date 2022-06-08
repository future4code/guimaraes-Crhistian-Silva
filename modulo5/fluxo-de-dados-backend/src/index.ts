import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";
import { products } from "./data";
import { errors, successMessages } from "./messages";

const app = express();

app.use(express.json());
app.use(cors());

const autorization = "autorizado";

//Exercício 1
app.get("/test", (req: Request, res: Response) => {
  res.status(successMessages.success.status).send("Api Produtos funcionando");
});

//Exercício 2
const arrayProducts = products;

//Exercício 3

app.post("/product/create", (req: Request, res: Response) => {
  try {

    const idUser = req.headers.authorization;

    const { name, price } = req.body;

    if (!idUser || idUser !== autorization) {
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
    const idUser = req.headers.authorization;

    if (!idUser || idUser !== autorization) {
      throw new Error(errors.AUTHORIZATION_NOT_FOUND.message);
    }

    if(!products){
     throw new Error(errors.PRODUCT_NOT_FOUND.message)
    }
    res.status(successMessages.success.status).send(products)


  } catch (error:any) {
    switch (error.message) {
      case errors.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(errors.AUTHORIZATION_NOT_FOUND.status)
          .send(errors.AUTHORIZATION_NOT_FOUND.message);
        break;
      case errors.PRODUCT_NOT_FOUND.message:
        res
          .status(errors.PRODUCT_NOT_FOUND.status)
          .send(errors.PRODUCT_NOT_FOUND.message);
        break;
        default:
          res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
        }
      }
    });

//Exercício 5
app.put("/product/edit/", ( req: Request, res: Response)=>{
  try{

    const idUser = req.headers.authorization;

    if (!idUser || idUser !== autorization) {
      throw new Error(errors.AUTHORIZATION_NOT_FOUND.message);
    }

    const idProduct = req.query.id

    const {price } = req.body;

    if (!idProduct) {
      throw new Error(errors.NOT_ALLOWED.message);
    }

    if (!price || price <= 0 || typeof price !== "number") {
      throw new Error(errors.MISSING_PARAMETERS.message);
    }

    const product = products.find(prod=> prod.id === idProduct)

    if (!product) {
      throw new Error(errors.PRODUCT_NOT_FOUND.message)
      }

     products.forEach((prod)=>{
        if(prod.id === idProduct){
          prod.name = "tinta preta editada",
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
        case errors.NOT_ALLOWED.message:
          res
            .status(errors.NOT_ALLOWED.status)
            .send(errors.NOT_ALLOWED.message);
          break;
      case errors.MISSING_PARAMETERS.message:
        res
          .status(errors.MISSING_PARAMETERS.status)
          .send(errors.MISSING_PARAMETERS.message);
        break;
        case errors.PRODUCT_NOT_FOUND.message:
          res
            .status(errors.PRODUCT_NOT_FOUND.status)
            .send(errors.PRODUCT_NOT_FOUND.message);
          break;
      default:
      res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
    }
  }
})

//Exercício 6

app.delete('/product/delete/', (req: Request, res: Response) => {
  try {

    const idUser = req.headers.authorization;

    const idProduct = req.query.id

    if (!idUser || idUser !== autorization) {
      throw new Error(errors.AUTHORIZATION_NOT_FOUND.message);
    }

    if (!idProduct) {
      throw new Error(errors.NOT_ALLOWED.message);
    }
    const product = products.find(prod=> prod.id === idProduct)

    if (!product) {
      throw new Error(errors.PRODUCT_NOT_FOUND.message)
      }

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === idProduct) {
        products.splice(i, 1);
      }
    }

/*     products.forEach((prod, i)=>{
      if(prod.id === idProduct){
        products.splice(i, 1)
      }
    }) */
    
      res.status(200).send(products)

    }catch (error: any) {
 switch (error.message) {
      case errors.AUTHORIZATION_NOT_FOUND.message:
        res
          .status(errors.AUTHORIZATION_NOT_FOUND.status)
          .send(errors.AUTHORIZATION_NOT_FOUND.message);
        break;
        case errors.NOT_ALLOWED.message:
          res
            .status(errors.NOT_ALLOWED.status)
            .send(errors.NOT_ALLOWED.message);
          break;
        case errors.PRODUCT_NOT_FOUND.message:
          res
            .status(errors.PRODUCT_NOT_FOUND.status)
            .send(errors.PRODUCT_NOT_FOUND.message);
          break;
      default:
      res.status(errors.SOME_ERROR.status).send(errors.SOME_ERROR.message)
    }
  }
})


  //Exercicio 7

  app.post("/product/createRefactored", (req: Request, res: Response) => {
    try {
  // como se trata da criação de um produto não previso verificar o id...apenas o nome pra ver se o produto já existe 
   const {name, price} = req.body

      if (!name || !price || price <= 0 ) {
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
