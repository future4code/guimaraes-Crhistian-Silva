import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/signup', userController.signUp)
userRouter.post('/login', userController.login)
userRouter.put('/edit',userController.editUser )
userRouter.get('/profile', userController.getUser)

