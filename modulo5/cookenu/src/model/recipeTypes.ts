export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export type RecipeInput = {
  title: string,
  description: string,
  preparationMode: string,
  token: string
};


export interface RecipeDTO{
  authorId: string,
  id: string,
  title: string,
  description: string,
  preparationMode: string,
  creationDate?: Date | number| string
}









export type RelationsPostInput = {
  idSender: string;
  idReceiver: string;
};

export type LikePostInput = {
  idPost: string;
  idLikedAuthor: string
}

export type CreateCommentInput = {
  idPost: string;
  comment: string;
  authorCommentId: string
}

export type InputFeed = {
  authorId: string,
  offset: number,
  limit: number
}
