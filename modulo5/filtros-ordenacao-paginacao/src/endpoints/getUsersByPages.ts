import { Request, Response } from "express";
import { selectUsersByPages } from "../querys/functions";

export const getUsersByPages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let limit: number = 5;

    let page = Number(req.query.page);

    let offset = limit * (page - 1);

    const users = await selectUsersByPages(offset, limit);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    }
    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};