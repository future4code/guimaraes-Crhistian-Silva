import connection from "../connection";
import { DATAUSER, USER, PURCHASE } from "../types/types";

export const selectUsers = async (): Promise<any> => {
  let purchases: PURCHASE[];
  let newArrayData: DATAUSER[] = [];

  let users: USER[] = await connection
    .select("name", "email", "id", "address")
    .from("labecommerce_users")
    .orderBy("name", "asc");
  for (let user of users) {
    purchases = await connection("labecommerce_purchases as p")
      .select(
        "prod.name as product_name",
        "p.user_id as userId",
        "p.quantity",
        "p.total_price as TotalPrice"
      )
      .join("labecommerce_products as prod", "prod.id", "p.product_id")
      .join("labecommerce_users as u", "u.id", "p.user_id")
      .where("p.user_id", user.id);

    newArrayData.push({
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
      purchases: purchases,
    });
  }
  return newArrayData;
};
