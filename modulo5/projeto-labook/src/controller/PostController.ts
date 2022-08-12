import { authenticationData, POST_TYPES } from "../model/postTypes";
import {
  validateCommentPostInput,
  validateId,
  validateIdAuthor,
  validateLikedInput,
  validatePostInput,
  validateType,
} from "./postControllerSerializer";
import { PostBusiness } from "../business/PostBusiness";
import { Request, Response } from "express";

export class PostController {
  public createPost = async (req: Request, res: Response) => {
    try {
      const message = "SUCESS, POST CREATED";

      const input = {
        photo: req.body.photo,
        description: req.body.description,
        type: req.body.type,
        authorId: req.body.authorId,
      };

      validatePostInput(input);

      await validateIdAuthor(input.authorId);

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

  public getFeed = async (req: Request, res: Response): Promise<any> => {
    try {
      const id = {
        id: String(req.body.authorId)
      };
//Exercicio 11 
      let limit: number = 5

      let page = Number(req.query.page)? Number(req.query.page): 1

      let offset = limit * (page -1);
      
      validateId(id);

      const inputFeed = {
        authorId:id.id,
        offset,
        limit,
      }

      const postBusiness = new PostBusiness();

      const posts = await postBusiness.getFeed(inputFeed);

      res.status(200).send({ posts });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public getPostsByType = async (req: Request, res: Response): Promise<any> => {
    try {
      let type = req.query.type as POST_TYPES;

      validateType(type);

      const postBusiness = new PostBusiness();

      const posts = await postBusiness.getPostsByType(type);

      res.status(200).send({ posts });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public likePost = async (req: Request, res: Response): Promise<any> => {
    try {

      const message = "SUCESS, LIKED CREATED";

      const idsLiked = {
        idPost: req.body.idPost,
        idLikedAuthor: req.body.idLikedAuthor
      };

      validateLikedInput(idsLiked);

      const postBusiness = new PostBusiness();

      await postBusiness.likePost(idsLiked);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public unlikePost = async (req: Request, res: Response): Promise<any> => {
    try {

      const message = "SUCESS, YOUR REQUEST HAS BEEN ACCEPTED";

      const idPost = {
        id: req.body.idPost,
      };
 
      validateId(idPost);

      const postBusiness = new PostBusiness();

      await postBusiness.unlikePost(idPost); 

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message || error.sqlMessage);
    }
  };

  public commentPost = async (req: Request, res: Response) => {
    try {
      const message = "SUCESS, COMMENT CREATED";

      const input = {
       idPost:req.body.idPost,
       comment: req.body.comment,
       authorCommentId: req.body.authorCommentId
      };

      validateCommentPostInput(input);

      const postBusiness = new PostBusiness();
      
      await postBusiness.commentPost(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 500).send(error.message);
    }
  };


}
