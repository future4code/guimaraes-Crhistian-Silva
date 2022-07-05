import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { handlleError } from "../functions/handlleError";
import { selectUserPurchase } from "../functions/selectUserPurchase";

export const getUserPurchases = async (req: Request, res: Response) => {
  try {
    let array: any = [];
    let purchaseObject: any = {};
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
      array.push(purchaseObject);
      return array;
    });

    const newObjectPurchase = {
      name: purchasesUser[0].name,
      user: purchasesUser[0].email,
      purchases: array,
    };

    res.status(messageStatus.SUCCESS.status).send(newObjectPurchase);
  } catch (error: any) {
    handlleError(res, error, messageStatus);
  }
};
