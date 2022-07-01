import { Request, Response } from "express";
import { selectUsersByFilters } from "../querys/functions";

export const getUserAllfilters = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const query = req.query.query || "%"
    let sort = req.query.sort === "name" ? "name" : "email" || "type" ? "type" : "email"
    let order = req.query.order === "DESC" ? "DESC": "ASC"
    let size = Number(req.query.size) || 1
    let page = Number(req.query.page) || 5
    let offset = size * (page - 1);


/* 
    if(order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC"){
      order = "DESC"
    }

    if(!page){
      page = 1
    }
 */
    const users = await selectUsersByFilters (query as string, sort as string, order as string, offset, size);



    /*     if (!users.length) {
      res.statusCode = 404;
      throw new Error("No recipes found");
    } */
    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};


