import connection from "../connection";
import { USER } from "../types/types";
export const createUser = async (body:USER, todoList:string): Promise<void> => {
    await connection
      .insert({
        body
      })
      .into(`${todoList}`);
  };