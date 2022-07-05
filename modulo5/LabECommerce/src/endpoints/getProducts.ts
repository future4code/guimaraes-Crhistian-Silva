import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { selectProducts } from "../functions/selectProducts";
import { handlleError } from "../functions/handlleError";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await selectProducts();
    if (!products) {
      throw new Error("NOT_FOUND");
    }
    const newObject = 
      {
        products: products

      }
    res.status(messageStatus.SUCCESS.status).send(newObject);
  } catch (error: any) {
    handlleError(res, error, messageStatus);
  }
};
