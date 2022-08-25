import { UserDatabase } from "../data/UserDatabase";
import {
  AuthorRecipeNotFound,
  MissingParameters,
  MissingParametersToken,
  SameIdError,
  UserNotFound,
} from "../error/customError";
import {
  CreateCommentInput,
  RecipeInput,
  LikePostInput,
  POST_TYPES,
  RelationsPostInput,
  RecipeFeedInput,
} from "../model/recipeTypes";

export const validateRecipeInput = (input: RecipeInput): void => {
  if (!input.title || !input.description || !input.preparationMode) {
    throw new MissingParameters();
  }else if(!input.token){
    throw new MissingParametersToken();
  }
};

export const validateRecipeFeedInput = (input: RecipeFeedInput): void => {
  if (!input.idFollowed) {
    throw new MissingParameters();
  }else if(!input.token){
    throw new MissingParametersToken();
  }
};



export const validateIdAuthorRecipe = async (id: string): Promise<void> => {
  const user = new UserDatabase();
  const userList = await user.getUserById(id);

  if (!userList) {
    throw new AuthorRecipeNotFound();
  }
};



export const validateIdAuthor = async (id: string): Promise<void> => {
  const user = new UserDatabase();
  const userList = await user.getUserById(id);

  if (!userList) {
    throw new UserNotFound();
  }
};


export const validateIdPost = (id: string): void => {
  if (!id) {
    throw new SameIdError();
  }
};

export const validateRelationDTO = (input: RelationsPostInput): void => {
  if (!input.idSender || !input.idReceiver) {
    throw new MissingParameters();
  }
};

export const validateId = (id: string): void => {
  if (!id) {
    throw new UserNotFound();
  }
};

export const validateType = (type: POST_TYPES): void | POST_TYPES => {
  if (!type) {
    throw new MissingParameters();
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
