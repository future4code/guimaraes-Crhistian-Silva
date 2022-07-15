import connection from "../connection";

export const selectUserPurchase = async (idUser: string): Promise<any> => {
  const dataUser = await connection
    .select(
      "prod.name as name_product",
      "p.quantity",
      "p.total_price",
      "p.user_id as user_id"
    )
    .from("labecommerce_purchases as p")
    .join(" labecommerce_products as prod", "prod.id", "p.product_id")
    .where("p.user_id", idUser);
  return dataUser;
};
