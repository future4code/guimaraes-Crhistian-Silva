import connection from "../connection";
import {
  EDITUSER,
  TASK,
  USER,
  USERS,
  TASKS,
  TASKRESPONSIBLE,
} from "../types/types";
import { messages } from "../constants/statusCode";

const todoList = "TodoListUser";
const todoTask = "TodoListTask";
const todoResponsible = "TodoListResponsibleUserTaskRelation";
const todoListUserId = "TodoListUser.id";
const todoListTaskId = "TodoListTask.id";
const responsibleTaskId = "TodoListResponsibleUserTaskRelation.task_id";
const responsibleUserId =
  "TodoListResponsibleUserTaskRelation.responsible_user_id";

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
    .innerJoin(todoResponsible, todoListTaskId, responsibleTaskId);
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
  const taskData = await connection.raw(
    `SELECT t.id as taskId, t.title, t.description, t.limit_date, t.creator_user_id, t.status, l.nickname as creatorUserNickname FROM ${todoTask} as t INNER JOIN ${todoList} as l ON t.creator_user_id = l.id `
  );

  const newData = taskData[0];

  for (let index = 0; index < newData.length; index++) {
    const element = newData[index];

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

export const searchUsers = async (nick: string): Promise<any> => {
  const userData = await connection(todoList)
    .select("id", "nickname")
    .where("nickname", "like", `%${nick}%`)
    .orWhere("email", "like", `%${nick}%`);
  const newUser = {
    users: userData,
  };
  return newUser;
};

export const createTaskResponsible = async (
  body: TASKRESPONSIBLE
): Promise<void> => {
  const taskData = await connection(todoTask);
  const taskUser = await connection(todoList).select("*");

  const task = taskData.find((task) => task.id === body.task_id);

  if (!task) {
    throw new Error(messages.NOT_IMPLEMENTED_TASK);
  }
  //AKI FAÇO UMA VERIFICAÇÃO SE ID ENVIADO É VALIDO PARA CRIAR A RESPONSABILIDADE
  const user = taskUser.find((user) => user.id === body.responsible_user_id);

  if (!user) {
    throw new Error(messages.NOT_IMPLEMENTED_TASK);
  }

  await connection.insert(body).into(todoResponsible);
};

export const getTaskResponsible = async (idtask: string): Promise<any> => {
  let taskUser = {};

  const taskData =
    await connection.raw(`SELECT USERLIST.id as ID_USER, USERLIST.nickname from ${todoList} as USERLIST 
    inner join ${todoResponsible} 
    on USERLIST.id = TodoListResponsibleUserTaskRelation.responsible_user_id
    inner join ${todoTask} as TASK
    on TASK.id = TodoListResponsibleUserTaskRelation.task_id WHERE TASK.id = "${idtask}"`);
  const data = taskData[0];
  //AKI FAÇO UMA VERIFICAÇÃO SE USUÁRIOS RESPONSÁVEIS PELA MESMA TAREFA ESTÃO DUPLICADOS E REMOVO DO ARRAY DE RESPONSÁVEIS
  const setPerson = new Set();

  const filterPerson = data.filter((person: any) => {
    const duplicatedPerson = setPerson.has(person.ID_USER);
    setPerson.add(person.ID_USER);
    return !duplicatedPerson;
  });

  taskUser = {
    users: filterPerson,
  };
  return taskUser;
};
