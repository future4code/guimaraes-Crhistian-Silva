import { codes, messages } from './status';
import connection from "./connection";
import app from "./app";
import { Request, Response } from "express";
import { v4 as generateId } from 'uuid'


app.get("/test", async (req: Request, res: Response): Promise<any> => {
  try {
  /*  const result = await connection() */
   console.log();
   res.status(200).send("projeto funcionando")
  } catch (error:any) {}
});

app.post("/user", async (req: Request, res: Response): Promise<any> => {
   try {
      
   } catch (erro:any) {
      
   }

});