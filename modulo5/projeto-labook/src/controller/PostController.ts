import { StatusCodes } from "./../error/StatusCodes";
import { validateIdPost, validatePostDTO } from "./postControllerSerializer";
import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { PostDTO } from "../model/postDTO";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      const message = "SUCESS, POST CREATE";

      const input: PostDTO = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        authorId: req.body.authorId,
      };
      validatePostDTO(input, StatusCodes);

      await validateIdPost(input.authorId, StatusCodes)

      const postBusiness = new PostBusiness();

      await postBusiness.createPost(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public getPost = async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params;

      validateIdPost(id, StatusCodes);

      const postBusiness = new PostBusiness();

      const post = await postBusiness.getPost(id);

      res.status(200).send(post);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };
}
