import { codes, messages } from "../constants/statusCode";
import { Request, Response } from "express";
import { searchUsers } from "../constants/functions";
import { USERS } from "../types/types";

export const searchUsersById = async (req: Request, res: Response) => {
  try {
    const nickUser = req.query.nickname as string;

    if (!nickUser) {
      throw new Error(messages.MISSING_PARAMETERS);
    }

    const users: USERS = await searchUsers(nickUser);

    if (!users) {
      res.status(codes.NOT_FOUND).send([]);
    }

    res.status(codes.SUCCESS).send(users);
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
