import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router();

const userController = new UserController();

userRouter.post("/signup", userController.signUp);

userRouter.post("/login", userController.login);

userRouter.get("/profile", userController.getUser);

userRouter.post("/follow", userController.followUser);

userRouter.delete("/unfollow", userController.unfollowUser);

userRouter.get("/feed", userController.getFeed);

userRouter.get("/:id", userController.getUserById);

userRouter.delete("/profile/delete", userController.delAccount);

userRouter.patch("/password", userController.forgotPassword);

userRouter.patch("/password/:id/:token", userController.updatePassword);
