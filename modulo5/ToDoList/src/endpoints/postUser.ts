/* import { createUser } from './../constants/functions'; */
import { USER } from "../types/types"
import { codes, messages } from '../constants/status';
import connection from "../connection";
import app from "../app";
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';

const todoListUser = "TodoListUser"

const createUser = async (
   name: string,
   nickname: string,
   email: string
 ): Promise<void> => {
   await connection
     .insert({
       id: generateId(),
       name: name,
       nickname: nickname,
       email: email,
     })
     .into(`${todoListUser}`);
 };

 app.post("/user", async (req: Request, res: Response) => {
   try {
     await createUser(
       req.body.name,
       req.body.nickname,
       req.body.email
     );
     res.status(codes.SUCCESS).send(messages.SUCCESS);
   } catch (error: any) {
     res.status(codes.SOME_ERROR).send(error);
   }
 });