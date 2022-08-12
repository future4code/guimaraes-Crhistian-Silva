import { UserDatabase } from "../data/UserDatabase";
import {
  MissingParameters,
  SameIdError,
  UserNotFound,
} from "../error/customError";
import {
  authenticationData,
  CreateCommentInput,
  CreatePostInput,
  LikePostInput,
  POST_TYPES,
  RelationsPostInput,
} from "../model/postTypes";

export const validatePostInput = (input: CreatePostInput): void => {
  if (!input.photo || !input.description || !input.type || !input.authorId) {
    throw new MissingParameters();
  }
};

export const validateIdAuthor = async (id: string): Promise<void> => {
  const user = new UserDatabase();
  const userList = await user.getUserById(id);

  if (!userList.length) {
    throw new UserNotFound();
  }
};

export const validateIdPost = (id: authenticationData): void => {
  if (!id) {
    throw new SameIdError();
  }
};

export const validateRelationDTO = (input: RelationsPostInput): void => {
  if (!input.idSender || !input.idReceiver) {
    throw new MissingParameters();
  }
};

export const validateId = (id: authenticationData): void => {
  const authorId = id.id;
  if (!authorId) {
    throw new UserNotFound();
  }
};

export const validateType = (type: POST_TYPES): void => {
  if (!type) {
    throw new MissingParameters();
  } else {
    if (
      type.toLowerCase() !== POST_TYPES.NORMAL &&
      type.toLowerCase() !== POST_TYPES.EVENT
    ) {
      type = POST_TYPES.NORMAL;
    }
  }
};

export const validateLikedInput = (input: LikePostInput): void => {
  if (!input.idPost || !input.idLikedAuthor) {
    throw new MissingParameters();
  }
};

export const validateCommentPostInput = (input: CreateCommentInput): void => {
  if (!input.idPost || !input.comment || !input.authorCommentId) {
    throw new MissingParameters();
  }
};
