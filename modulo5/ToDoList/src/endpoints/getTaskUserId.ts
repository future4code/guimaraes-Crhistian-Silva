import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { getTaskUser } from "../constants/functions";

export const getTaskUserId = async (req: Request, res: Response) => {
  try {
    const idTask = req.query.creatorUserId as string;

    if (!idTask) {
      throw new Error(messages.MISSING_PARAMETERS);
    }
    const task = await getTaskUser(idTask);

    if (!task) {
      throw new Error(messages.NO_CONTENT);
    }
    res.status(codes.SUCCESS).send(task);
  } catch (error: any) {
    switch (error.message) {
      case messages.MISSING_PARAMETERS:
        res.status(codes.MISSING_PARAMETERS).send(messages.MISSING_PARAMETERS);
        break;
      case messages.NO_CONTENT:
        res.status(codes.NO_CONTENT).send(messages.NO_CONTENT);
        break;
      default:
        res.status(codes.SOME_ERROR).send(messages.SOME_ERROR);
    }
  }
};
