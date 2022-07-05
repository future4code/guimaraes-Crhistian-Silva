import connection from "../connection";
const usersList = "labecommerce_users";

export const selectUserById = async (idUser: string): Promise<any> => {
  const user = await connection
    .select("id")
    .from(usersList)
    .where("id", idUser);
  if (!user[0]) {
    throw new Error("NOT_FOUND");
  }
  return user;
};
