import express from "express"
import { RecipeController } from "../controller/RecipeController"

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.post('/create', recipeController.createRecipe)

 recipeRouter.get("/", recipeController.getRecipes)

/*
recipeRouter.get("/", recipeController.getPostsByType)

recipeRouter.get("/:id", recipeController.getPostById)

recipeRouter.post("/like", recipeController.likePost)

recipeRouter.delete("/unlike", recipeController.unlikePost)

recipeRouter.post("/comment", recipeController.commentPost)
 */



