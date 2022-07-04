import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { selectUsers } from "../functions/selectUsers";
import { handlleError } from "../functions/handlleError";

export const getUsers = async (req: Request, res: Response) => {
  let array: any = [];
  try {
    const users = await selectUsers();
    if (!users) {
      throw new Error("NOT_FOUND");
    }

    users.forEach((user: any) => {
      array.push(user.name);
      return array;
    });

    res.status(messageStatus.SUCCESS.status).send(array);
  } catch (error: any) {
    handlleError(res, error, messageStatus);
  }
};
