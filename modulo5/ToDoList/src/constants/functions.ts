import connection from "../connection";
import { EDITUSER } from "../types/types";
import { messages } from "../constants/statusCode";

const todoList = "TodoListUser";

export const createUser = async (user: EDITUSER): Promise<void> => {
  await connection.insert(user).into(`${todoList}`);
};

export const getUser = async (idUser: string): Promise<{}> => {
  const result = await connection(`${todoList}`)
    .select("id", "name")
    .where("id", `${idUser}`);
  return result[0];
};

export const editUser = async (
  idUser: string,
  body: EDITUSER
): Promise<number | undefined> => {
  //ANTES DE FAZER A MODIFICAÇÃO, FAÇO UMA VERIFICAÇÃO DE DADOS PARA VER SE OS DADOS ENVIADOS SÃO OS MESMOS QUE JÁ ESTÃO
  const result = await connection(`${todoList}`)
    .select("*")
    .where("id", `${idUser}`);



    const user = await connection(`${todoList}`)
      .where("id", `${idUser}`)
      .update({ nickname: `${body.nickname}` });
    return user;

};
