import connection from "../connection";
const productsList = "labecommerce_products";

export const selectProducts = async (): Promise<any> => {
  const products = await connection.select("*").from(productsList);
  return products;
};
