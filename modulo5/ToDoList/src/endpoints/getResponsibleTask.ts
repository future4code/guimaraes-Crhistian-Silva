import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { getTaskResponsible } from "../constants/functions";

export const getResponsibleTask = async (req: Request, res: Response) => {
  try {
    const idTask = req.params.id as string;

    if (!idTask) {
      throw new Error(messages.MISSING_PARAMETERS);
    }
    const users = await getTaskResponsible(idTask);

    if (!users) {
      throw new Error(messages.NOT_FOUND);
    }

    res.status(codes.SUCCESS).send(users);
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
