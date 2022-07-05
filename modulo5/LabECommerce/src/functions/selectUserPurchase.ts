import connection from "../connection";

export const selectUserPurchase = async (idUser: string): Promise<any> => {
  const dataUser = await connection
    .select(
      "user.name",
      "user.email",
      "prod.name as name_product",
      "purchase.quantity",
      "purchase.total_price"
    )
    .from("labecommerce_users as user")
    .innerJoin(
      "labecommerce_purchases as purchase",
      "user.id",
      "purchase.user_id"
    )
    .join(" labecommerce_products as prod", "prod.id", "purchase.product_id")
    .where("purchase.user_id", idUser);
  return dataUser;
};
