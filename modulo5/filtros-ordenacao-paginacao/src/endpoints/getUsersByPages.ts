import { Request, Response } from "express";
import { selectUsersByPages } from "../querys/functions";

export const getUsersByPages = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let page = Number(req.query.page)


    console.log("page", page)

    const users = await selectUsersByPages(page);

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
