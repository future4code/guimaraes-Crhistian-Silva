import { EditRecipeDTO, RecipeDBDTO, RecipeDTO } from "../model/recipeTypes";

export interface RecipeRepository {
  insertRecipe(recipe: RecipeDTO): Promise<void>;
  getRecipesById(idRecipe: string): Promise<RecipeDTO>;
  getRecipesByAuthorId({
    idFollowed,
    limit,
    offset,
  }: RecipeDBDTO): Promise<RecipeDTO[]>;
  editRecipe(recipe: EditRecipeDTO): Promise<void>;
  delRecipe(idRecipe: string): Promise<void>;
}
