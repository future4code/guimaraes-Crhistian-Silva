import connection from "../connection";
import { USER } from "../types/types";

const todoList = "TodoListUser"

export const createUser = async (user:USER): Promise<void> => {
    await connection
      .insert(user)
      .into(`${todoList}`);
  };