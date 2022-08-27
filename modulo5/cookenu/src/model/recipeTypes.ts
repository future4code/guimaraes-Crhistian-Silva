export enum POST_TYPES {
  NORMAL = "normal",
  EVENT = "event",
}

export type RecipeInput = {
  title: string;
  description: string;
  preparationMode: string;
  token: string;
};

export interface RecipeDTO {
  authorId: string;
  id: string;
  title: string;
  description: string;
  preparationMode: string;
  creationDate?: Date | string;
}

export type RecipeFeedInput = {
  idFollowd: string;
  token: string;
};

export type RecipeDBDTO = {
  idFollowed: string;
  offset: number;
  limit: number;
};

export type InputRecipe = {
  authorId: string;
  offset: number;
  limit: number;
};

export type RecipeInputById = {
  idRecipe: string;
  token: string;
};

export type EditRecipeInput = {
  title: string;
  description: string | undefined;
  preparationMode: string | undefined;
  token: string;
  id: string;
};

export interface EditRecipeDTO {
  id: string;
  title: string | undefined;
  description: string | undefined;
  preparationMode: string | undefined;
}

export interface ValuesEditRecipe {
  title: string | undefined;
  description: string | undefined;
  preparationMode: string | undefined;
}
