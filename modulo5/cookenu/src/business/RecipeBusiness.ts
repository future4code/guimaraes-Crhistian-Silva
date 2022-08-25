import { Authenticator } from './../services/Authenticator';
import {  RecipeDTO, RecipeInput } from "../model/recipeTypes";
import { HashManager } from '../services/HashManager';
import { IdGenerator } from "../services/IdGenerator";
import { RecipeDatabase } from '../data/RecipeDatabase';
import { Recipe } from '../model/recipe';

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

    let {title, description, preparationMode, token } = input;

    const recipe = new Recipe(title, description, preparationMode );

    const tokenData = this.authenticator.getTokenData(token);

    //achei interessante após a verificação do token, pegar o id do usuário e inserir no Banco em vez de pedir para ser enviado no body, já que para fazer a solicitação de criar o usuário já está logado e criação da receita só será concluída se for enviado um token válido

    const id: string = this.idGenerator.generateId();

    const newRecipe: RecipeDTO  = {
      id,
      title: recipe.getTitle(),
      description: recipe.getDescription(),
      preparationMode: recipe.getPreparation(),
      authorId: tokenData.id
    };

    await this.recipeDB.insertRecipe(newRecipe);
  };
}
