import { Authenticator } from "./../services/Authenticator";
import {
  RecipeDTO,
  RecipeInput,
  RecipeInputById,
} from "../model/recipeTypes";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../model/recipe";
import { UserDatabase } from "../data/UserDatabase";
import {
  RecipeIdNotFound, UserNotFound
} from "../error/customError";

export class RecipeBusiness {
  private recipeDB: RecipeDatabase;
  private hashManager: HashManager;
  private authenticator: Authenticator;
  private idGenerator: IdGenerator;
  private userDB: UserDatabase;
  constructor() {
    this.recipeDB = new RecipeDatabase();
    this.hashManager = new HashManager();
    this.authenticator = new Authenticator();
    this.idGenerator = new IdGenerator();
    this.userDB = new UserDatabase();
  }
  public createRecipe = async (input: RecipeInput): Promise<void> => {
    let { title, description, preparationMode, token } = input;

    const recipe = new Recipe(title, description, preparationMode);

    const tokenData = this.authenticator.getTokenData(token);

    const user = this.userDB.getUserById(tokenData.id)
    
    if(!user){
      throw new UserNotFound()
    }

    //achei interessante após a verificação do token, pegar o id do usuário e inserir no Banco em vez de pedir para ser enviado no body, já que para fazer a solicitação de criar o usuário já está logado e criação da receita só será concluída se for enviado um token válido

    const id: string = this.idGenerator.generateId();

    const newRecipe: RecipeDTO = {
      id,
      title: recipe.getTitle(),
      description: recipe.getDescription(),
      preparationMode: recipe.getPreparation(),
      authorId: tokenData.id,
    };

    await this.recipeDB.insertRecipe(newRecipe);
  };


  public getRecipeById = async (
    input: RecipeInputById
  ): Promise<RecipeDTO> => {

    //aqui sem deixar como any gera um erro

    const tokenData = this.authenticator.getTokenData(input.token);
  
    const recipe  = await this.recipeDB.getRecipesById(input.idRecipe);

    if (!recipe) {
      throw new RecipeIdNotFound();
    }
       let newDateSplit = new Date(String(recipe.creationDate)).toISOString().split("T");
      let newDate = newDateSplit[0].split("-").reverse().join("/");
      recipe.creationDate = newDate;

    return recipe;
  };

}
