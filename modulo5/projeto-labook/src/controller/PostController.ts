import { authenticationData, POST_TYPES } from "./../model/types";
import { StatusCodes } from "./../error/StatusCodes";
import {
  validateId,
  validateIdAuthor,
  validatePostDTO,
  validateRelationDTO,
  validateType,
} from "./postControllerSerializer";
import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";
import { Post } from "../model/post";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      const message = "SUCESS, POST CREATE";

      const input = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        authorId: req.body.authorId,
      };

      validatePostDTO(input, StatusCodes);

      await validateIdAuthor(input.authorId, StatusCodes);

      const postBusiness = new PostBusiness();

      await postBusiness.createPost(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public getPostById = async (req: Request, res: Response): Promise<any> => {
    try {
      const { id } = req.params as authenticationData;

      const postBusiness = new PostBusiness();

      const post = await postBusiness.getPostById(id);

      res.status(200).send(post);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public getFeeds = async (req: Request, res: Response): Promise<any> => {
    try {
      const id = {
        id: req.body.idSender
      }
      
      validateId(id, StatusCodes)

      const postBusiness = new PostBusiness();

      const posts = await postBusiness.getFeeds(id);

      res.status(200).send({posts});
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public getPostsByType = async (req: Request, res: Response): Promise<any> => {
    try {
      let type = req.query.type as POST_TYPES

      validateType(type, StatusCodes)
      
      const postBusiness = new PostBusiness();

      const posts = await postBusiness.getPostsByType(type);

      res.status(200).send({posts});
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

}


