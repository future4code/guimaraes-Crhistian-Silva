import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { selectProducts } from "../functions/selectProducts";
import { PRODUCT } from "../types/types";
import { handlleError } from "../functions/handlleError";

export const getProducts = async (req: Request, res: Response) => {
  try {
    let name = req.query.search as string;
    let sort = req.query.sort as string;
    let order = req.query.order as string | undefined;

    if (!name) {
      name = "%";
    }
    if (!sort) {
      sort = "name";
    }
    if (order?.toUpperCase() !== "DESC" && order?.toUpperCase() !== "ASC") {
      order = undefined;
    }

    const product: PRODUCT[] = await selectProducts(name, sort, order);
    if (!product.length) {
      throw new Error("NOT_FOUND_PRODUCT");
    }

    res.status(messageStatus.SUCCESS.status).send(product);
  } catch (error: any) {
    handlleError(res, error);
  }
};
