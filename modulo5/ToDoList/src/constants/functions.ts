import connection from "../connection";
import { EDITUSER, TASK, USER } from "../types/types";
import { messages } from "../constants/statusCode";

const todoList = "TodoListUser";
const todoTask = "TodoListTask";
const todoResponsible = "TodoListResponsibleUserTaskRelation";
const todoListId = "TodoListTask.id";
const todoResponsibleId = "TodoListResponsibleUserTaskRelation.task_id";

export const createUser = async (user: USER): Promise<void> => {
  const userData = await connection(todoList);
  userData.forEach((u) => {
    if (u.nickname === user.nickname) {
      throw new Error(messages.NOT_IMPLEMENTED_NICKNAME);
    } else if (u.email === user.email) {
      throw new Error(messages.NOT_IMPLEMENTED_EMAIL);
    }
  });
  await connection(todoList).insert(user).into(todoList);
};

export const getUserData = async (idUser: string): Promise<any> => {
  const user = await connection(todoList).select("*").where("id", `${idUser}`);
  return user[0];
};

export const editUser = async (
  idUser: string,
  body: EDITUSER
): Promise<void> => {
  await connection(todoList)
    .where("id", `${idUser}`)
    .update({
      name: `${body.name}`,
      nickname: `${body.nickname}`,
    });
};

export const createTask = async (body: TASK): Promise<void> => {
  await connection.insert(body).into(todoTask);
};

export const getTask = async (idTask: string): Promise<any> => {
  const result: any = await connection
    .select(
      "id",
      "title",
      "description",
      "limit_date",
      "status",
      "creator_user_id",
      "creator_user_nickname"
    )
    .from(todoTask)
    .innerJoin(todoResponsible, todoListId, todoResponsibleId);
  return result;
};

export const getUsers = async (): Promise<any> => {
  const users = await connection(todoList).select("*");
  return users;
};

export const getTaskUser = async (idTask: string): Promise<any> => {
  const result = await connection(todoTask)
    .select("*")
    .where("creator_user", idTask);
  return result[0];
};
