import { createPurchase } from "./../functions/createPurchase";
import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { PURCHASE, PURCHASE_BODY } from "../types/types";
import { selectPriceById } from "../functions/selectPriceById";
import { selectUserById } from "../functions/selectUserById";
import { handlleError } from "../functions/handlleError";

export const postPurchases = async (req: Request, res: Response) => {
  try {
    const dataPurchase: PURCHASE_BODY = req.body;

    const idProduct = dataPurchase.productId;
    const idUser = dataPurchase.userId;
    const quantity = dataPurchase.quantity;

    if (!idUser || !idProduct || !quantity) {
      throw new Error("MISSING_PARAMETERS");
    }
    // AQUI VERIFICO SE O ID DE USUÁRIO ENVIADO, É VÁLIDO
    const user = await selectUserById(idUser);
    // AQUI VERIFICO SE O ID DE PRODUTO ENVIADO, É VÁLIDO

    const price = await selectPriceById(idProduct);

    const purchaseObject: PURCHASE = {
      id: generateId(),
      user_id: idUser,
      product_id: idProduct,
      quantity,
      total_price: quantity * price,
    };
    await createPurchase(purchaseObject);
    res
      .status(messageStatus.SUCCESS.status)
      .send(messageStatus.SUCCESS.message);
  } catch (error: any) {
    handlleError(res, error);
  }
};
