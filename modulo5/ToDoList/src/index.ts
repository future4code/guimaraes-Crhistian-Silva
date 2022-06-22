import { USER } from './types/types';
import { codes, messages } from "./constants/status";
import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid'


app.get("/test", async (req: Request, res: Response): Promise<any> => {
  try {
      res.status(codes.SUCCESS).send(messages.SUCCESS)
  } catch (error:any) {}
});

