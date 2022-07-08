import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { selectUserPurchase } from "../functions/selectUserPurchase";
import { PURCHASE_USER } from "../types/types";
import { handlleError } from "../functions/handlleError";

export const getUserPurchases = async (req: Request, res: Response) => {
  try {
    let arrayPurchase: PURCHASE_USER[] = [];
    let purchaseObject: PURCHASE_USER;
    const idUser = req.params.userId;
    const purchasesUser = await selectUserPurchase(idUser);

    if (!purchasesUser) {
      throw new Error("NOT_FOUND");
    }
    if (purchasesUser.length < 1) {
      throw new Error("NOT_FOUND");
    }
    //AQUI CRIO UM OBJETO COM OS PRODUTOS PARA CADA COMPRA REALIZADA
    purchasesUser.forEach((user: any) => {
      purchaseObject = {
        product: user.name_product,
        quantity: user.quantity,
        TotalPrice: user.total_price,
      };
      arrayPurchase.push(purchaseObject);
      return arrayPurchase;
    });

    const newObjectPurchase = {
      purchases: arrayPurchase,
    };

    res.status(messageStatus.SUCCESS.status).send(newObjectPurchase);
  } catch (error: any) {
    handlleError(res, error);
  }
};
