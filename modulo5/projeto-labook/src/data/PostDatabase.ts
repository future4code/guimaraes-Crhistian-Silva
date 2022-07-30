import { BaseDatabase } from "./BaseDatabase";
import { post } from "../types/types";
import { CustomError } from "./error/customError";

export class PostDatabase extends BaseDatabase {
  private postTable = "labook_posts";

  public insertPost = async (post: post): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: post.id,
          photo: post.photo,
          description: post.description,
          type: post.type,
          author_id: post.authorId,
        })
        .into(this.postTable);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getPost = async (id: string): Promise<any> => {
    try {
      const result: any = BaseDatabase.connection(this.postTable)
        .select("*")
        .where({ id });
      return result;
    } catch (error: any) {
      throw new CustomError(error.sqlMessage || error.message, 500);
    }
  };
}
