import { RecipeController } from "./../controller/RecipeController";
import { RecipeBusiness } from "./../business/RecipeBusiness";
import { RecipeDatabase } from "./../data/RecipeDatabase";
import express from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const recipeRouter = express.Router();

const authenticator = new Authenticator();
const idGenerator = new IdGenerator();
const userDB = new UserDatabase();
const recipeDB = new RecipeDatabase();

const recipeBusiness = new RecipeBusiness(
  userDB,
  recipeDB,
  authenticator,
  idGenerator
);

const recipeController = new RecipeController(recipeBusiness);

recipeRouter.post("/create", (req, res) =>
  recipeController.createRecipe(req, res)
);

recipeRouter.get("/:id", (req, res) =>
  recipeController.getRecipeById(req, res)
);

recipeRouter.patch("/:id", (req, res) => recipeController.editRecipe(req, res));

recipeRouter.delete("/:id", (req, res) => recipeController.delRecipe(req, res));
