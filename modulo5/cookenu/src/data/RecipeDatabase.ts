import { BaseDatabase } from "./BaseDatabase";
import { CustomError } from "../error/customError";
import {  RecipeDTO } from "../model/recipeTypes";

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
  }
}
