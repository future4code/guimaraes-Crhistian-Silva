import connection from "../connection";
const productsList = "labecommerce_products";

export const selectProducts = (name:string, sort:string, order:string): Promise<any> => {
  return  connection
  .select("name")
  .where("name", name)
  .from(productsList);
};
