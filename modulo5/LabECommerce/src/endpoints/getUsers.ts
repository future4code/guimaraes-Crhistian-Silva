import { messageStatus } from "../constants/statusCodes";
import { Request, Response } from "express";
import { selectUsers } from "../functions/selectUsers";
import { handlleError } from "../functions/handlleError";

export const getUsers = async (req: Request, res: Response) => {
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
