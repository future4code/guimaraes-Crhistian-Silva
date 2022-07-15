import { USER } from "../types/types";
import connection from "../connection";
const usersList = "labecommerce_users";

export const createUser = async (user: USER): Promise<void> => {
  const userData = await connection(usersList);
  if (userData) {
    userData.forEach((u: any) => {
      if (u.nickname === user.name) {
        throw new Error("NOT_IMPLEMENTED_NAME");
      } else if (u.email === user.email) {
        throw new Error("NOT_IMPLEMENTED_EMAIL");
      } else if (u.password === user.password) {
        throw new Error("NOT_IMPLEMENTED_PASSWORD");
      }
      return userData;
    });
  }

  await connection(usersList)
    .insert(user)
    .into(usersList);
};
