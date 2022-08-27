import { RecipeDTO, ValuesEditRecipe } from "./../model/recipeTypes";
import { UserDatabase } from "../data/UserDatabase";
import {
  AuthorRecipeNotFound,
  MissingParameters,
  MissingParametersToken,
  SameIdError,
  UserNotFound,
} from "../error/customError";
import { RecipeInput, POST_TYPES, RecipeInputById } from "../model/recipeTypes";
import { FeedInput } from "../model/userTypes";

export const validateRecipeInput = (input: RecipeInput): void => {
  if (!input.title || !input.description || !input.preparationMode) {
    throw new MissingParameters();
  } else if (!input.token) {
    throw new MissingParametersToken();
  }
};

export const validateRecipeFeedInput = (input: FeedInput): void => {
  if (!input.idFollowd) {
    throw new MissingParameters();
  } else if (!input.token) {
    throw new MissingParametersToken();
  }
};

export const validateRecipeIdInput = (input: RecipeInputById): void => {
  if (!input.idRecipe) {
    throw new MissingParameters();
  } else if (!input.token) {
    throw new MissingParametersToken();
  }
};

export const validateValuesRecipeInput = (
  input: ValuesEditRecipe,
  recipe: RecipeDTO
): ValuesEditRecipe => {
  let { title, description, preparationMode } = input;

  if (!title) {
    title = recipe.title;
  }

  if (!description) {
    description = recipe.description;
  }
  if (!preparationMode) {
    preparationMode = recipe.preparationMode;
  }

  const newInput = {
    title,
    description,
    preparationMode,
  };
  return newInput;
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
