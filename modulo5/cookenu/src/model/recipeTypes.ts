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
  creationDate?: Date | string
}

export type RecipeFeedInput = {
  idFollowd: string,
  token: string
};

export type RecipeDBDTO = {
  idFollowed: string,
  offset: number,
  limit: number,
};

export type InputRecipe = {
  authorId: string,
  offset: number,
  limit: number
}

export type RecipeInputById = {
  idRecipe: string,
  token: string,
}

export interface UserFeedDTO{
  id: string,
  title: string,
  description: string,
  creationDate: string,
  userId: string,
  userName: string

}
