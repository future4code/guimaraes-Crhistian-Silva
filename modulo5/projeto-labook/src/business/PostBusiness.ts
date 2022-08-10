import { validateRelationsDTO } from "./../controller/userControllerSerializer";
import { PostDatabase } from "./../data/PostDatabase";
import { UserDatabase } from "./../data/UserDatabase";
import { PostDTO } from "./../model/postDTO";
import { BaseDatabase } from "../data/BaseDatabase";
import { CustomError } from "../error/customError";
import { generateId } from "../services/generateId";
import { Post } from "../model/post";
import { StatusCodes } from "../error/StatusCodes";
import {
  authenticationData,
  CreatePostInput,
  LikePostInput,
  POST_TYPES,
} from "../model/types";
import { LikedDTO } from "../model/likedDTO";

export class PostBusiness extends BaseDatabase {
  public createPost = async (input: CreatePostInput): Promise<void> => {
    try {
      let { photo, description, type, authorId } = input;

      const post = new Post(photo, description, type, authorId);

      //IMPLANTADA VALIDAÇÃO DE INPUT

      post.checkType(type);

      const id: string = generateId();

      const newPost: PostDTO = {
        id,
        photo: post.getPhoto(),
        description: post.getDescription(),
        type: post.getType(),
        authorId: post.getAuthor(),
      };

      const postDatabase = new PostDatabase();

      await postDatabase.insertPost(newPost);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public getPostById = async (id: string): Promise<any> => {
    try {
      const postDatabase = new PostDatabase();

      const queryResult = await postDatabase.getPostById(id);

      if (!queryResult[0]) {
        throw new CustomError(
          StatusCodes.NOT_FOUND_POST.status,
          StatusCodes.NOT_FOUND_POST.message
        );
      }

      const date = new Date(queryResult[0].created_at)
        .toISOString()
        .split("T")
        .reverse();
      const newDate = date[1].split("-").reverse().join("/");
      const newPost = {
        id: queryResult[0].id,
        photo: queryResult[0].photo,
        description: queryResult[0].description,
        type: queryResult[0].type,
        createdAt: newDate,
        authorId: queryResult[0].author_id,
      };
      return newPost;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public getFeeds = async (id: authenticationData): Promise<any> => {
    try {
      let posts: any = [];
      const userDB = new UserDatabase();

      const usersResult = await userDB.checkRelations(id.id);

      if (!usersResult.length) {
        throw new CustomError(
          StatusCodes.NOT_FOUND_POST.status,
          StatusCodes.NOT_FOUND_POST.message
        );
      }

      for (let user of usersResult) {
        if (user.friend_sender_id === id.id) {
          const postDB = new PostDatabase();

          posts = await postDB.getPostsByAuthorId(user.friend_sender_id);

          for (const post of posts) {
            let newDateSplit = new Date(post.createdAt)
              .toISOString()
              .split("T");
            let newDate = newDateSplit[0].split("-").reverse().join("/");
            post.createdAt = newDate;
          }
        }
      }
      return posts;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public getPostsByType = async (type: POST_TYPES): Promise<any> => {
    try {
      const types = type;

      const postsDB = new PostDatabase();

      const posts = await postsDB.getPostsByType(types);

      if (!posts[0]) {
        throw new CustomError(
          StatusCodes.TYPE_ERROR.status,
          StatusCodes.TYPE_ERROR.message
        );
      }

      for (const post of posts) {
        let newDateSplit = new Date(post.createdAt).toISOString().split("T");
        let newDate = newDateSplit[0].split("-").reverse().join("/");
        post.createdAt = newDate;
      }
      return posts;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
  public createLiked = async (idsLiked: LikePostInput): Promise<void> => {
    try {
      let { idPost, idLikedAuthor } = idsLiked;

      const postsDB = new PostDatabase();

      const posts = await postsDB.getPostById(idPost);

      const userDB = new UserDatabase();

      const users = await userDB.getUserById(idLikedAuthor);

      if (!posts[0]) {
        throw new CustomError(
          StatusCodes.NOT_FOUND_POST.status,
          StatusCodes.NOT_FOUND_POST.message
        );
      }

      if (!users[0]) {
        throw new CustomError(
          StatusCodes.NOT_FOUND_USERS.status,
          StatusCodes.NOT_FOUND_USERS.message
        );
      }

      const id = generateId();

      const likedPost: LikedDTO = {
        id,
        id_post: idPost,
        id_liked_author: idLikedAuthor,
      };
      const postDB = new PostDatabase();

      //AQUI FAÇO VERIFICAÇÃO SE JÁ EXISTE O LIKE NO POST ENVIADO
      const like = await postDB.getLikedsById(idPost);
      
      if (like.length) {
        throw new CustomError(
          StatusCodes.ALREADY_EXISTS.status,
          StatusCodes.ALREADY_EXISTS.message
        );
      }

      await postDB.insertLiked(likedPost);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
}
