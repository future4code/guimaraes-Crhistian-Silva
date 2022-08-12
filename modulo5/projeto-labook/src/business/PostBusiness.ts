import { PostDatabase } from "./../data/PostDatabase";
import { UserDatabase } from "./../data/UserDatabase";
import { PostDTO } from "./../model/postDTO";
import { BaseDatabase } from "../data/BaseDatabase";
import { CustomError } from "../error/customError";
import { generateId } from "../services/generateId";
import { Post } from "../model/post";
import { StatusCodes } from "../error/StatusCodes";
import {
  authenticationData,
  CreateCommentInput,
  CreatePostInput,
  InputFeed,
  LikePostInput,
  POST_TYPES,
} from "../model/postTypes";
import { LikedDTO } from "../model/likedDTO";

export class PostBusiness extends BaseDatabase {
  public createPost = async (input: CreatePostInput): Promise<void> => {
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

    const postDB = new PostDatabase();

    await postDB.insertPost(newPost);
  };

  public getPostById = async (id: string): Promise<PostDTO> => {
    const postDB = new PostDatabase();

    const queryResult = await postDB.getPostById(id);

    if (!queryResult[0]) {
      throw new CustomError(
        StatusCodes.NOT_FOUND_POST.status,
        StatusCodes.NOT_FOUND_POST.message
      );
    }
    const dateSplit = new Date(String(queryResult[0].createdAt))
      .toISOString()
      .split("T")
      .reverse();
    const newDate = dateSplit[1].split("-").reverse().join("/");
    const newPost = {
      id: queryResult[0].id,
      photo: queryResult[0].photo,
      description: queryResult[0].description,
      type: queryResult[0].type,
      createdAt: newDate,
      authorId: queryResult[0].authorId,
    };
    return newPost;
  };

  public getFeed = async (input: InputFeed): Promise<PostDTO[]> => {
    let posts: any = [];
    const userDB = new UserDatabase();

    const usersResult = await userDB.checkRelations(input.authorId);

    if (!usersResult.length) {
      throw new CustomError(
        StatusCodes.NOT_FOUND_POST.status,
        StatusCodes.NOT_FOUND_POST.message
      );
    }

    for (let user of usersResult) {
      if (user.friend_sender_id === input.authorId) {
        const postDB = new PostDatabase();

        posts = await postDB.getPostsByAuthorId(input);

        for (const post of posts) {
          let newDateSplit = new Date(post.createdAt).toISOString().split("T");
          let newDate = newDateSplit[0].split("-").reverse().join("/");
          post.createdAt = newDate;
        }
      }
    }
    return posts;
  };

  public getPostsByType = async (type: POST_TYPES): Promise<PostDTO[]> => {
    const types = type;

    const postsDB = new PostDatabase();

    const posts = await postsDB.getPostsByType(types);

    if (!posts[0]) {
      throw new CustomError(
        StatusCodes.TYPE_ERROR.status,
        StatusCodes.TYPE_ERROR.message
      );
    }
    for (const post of posts) {
      let newDateSplit = new Date(String(posts[0].createdAt))
        .toISOString()
        .split("T");
      let newDate = newDateSplit[0].split("-").reverse().join("/");
      post.createdAt = newDate;
    }
    return posts;
  };

  public likePost = async (idsLiked: LikePostInput): Promise<void> => {
    let { idPost, idLikedAuthor } = idsLiked;

    const postsDB = new PostDatabase();

    const posts = await postsDB.getPostById(idPost);

    const userDB = new UserDatabase();

    const users = await userDB.getUserById(idLikedAuthor);

    if (!posts[0]) {
      throw new CustomError(
        StatusCodes.NOT_FOUND_POST.status,
        StatusCodes.NOT_FOUND_POST.message
      );
    }

    if (!users[0]) {
      throw new CustomError(
        StatusCodes.NOT_FOUND_USERS.status,
        StatusCodes.NOT_FOUND_USERS.message
      );
    }

    const id = generateId();

    const likedPost: LikedDTO = {
      id,
      id_post: idPost,
      id_liked_author: idLikedAuthor,
    };
    const postDB = new PostDatabase();

    //AQUI FAÇO VERIFICAÇÃO SE JÁ EXISTE O LIKE NO POST ENVIADO
    const like = await postDB.getLikedsById(idPost);

    if (like.length) {
      throw new CustomError(
        StatusCodes.ALREADY_EXISTS.status,
        StatusCodes.ALREADY_EXISTS.message
      );
    }

    await postDB.likePost(likedPost);
  };

  public unlikePost = async (idPost: authenticationData): Promise<void> => {
    const { id } = idPost;

    const postsDB = new PostDatabase();

    //CONSULTA AO BANCO PRA VER SE O ID ENVIADO RETORNA ALGUM POST VÁLIDO
    const posts = await postsDB.getPostById(id);

    const liked = await postsDB.getLikedsById(id);

    if (!posts.length) {
      throw new CustomError(
        StatusCodes.NOT_FOUND_POST.status,
        StatusCodes.NOT_FOUND_POST.message
      );
    }

    if (!liked.length) {
      throw new CustomError(
        StatusCodes.NOT_FOUND_LIKE.status,
        StatusCodes.NOT_FOUND_LIKE.message
      );
    }
    await postsDB.unlikePost(id);
  };

  public commentPost = async (input: CreateCommentInput): Promise<void> => {
    const { idPost, comment, authorCommentId } = input;

    const postsDB = new PostDatabase();

    const post = await postsDB.getPostById(idPost);

    const userDB = new UserDatabase();

    const user = await userDB.getUserById(authorCommentId);

    if (!post.length) {
      throw new CustomError(
        StatusCodes.NOT_FOUND_POST.status,
        StatusCodes.NOT_FOUND_POST.message
      );
    }

    if (!user.length) {
      throw new CustomError(
        StatusCodes.NOT_FOUND_USERS.status,
        StatusCodes.NOT_FOUND_USERS.message
      );
    }

    const id = generateId();

    const newComment = {
      id,
      id_post: idPost,
      comment,
      id_comment_author: authorCommentId,
    };

    await postsDB.insertComment(newComment);
  };
}
