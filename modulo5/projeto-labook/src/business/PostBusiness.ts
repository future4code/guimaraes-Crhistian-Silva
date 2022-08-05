import { PostDatabase } from "../data/PostDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import { CustomError } from "../error/customError";
import { postInputDTO } from "../model/postDTO";
import { generateId } from "../services/generateId";
import { StatusCodes } from "../error/StatusCOdes";
import { Post } from "../model/post";
import {
  validateIdPost,
  validateInputPostDTO,
  validatePostFound,
  
} from "../services/validatesPost";
import { authenticationData, POST_TYPES } from "../model/types";

export class PostBusiness extends BaseDatabase {
  public createPost = async (input: postInputDTO): Promise<void> => {
    try {
      let { photo, description, type, authorId } = input;

      //IMPLANTADA VALIDAÇÃO DE INPUT
      validateInputPostDTO(input, StatusCodes);

      if (type?.toLowerCase() !== "normal" || type?.toLowerCase() !== "event") {
        type = POST_TYPES.NORMAL;
      }
      console.log(" type depois da verificacao==> ", type)
      const id: string = generateId();

      const post: Post = new Post(id, photo, description, type, authorId);

      const postDatabase = new PostDatabase();

      await postDatabase.insertPost(post);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
  public getPost = async (id: string): Promise<any> => {

    try {

      validateIdPost(id, StatusCodes)
      
      const postDatabase = new PostDatabase();

      const queryResult = await postDatabase.getPost(id)

      validatePostFound(queryResult, StatusCodes)

     const date = new Date(queryResult[0].created_at).toISOString().split("T").reverse()
     const newDate = date[1].split("-").reverse().join("/")
     const newPost = {
      id:queryResult[0].id,
      photo: queryResult[0].photo,
      description: queryResult[0].description,
      type: queryResult[0].type,
      createdAt: newDate,
      authorId: queryResult[0].author_id
     }
     return newPost

    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  
}
}