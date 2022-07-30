import { post, POST_TYPES } from "./../types/types";
import { v4 as generateId } from "uuid";
import { PostDatabase } from "../data/PostDatabase";

export class PostBusiness {
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


  
}
}
