import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { selectProducts } from "../functions/selectProducts";
import { handlleError } from "../functions/handlleError";

export const getProducts = async (req: Request, res: Response) => {

  try {
    let name = req.query.search as string
    let sort = req.query.sort as string  
    let order = req.query.order as string 
    
    if(sort? sort : "*")
    if(name? name: "*")
    if (order?.toUpperCase() !== "DESC" && order?.toUpperCase() !== "ASC") {
      order = "%";
    }
    
     const  products =  await selectProducts(name, sort, order)
     if(!products.length){
      throw new Error("NOT_FOUND_PRODUCT")
     }
      
    const newObject = 
      {
        products: products
      }
    res.status(messageStatus.SUCCESS.status).send(newObject);
  } catch (error: any) {
  handlleError(res, error);
  }
};
