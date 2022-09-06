import {
  EditRecipeInput,
  RecipeInput,
  RecipeInputById,
} from "../model/recipeTypes";
import { validateRecipeInput } from "./RecipeControllerSerializer";
import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";
import { validateToken } from "./userControllerSerializer";

export class RecipeController {

  constructor(  private recipeBusiness: RecipeBusiness) {
  }
  public createRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "SUCESS, RECIPE CREATED";

      const input: RecipeInput = {
        title: req.body.title,
        description: req.body.description,
        preparationMode: req.body.preparationMode,
        token: req.headers.authorization as string,
      };

      // validação de parâmetros input
      validateRecipeInput(input);

      await this.recipeBusiness.createRecipe(input);

      res.status(201).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public getRecipeById = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: RecipeInputById = {
        idRecipe: req.params.id as string,
        token: req.headers.authorization as string,
      };

      validateToken(input.token);

      const recipe = await this.recipeBusiness.getRecipeById(input);

      res.status(200).send(recipe);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public editRecipe = async (req: Request, res: Response): Promise<void>=> {
    try {
      const message = "Recipe changed successfully!! ";

      const input: EditRecipeInput = {
        token: req.headers.authorization as string,
        title: req.body.title,
        description: req.body.description,
        preparationMode: req.body.preparationMode,
        id: req.params.id,
      };

      validateToken(input.token);
      await this.recipeBusiness.editRecipe(input);
      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };

  public delRecipe = async (req: Request, res: Response): Promise<void> => {
    try {
      const message = "SUCESS, YOUR REQUEST HAS BEEN ACCEPTED, RECIPE DELETED";
    
      const token = req.headers.authorization as string
      const idRecipe = req.params.id 

      validateToken(token);

      await this.recipeBusiness.delRecipe(idRecipe, token);

      res.status(200).send(message);
    } catch (error: any) {
      res.status(error.status || 400).send(error.message);
    }
  };
}
