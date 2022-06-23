import { USER } from "../types/types"
import { codes, messages } from '../constants/statusCode';
import connection from "../connection";
import app from "../app";
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid';
import { createUser } from "../constants/functions";


export const postUser = async (req: Request, res: Response) => {
    try {
      const { name, nickname, email} = req.body
      
      const newUser:USER ={
      id: generateId(),
      name: name,
      nickname: nickname,
      email: email,
     }
     await createUser(newUser)
      res.status(codes.SUCCESS).send(messages.SUCCESS);
    } catch (error: any) {
      res.status(codes.SOME_ERROR).send(messages.SOME_ERROR);
    }
  }
