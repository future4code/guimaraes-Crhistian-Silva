import connection from "../connection";

export const selectAllUsers = async (
  sort: string,
  order: string
): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .orderBy(sort as string, order as string);

  return result;
};

export const selectUserByType = async (type: string): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("type", "like", `%${type}%`);

  return result;
};

export const selectUsersByPages = async (
  offset: number,
  limit: number
): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .orderBy("id")
    .limit(limit)
    .offset(offset);
  return result;
};

export const selectUsersByFilters = async (
  query: string,
  sort: string,
  order: string,
  limit: number,
  offset: number
): Promise<any> => {
  const result = await connection("aula48_exercicio")
    .select("*")
    .where("name", "like", `%${query}%`)
    .orWhere("type", "like", `%${query}%`)
    .orderBy(sort, order)
    .limit(limit)
    .offset(offset);
  return result;
};
