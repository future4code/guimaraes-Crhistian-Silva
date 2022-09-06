import {
  EditRecipeDTO,
  EditRecipeInput,
  RecipeDTO,
  RecipeInput,
  RecipeInputById,
  ValuesEditRecipe,
} from "../model/recipeTypes";
import {
  AuthorRecipeNotFound,
  NotAllowed,
  RecipeIdNotFound,
  Unauthorized,
  UserNotFound,
} from "../error/customError";
import { validateValuesRecipeInput } from "../controller/RecipeControllerSerializer";
import { RecipeRepository } from "./RecipeRepository";
import { UserRepository } from "./UserRepository";
import { Recipe } from "../model/recipe";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "./../services/Authenticator";

export class RecipeBusiness {
  constructor(
    private userDB: UserRepository,
    private recipeDB: RecipeRepository,
    private authenticator: Authenticator,
    private idGenerator: IdGenerator
  ) {}
  public createRecipe = async (input: RecipeInput): Promise<void> => {
    const { title, description, preparationMode, token } = input;

    const recipe = new Recipe(title, description, preparationMode);

    const tokenData = this.authenticator.getTokenData(token);

    const user = this.userDB.getUserById(tokenData.id);

    if (!user) {
      throw new UserNotFound();
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

  public getRecipeById = async (input: RecipeInputById): Promise<RecipeDTO> => {
    //aqui sem deixar como any gera um erro

    this.authenticator.getTokenData(input.token);

    const recipe = await this.recipeDB.getRecipesById(input.idRecipe);

    if (!recipe) {
      throw new RecipeIdNotFound();
    }
    let newDateSplit = new Date(String(recipe.creationDate))
      .toISOString()
      .split("T");
    let newDate = newDateSplit[0].split("-").reverse().join("/");
    recipe.creationDate = newDate;

    return recipe;
  };

  public editRecipe = async (input: EditRecipeInput) => {
    let { title, id, token, description, preparationMode } = input;
    //acho interessante não validar nada, pois o usuário pode querer editar apenas algum item da receita e não todos

    const tokenData = this.authenticator.getTokenData(token);

    if (tokenData.role !== "normal") {
      throw new NotAllowed();
    }

    const recipe = await this.recipeDB.getRecipesById(id);

    if (!recipe) {
      throw new RecipeIdNotFound();
    }

    if (tokenData.id !== recipe.authorId) {
      throw new AuthorRecipeNotFound();
    }

    //aqui crio uma função para pegar os valores que serão enviados no body, caso o usuário não queira editar algum valor a função usa os mesmos que retornaram da busca no database, não consegui bolar alguma forma de no database atualizar apenas o que foi passada, aceito dicas sobre como melhorar isso
    const recipeInput: ValuesEditRecipe = {
      title,
      description,
      preparationMode,
    };

    const newRecipe = validateValuesRecipeInput(recipeInput, recipe);

    const editRecipeInput: EditRecipeDTO = {
      title: newRecipe.title,
      description: newRecipe.description,
      preparationMode: newRecipe.description,
      id,
    };
    await this.recipeDB.editRecipe(editRecipeInput);
  };

  public delRecipe = async (idRecipe: string, token: string): Promise<void> => {
    const tokenData = this.authenticator.getTokenData(token);

    const recipe = await this.recipeDB.getRecipesById(idRecipe);

    if (!recipe) {
      throw new RecipeIdNotFound();
    }
    // validação de tipo ou autor da receita, se for usuário comum e não for o autor não pode deletar
    if (tokenData.role !== "admin" && tokenData.id !== recipe.authorId) {
      throw new Unauthorized();
    }

    await this.recipeDB.delRecipe(idRecipe);
  };
}
