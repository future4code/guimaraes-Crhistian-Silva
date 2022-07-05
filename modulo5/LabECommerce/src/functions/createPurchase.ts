import connection from "../connection";
import { PURCHASE } from "../types/types";
const productsList = "labecommerce_purchases";

export const createPurchase = async (purchase: PURCHASE): Promise<void> => {
  await connection(productsList).insert(purchase).into(productsList);
};
