import connection from "../connection";
import { EDITUSER, TASK, USER, USERS, TASKS } from "../types/types";
import { messages } from "../constants/statusCode";

const todoList = "TodoListUser";
const todoTask = "TodoListTask";
const todoResponsible = "TodoListResponsibleUserTaskRelation";
const todoListId = "TodoListTask.id";
const responsibleTaskId = "TodoListResponsibleUserTaskRelation.task_id";
const responsibleUserId =
  "TodoListResponsibleUserTaskRelation.responsible_user_id";

export type userrs = { [key: string]: [{ id: number; nickname: string }] };

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
  const task: any = await connection
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
    .innerJoin(todoResponsible, todoListId, responsibleTaskId);
  task.forEach((element: any) => {
    const date = element.limit_date.toISOString().split("T").reverse();
    let newDate = date[1].split("-");
    newDate = newDate.reverse().join("/");
    element.limit_date = newDate;
  });
  return task;
};

export const getUsers = async (): Promise<any> => {
  const userData: USERS = await connection(todoList).select("id", "nickname");
  const newUser = {
    users: userData,
  };
  return newUser;
};

export const getTaskUser = async (
  idCreator: string
): Promise<{} | undefined> => {
  let arrayTasks = [];
  let taskObject = {};
  const taskData = await connection(todoTask)
    .select(
      "id",
      "title",
      "description",
      "limit_date",
      "creator_user_id",
      "status",
      "creator_user_nickname"
    )
    .leftJoin(todoResponsible, "creator_user_id", "=", responsibleUserId);
  for (let index = 0; index < taskData.length; index++) {
    const element = taskData[index];

    if (element.creator_user_id === idCreator) {
      const date = element.limit_date.toISOString().split("T").reverse();
      let newDate = date[1].split("-");
      newDate = newDate.reverse().join("/");
      element.limit_date = newDate;
      arrayTasks.push(element);
    }
  }
  taskObject = {
    tasks: arrayTasks,
  };

  return taskObject;
};
