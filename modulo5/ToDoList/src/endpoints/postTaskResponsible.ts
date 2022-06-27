import { TASKRESPONSIBLE } from "../types/types";
import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { createTaskResponsible } from "../constants/functions";

export const postTaskResponsible = async (req: Request, res: Response) => {
  try {
    const dataTask: TASKRESPONSIBLE = req.body;

    if (!dataTask.task_id || !dataTask.responsible_user_id) {
      throw new Error(messages.MISSING_PARAMETERS);
    }

    await createTaskResponsible(dataTask);

    res.status(codes.SUCCESS).send(messages.SUCCESS);
  } catch (error: any) {
    switch (error.message) {
      case messages.MISSING_PARAMETERS:
        res.status(codes.MISSING_PARAMETERS).send(messages.MISSING_PARAMETERS);
        break;
      case messages.NOT_IMPLEMENTED_TASK:
        res.status(codes.NOT_IMPLEMENTED).send(messages.NOT_IMPLEMENTED_TASK);
        break;
      case messages.NOT_IMPLEMENTED_RESPONSIBLE:
        res
          .status(codes.NOT_IMPLEMENTED)
          .send(messages.NOT_IMPLEMENTED_RESPONSIBLE);
        break;
      default:
        res.status(codes.SOME_ERROR).send(messages.SOME_ERROR);
    }
  }
};
