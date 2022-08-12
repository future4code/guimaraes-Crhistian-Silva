import express from "express"
import { PostController } from "../controller/PostController"

export const postRouter = express.Router()

const postController = new PostController()

postRouter.post('/create', postController.createPost)

postRouter.get("/type", postController.getPostsByType)

postRouter.get("/:id", postController.getPostById)

postRouter.get("/", postController.getFeed)

postRouter.post("/like", postController.likePost)

postRouter.delete("/unlike", postController.unlikePost)

postRouter.post("/comment", postController.commentPost)




