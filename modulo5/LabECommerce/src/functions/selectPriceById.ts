import connection from "../connection";
const productsList = "labecommerce_products";

export const selectPriceById = async (idProduct: string): Promise<number> => {
  const price = await connection
    .select("price")
    .from(productsList)
    .where("id", idProduct);
  if (!price[0]) {
    throw new Error("NOT_FOUND_PRODUCT");
  }
  return Number(price[0].price);
};
