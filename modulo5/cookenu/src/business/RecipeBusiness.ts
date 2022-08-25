import { Authenticator } from "./../services/Authenticator";
import {
  RecipeBusinessFeedInput,
  RecipeDTO,
  RecipeInput,
} from "../model/recipeTypes";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../model/recipe";
import { UserDatabase } from "../data/UserDatabase";
import {
  RecipesNotFound,
  UserFollowedNotFound,
  UserNotFound,
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

  public getRecipes = async (
    input: RecipeBusinessFeedInput
  ): Promise<RecipeDTO[]> => {
    let recipes: any = [];

    //aqui sem deixar como any gera um erro

    const { idFollowed, token } = input;

    const tokenData = this.authenticator.getTokenData(token);

    const usersRelation = await this.userDB.checkRelations(
      tokenData.id,
      idFollowed
    );

    if (!usersRelation) {
      throw new UserFollowedNotFound();
    }

    recipes = await this.recipeDB.getRecipesByAuthorId(input);

    if (!recipes.length) {
      throw new RecipesNotFound();
    }

    for (const recipe of recipes) {
      let newDateSplit = new Date(recipe.creationDate).toISOString().split("T");
      let newDate = newDateSplit[0].split("-").reverse().join("/");
      recipe.creationDate = newDate;
    }
    return recipes;
  };
}
