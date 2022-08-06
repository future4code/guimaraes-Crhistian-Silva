import { PostDTO } from "./../model/postDTO";
import { PostDatabase } from "../data/PostDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import { CustomError } from "../error/customError";
import { generateId } from "../services/generateId";
import { Post } from "../model/post";
import { StatusCodes } from "../error/StatusCodes";

export class PostBusiness extends BaseDatabase {
  public createPost = async (input: PostDTO): Promise<void> => {
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
}
