import { RecipeInput } from "../model/recipeTypes";
import {
      validateRecipeInput,
} from "./RecipeControllerSerializer";
import { Request, Response } from "express";
import { RecipeBusiness } from "../business/RecipeBusiness";

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

}