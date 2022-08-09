import { PostDTO } from "./../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { RelationsDTO } from "../model/relationsDTO";

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
          created_at: post.createdAt,
          author_id: post.authorId,
        })
        .into(this.postTable);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public getPostById = async (id: string): Promise<any> => {
    try {
      const result: any = await BaseDatabase.connection(this.postTable)
        .select("*")
        .where({ id })
        .orderBy("created_at", "DESC");
      return result;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public getPostsByAuthorId = async (authorId: string): Promise<any> => {
    try {
      const result: any = await BaseDatabase.connection(this.postTable)
        .select(
          "id",
          "photo",
          "description",
          "type",
          "created_at as createdAt",
          "author_id as authorId"
        )
        .where("author_id", authorId);
      return result;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
}
