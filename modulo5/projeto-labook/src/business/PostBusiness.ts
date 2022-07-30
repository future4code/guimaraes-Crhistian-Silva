import { post, POST_TYPES } from "./../types/types";
import { v4 as generateId } from "uuid";
import { PostDatabase } from "../data/PostDatabase";
import { BaseDatabase } from "../data/BaseDatabase";
import { CustomError } from "../data/error/customError";

export class PostBusiness extends BaseDatabase{
  public createPost = async (input: post): Promise<void> => {
    try {
      let { photo, description,type, authorId } = input;

      if (!photo || !description || !authorId) {
        throw new Error("MISSING PARAMETERS, PLEASE VERIFY DATA´S SENT ");
      }

      if(type?.toLowerCase() !== "normal" ||type?.toLowerCase() !== "event" ){
       type = POST_TYPES.NORMAL
      }

      const id: string = generateId();

      const postDatabase = new PostDatabase();

      await postDatabase.insertPost({
        id,
        photo,
        description,
        type,
        authorId,
      });
    } catch (error: any) {
      throw new Error(error.message || error.sqlmessage);
    }
  };

  public getPost = async (id: string): Promise<any> => {

    try {

      if(!id){
        throw new CustomError("MISSING PARAMETERS, PLEASE VERIFY THE ID SENT ", 404)
      }
      
      
      const postDatabase = new PostDatabase();

      const queryResult = await postDatabase.getPost(id)

      if (!queryResult[0]) {
        throw new CustomError("POST NOT FOUND", 404)
     }

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

     } catch (error:any) {
      throw new CustomError(error.sqlMessage || error.message, 500);
   }
  
}
}
