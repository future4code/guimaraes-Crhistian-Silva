import express from "express"
import { RecipeController } from "../controller/RecipeController"

export const recipeRouter = express.Router()

const recipeController = new RecipeController()

recipeRouter.post('/create', recipeController.createRecipe)

recipeRouter.get("/:id", recipeController.getRecipeById)

recipeRouter.patch("/:id", recipeController.editRecipe)

recipeRouter.delete("/:id", recipeController.delRecipe)

/*
recipeRouter.get("/", recipeController.getPostsByType)



recipeRouter.post("/like", recipeController.likePost)

recipeRouter.delete("/unlike", recipeController.unlikePost)

recipeRouter.post("/comment", recipeController.commentPost)
 */



