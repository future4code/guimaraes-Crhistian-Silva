import { Request, Response } from "express";
import { messageStatus } from "./constants/statusCodes";
import { handlleError } from "./functions/handlleError";
import { selectUsers } from "./functions/selectUsers";

export const getUsers = async (req: Request, res: Response) => {
  let array: any = [];
  try {
    const users = await selectUsers();
    if (!users) {
      throw new Error("NOT_FOUND");
    }
    const newUser = {
      users:users
    }

    res.status(messageStatus.SUCCESS.status).send(newUser);
  } catch (error: any) {
    handlleError(res, error);
  }
};
