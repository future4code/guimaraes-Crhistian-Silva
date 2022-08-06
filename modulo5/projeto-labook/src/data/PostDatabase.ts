import { PostDTO } from './../model/postDTO';
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";

export class PostDatabase extends BaseDatabase {
  private postTable = "labook_posts";

  public insertPost = async (post: PostDTO): Promise<void> => {
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
        throw new CustomError(error.status, error.message || error.sqlMessage);
      }
  };

  public getPostById = async (id: string): Promise<any> => {
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
