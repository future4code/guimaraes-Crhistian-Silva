/* import { createUser } from "./endpoints/postUser" */
import { codes, messages } from "./constants/statusCode";
import app from "./app";
import { Request, Response } from "express";
import { postUser } from "./endpoints/postUser";


app.get("/test", async (req: Request, res: Response): Promise<any> => {
  try {
      res.status(codes.SUCCESS).send(messages.SUCCESS)
  } catch (error:any) {}
});

app.post("/user", postUser)

