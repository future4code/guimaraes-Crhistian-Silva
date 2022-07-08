import { DATAUSER } from "../types/types";
import { Request, Response } from "express";
import { selectUsers } from "../functions/selectUsers";
import { messageStatus } from "../constants/statusCodes";
import { handlleError } from "../functions/handlleError";


export const getUsers = async (req: Request, res: Response) => {
  try {
    const users: DATAUSER[] = await selectUsers();

    if (!users) {
      throw new Error("NOT_FOUND");
    }

    res.status(messageStatus.SUCCESS.status).send(users);
  } catch (error: any) {
    handlleError(res, error);
  }
};
