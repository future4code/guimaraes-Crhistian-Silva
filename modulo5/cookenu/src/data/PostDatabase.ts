import { PostDTO } from "./../model/postDTO";
import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import { LikedDTO } from "../model/likedDTO";
import { InputFeed } from "../model/postTypes";
import { CommentDTO } from "../model/commentDTO";

export class PostDatabase extends BaseDatabase {
  private postTable = "labook_posts";
  private likedTable = "labook_liked_posts";
  private commentTable = "labook_comments_posts";

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
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getPostById = async (id: string): Promise<PostDTO[]> => {
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
        .where({ id });
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getPostsByAuthorId = async ({
    authorId,
    limit,
    offset,
  }: InputFeed): Promise<PostDTO[]> => {
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
        .orderBy("created_at", "DESC")
        .limit(limit)
        .offset(offset);
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getPostsByType = async (type: string): Promise<PostDTO[]> => {
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
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getLikedsById = async (idPost: string): Promise<LikedDTO[]> => {
    try {
      const result: any = await BaseDatabase.connection(this.likedTable)
        .select("*")
        .where("id_post", idPost);
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public likePost = async (likedPost: LikedDTO): Promise<void> => {
    try {
      await BaseDatabase.connection.insert(likedPost).into(this.likedTable);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public unlikePost = async (idPost: string): Promise<void> => {
    try {
      await BaseDatabase.connection
        .from(this.likedTable)
        .where("id_post", idPost)
        .del();
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public insertComment = async (input: CommentDTO): Promise<void> => {
    try {
      await BaseDatabase.connection.insert(input).into(this.commentTable);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
}
