import { PRODUCT_BODY } from "./../types/types";
import connection from "../connection";
const productsList = "labecommerce_products";

export const createProduct = async (prod: PRODUCT_BODY): Promise<void> => {
  const userData = await connection(productsList);

  if (userData.length !== 0) {
    userData.forEach((p: any) => {
      if (p.name === prod.name) {
        throw new Error("ALREADY_EXISTS");
      }
      return userData;
    });
  }
  await connection(productsList).insert(prod).into(productsList);
};
