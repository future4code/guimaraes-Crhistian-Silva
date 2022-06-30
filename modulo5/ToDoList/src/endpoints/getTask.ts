import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { getTask } from "../constants/functions";

export const getTaskById = async (req: Request, res: Response) => {
  try {
    const idTask: string = req.params.id;

    if (!idTask) {
      throw new Error(messages.MISSING_PARAMETERS);
    }
    const tasks = await getTask(idTask);

    if (!tasks) {
      throw new Error(messages.NO_CONTENT);
    }

    let newTasks;

    tasks.forEach((element: any) => {
      if (element.id === idTask) {
        newTasks = element;
        return newTasks;
      }
    });
    res.status(codes.SUCCESS).send(newTasks);
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
