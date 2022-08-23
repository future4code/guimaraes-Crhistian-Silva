import express from "express"
import { UserController } from "../controller/UserController"

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/signup', userController.signUp)

userRouter.post("/relations", userController.createFriendship)

userRouter.delete("/relations", userController.deleteFriendship)
