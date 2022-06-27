import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { getUsers } from "../constants/functions";
import { USERS } from "../types/types";

export const getUsersAll = async (req: Request, res: Response) => {
  try {
    const users: USERS = await getUsers();

    if (!users) {
      res.status(codes.NOT_FOUND).send([]);
    }

    res.status(codes.SUCCESS).send(users);
  } catch (error: any) {
    switch (error.message) {
      case messages.NOT_FOUND:
        res.status(codes.NOT_FOUND).send(messages.NOT_FOUND);
        break;
      default:
        res.status(codes.SOME_ERROR).send(messages.SOME_ERROR);
    }
  }
};
