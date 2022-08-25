import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import {  RecipeBusinessFeedInput, RecipeDBDTO, RecipeDTO } from "../model/recipeTypes";

export class RecipeDatabase extends BaseDatabase {
  private recipesTable = "cookenu_recipes";

  public insertRecipe = async (recipe: RecipeDTO): Promise<void> => {
    try {
      await BaseDatabase.connection
        .insert({
          id: recipe.id,
          title: recipe.title,
          description: recipe.description,
          preparation_mode: recipe.preparationMode,
          author_id: recipe.authorId,
        })
        .into(this.recipesTable);
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };

  public getRecipesByAuthorId = async ({
    idFollowed,
    limit,
    offset
  }: RecipeDBDTO): Promise<RecipeDTO[]> => {
    try {
      const result: RecipeDTO[] = await BaseDatabase.connection(this.recipesTable)
        .select(
          "id",
          "title",
          "description",
          "preparation_mode as preparationMode",
          "creation_date as creationDate",
          "author_id as authorId"
        )
        .where("author_id", idFollowed)
        .orderBy("creation_date", "DESC")
        .limit(limit)
        .offset(offset);
      return result;
    } catch (error: any) {
      throw new CustomError(500, error.sqlMessage);
    }
  };
};
