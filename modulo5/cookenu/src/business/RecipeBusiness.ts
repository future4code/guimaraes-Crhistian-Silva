import { Authenticator } from './../services/Authenticator';
import {  RecipeDTO, RecipeInput } from "../model/recipeTypes";
import { Recipe } from "../model/Recipe";
import { HashManager } from '../services/HashManager';
import { IdGenerator } from "../services/IdGenerator";
import { RecipeDatabase } from '../data/RecipeDatabase';

export class RecipeBusiness {
  private recipeDB: RecipeDatabase;
  private hashManager: HashManager;
  private authenticator: Authenticator;
  private idGenerator: IdGenerator;
    constructor(){
      this.recipeDB = new RecipeDatabase();
      this.hashManager = new HashManager();
      this.authenticator =  new Authenticator();
      this.idGenerator =  new IdGenerator()
    }
  public createRecipe = async (input: RecipeInput): Promise<void> => {

    let { authorId, title, description, preparationMode } = input;

    const recipe = new Recipe(authorId, title, description, preparationMode );

    const id: string = this.idGenerator.generateId();

    const newRecipe: RecipeDTO  = {
      id,
      title: recipe.getTitle(),
      description: recipe.getDescription(),
      preparationMode: recipe.getPreparation(),
      authorId: recipe.getAuthor(),
    };

    await this.recipeDB.insertRecipe(newRecipe);
  };
}
