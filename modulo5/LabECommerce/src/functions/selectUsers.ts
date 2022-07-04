import connection from "../connection";
const usersList = "labecommerce_users";

//==================================================//
export const selectUsers = async (): Promise<any> => {
  const users = await connection.select("name").from(usersList);
  return users;
};
//==================================================//
