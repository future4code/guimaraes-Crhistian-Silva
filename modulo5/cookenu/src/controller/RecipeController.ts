import { RecipeBusinessFeedInput, RecipeFeedInput, RecipeInput } from "../model/recipeTypes";
import {
  validateId,
      validateRecipeFeedInput,
      validateRecipeInput,
} from "./RecipeControllerSerializer";
import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { validateToken } from "./userControllerSerializer";
import { AuthenticationData } from "../services/Authenticator";

export class RecipeController {
  private recipeBusiness: RecipeBusiness;
  constructor(){
    this.recipeBusiness = new RecipeBusiness()
  }
  public createRecipe = async (req: Request, res: Response) => {
    try {
      const message = "SUCESS, RECIPE CREATED";

      const input: RecipeInput = {
        title: req.body.title,
        description: req.body.description,
        preparationMode: req.body.preparationMode,
        token: req.headers.authorization as string
      };

// validação de parâmetros input 
      validateRecipeInput(input);

      await this.recipeBusiness.createRecipe(input)

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getRecipes = async (req: Request, res: Response): Promise<any> => {
    try {

      const input: RecipeFeedInput = {
        idFollowed: req.body.idFollowed as string,
        token: req.headers.authorization as string
      }

      validateRecipeFeedInput(input)

      let limit: number = 5;

      let page = Number(req.query.page) ? Number(req.query.page) : 1;

      let offset = limit * (page - 1);

      const recipeFeed: RecipeBusinessFeedInput = {
        idFollowed: input.idFollowed,
        offset,
        limit,
        token: input.token
      };

      const recipes = await this.recipeBusiness.getRecipes(recipeFeed);

      res.status(200).send({ recipes });
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

}