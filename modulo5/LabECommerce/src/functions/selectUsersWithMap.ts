//DEIXEI NO PROJETO APENAS PARA CONSULTA FUTURA

import connection from "../connection";
import { DATAUSER, USER, PURCHASE } from "../types/types";

export const selectUsersWithMap = async (): Promise<any> => {
  let users: USER[] = await connection
    .select("name", "email", "id")
    .from("labecommerce_users");

  const purchases: DATAUSER[] = await Promise.all(
    users.map(async (u: any) => {
      const purchases: PURCHASE[] = await connection(
        "labecommerce_purchases as p"
      )
        .select(
          "prod.name as product_name",
          "p.user_id",
          "p.quantity",
          "p.total_price"
        )
        .join("labecommerce_products as prod", "prod.id", "p.product_id")
        .join("labecommerce_users as u", "u.id", "p.user_id")
        .where("p.user_id", u.id);
      return { ...u, purchases };
    })
  );
  return purchases;
};
