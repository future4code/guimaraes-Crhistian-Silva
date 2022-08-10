import { PostDTO } from "./../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { LikedDTO } from "../model/likedDTO";

export class PostDatabase extends BaseDatabase {
  private postTable = "labook_posts";
  private likedTable = "labook_liked_posts";

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
        .where({ id });
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
        .where("author_id", authorId)
        .orderBy("created_at", "DESC");
      return result;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public getPostsByType = async (type: string): Promise<any> => {
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
        .where({ type })
        .orderBy("created_at", "DESC");
      return result;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public getLikedsById = async (idPost: string): Promise<any> => {
    try {
      const result: any = await BaseDatabase.connection(this.likedTable)
        .select("*")
        .where("id_post", idPost);
      return result;
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };

  public insertLiked = async (likedPost: LikedDTO): Promise<void> => {
    try {
      await BaseDatabase.connection.insert(likedPost).into(this.likedTable);
    } catch (error: any) {
      throw new CustomError(error.status, error.message || error.sqlMessage);
    }
  };
}
