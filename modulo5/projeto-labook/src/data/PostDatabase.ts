import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { Post } from "../model/post";

export class PostDatabase extends BaseDatabase {
  private postTable = "labook_posts";

  public insertPost = async (post: Post): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: post.getId(),
          photo: post.getPhoto(),
          description: post.getDescription(),
          type: post.getType(),
          author_id: post.getAuthor(),
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
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
}
