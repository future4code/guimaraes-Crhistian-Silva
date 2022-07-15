import { Request, Response } from "express";
import { selectAllUsers } from "../querys/functions";

export const getAllUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let sort = req.query.sort as string;
    let order = req.query.order as string;
    let limit = Number(req.query.page)


    console.log("page", limit)
    if (sort?.toLowerCase() !== "name" && sort?.toLowerCase() !== "type") {
      sort = "email";
    }

    if (order?.toUpperCase() !== "ASC" && order?.toUpperCase() !== "DESC") {
      order = "ASC";
    }
    const users = await selectAllUsers(sort, order);

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
