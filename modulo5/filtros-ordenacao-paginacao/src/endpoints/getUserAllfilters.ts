import { Request, Response } from "express";
import { selectUsersByFilters } from "../querys/functions";

export const getUserAllfilters = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const query = req.query.name || ("%" as string);
    let sort = req.query.sort as string;
    let order = req.query.order as string;
    let limit = Number(req.query.limit) || 5;
    let page = Number(req.query.page) || 1;
    let offset = limit * (page - 1);
    if (sort?.toLowerCase() !== "name" && sort?.toLowerCase() !== "type") {
      sort = "name";
    }

    if (order?.toUpperCase() !== "DESC" && order?.toUpperCase() !== "ASC") {
      order = "DESC";
    }
    if (!page) {
      page = 1;
    }

    const users = await selectUsersByFilters(
      query as string,
      sort,
      order,
      limit,
      offset
    );

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
