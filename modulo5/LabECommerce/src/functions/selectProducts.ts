import connection from "../connection";
const productsList = "labecommerce_products";

export const selectProducts = (name:string, sort:string, order:string | undefined): Promise<any> => {
  return  connection(productsList)
  .select("*")
  .where("name", "like", `%${name}%`)
  .orderBy(sort, order)
};
