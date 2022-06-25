import { TASKBODY, TASK } from "../types/types";
import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { v4 as generateId } from "uuid";
import { createTask } from "../constants/functions";

export const postTask = async (req: Request, res: Response) => {
  try {
    const dataTask: TASKBODY = req.body;

    if (
      !dataTask.title ||
      !dataTask.description ||
      !dataTask.limitDate ||
      !dataTask.creatorUserId
    ) {
      throw new Error(messages.MISSING_PARAMETERS);
    }

    const newTask: TASK = {
      id: generateId(),
      title: dataTask.title,
      description: dataTask.description,
      limit_Date: new Date(dataTask.limitDate),
      creator_user_Id: dataTask.creatorUserId,
    };
    await createTask(newTask);
    res.status(codes.SUCCESS).send(messages.SUCCESS);
  } catch (error: any) {
    switch (error.message) {
      case messages.MISSING_PARAMETERS:
        res.status(codes.MISSING_PARAMETERS).send(messages.MISSING_PARAMETERS);
        break;
      default:
        res.status(codes.SOME_ERROR).send(messages.SOME_ERROR);
    }
  }
};
