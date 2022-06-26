import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { getUserData } from "../constants/functions";

export const getUserById = async (req: Request, res: Response) => {
  try {
    const idUser: string = req.params.id;

    if (!idUser) {
      throw new Error(messages.MISSING_PARAMETERS);
    }

    const user = await getUserData(idUser);

    if (!user) {
      throw new Error(messages.NOT_FOUND);
    }

    const userData: {} = {
      name: user.name,
      nickname: user.nickname,
    };
    res.status(codes.SUCCESS).send(userData);
  } catch (error: any) {
    switch (error.message) {
      case messages.MISSING_PARAMETERS:
        res.status(codes.MISSING_PARAMETERS).send(messages.MISSING_PARAMETERS);
        break;
      case messages.NOT_FOUND:
        res.status(codes.NOT_FOUND).send(messages.NOT_FOUND);
        break;

      default:
        res.status(codes.SOME_ERROR).send(messages.SOME_ERROR);
    }
  }
};
