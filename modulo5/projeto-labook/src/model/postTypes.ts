export type authenticationData = {
  id: string;
};

export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export type CreatePostInput = {
  photo: string;
  description: string;
  type: POST_TYPES;
  authorId: string;
};

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
